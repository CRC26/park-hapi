import { assert } from "chai";
import { parkService } from "./park-service.js";
import { daisy, testCounties, testParks } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Park API tests", () => {
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
    const returnedCounty = await parkService.createCounty(testCounties[0]);
    await parkService.makePark(returnedCounty._id, testParks[0]);
    const returnedParks = await parkService.getParks(returnedCounty._id);
    assert.equal(returnedParks.length, 1);
    assertSubset(returnedParks[0], testParks[0]);
  });
});