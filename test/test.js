import { test, describe } from "mocha";
import { assert } from "chai";

describe("Test", () => {
  test("Succeeds", () => assert.strictEqual(1, 1));
  test("Fails", () => assert.strictEqual(1, 2));
})