import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { parkService } from "./park-service.js";
import { daisy, daisyCredentials, testUsers } from "../fixtures.js";

const users = new Array(testUsers.length);

suite("User API tests", () => {
  setup(async () => {
    parkService.clearAuth();
    await parkService.createUser(daisy);
    await parkService.authenticate(daisyCredentials);
    await parkService.deleteAllUsers();
    for (let i = 0; i < testUsers.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      users[0] = await parkService.createUser(testUsers[i]);
    }
    await parkService.createUser(daisy);
    await parkService.authenticate(daisyCredentials);
  });
  teardown(async () => {});

  test("create a user", async () => {
    const newUser = await parkService.createUser(daisy);
    assertSubset(daisy, newUser);
    assert.isDefined(newUser._id);
  });

  test("delete all user", async () => {
    let returnedUsers = await parkService.getAllUsers();
    assert.equal(returnedUsers.length, 4);
    await parkService.deleteAllUsers();
    await parkService.createUser(daisy);
    await parkService.authenticate(daisyCredentials);
    returnedUsers = await parkService.getAllUsers();
    assert.equal(returnedUsers.length, 1);
  });

  test("get a user", async () => {
    const returnedUser = await parkService.getUser(users[0]._id);
    assert.deepEqual(users[0], returnedUser);
  });

  test("get a user - bad id", async () => {
    try {
      const returnedUser = await parkService.getUser("1234");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 503);
    }
  });

  test("get a user - deleted user", async () => {
    await parkService.deleteAllUsers();
    await parkService.createUser(daisy);
    await parkService.authenticate(daisyCredentials);
    try {
      const returnedUser = await parkService.getUser(users[0]._id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });
});