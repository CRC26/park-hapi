import { assert } from "chai";
import { parkService } from "./park-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { daisy } from "../fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
 parkService.clearAuth();
    await parkService.createUser(daisy);
    await parkService.authenticate(daisy);
    await parkService.deleteAllUsers();
  });

  test("authenticate", async () => {
    const returnedUser = await parkService.createUser(daisy);
    const response = await parkService.authenticate(daisy);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("verify Token", async () => {
    const returnedUser = await parkService.createUser(daisy);
    const response = await parkService.authenticate(daisy);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });

  test("check Unauthorized", async () => {
 parkService.clearAuth();
    try {
      await parkService.deleteAllUsers();
      assert.fail("Route not protected");
    } catch (error) {
      assert.equal(error.response.data.statusCode, 401);
    }
  });
});