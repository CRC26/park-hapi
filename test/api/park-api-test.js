import { assert } from "chai";
import { parkService } from "./park-service.js";
import { daisy, testParks } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("park API tests", () => {
  setup(async () => {
    await parkService.createUser(daisy);
    await parkService.authenticate(daisy);
    await parkService.deleteAllUsers();
    await parkService.createUser(daisy);
    await parkService.authenticate(daisy);
  });
  teardown(async () => {
    await parkService.deleteAllUsers();
  });

  test("create a park", async () => {
    const returnedPark= await parkService.addParks(testParks);
    const response = await parkService.authenticate(testParks);
    assert(response.success);
    assert.isDefined(response.token);

  });
});


