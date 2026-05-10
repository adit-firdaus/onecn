import { describe, expect, test } from "bun:test";
import { usePrevious } from "./use-previous";

describe("usePrevious", () => {
  test("exports a function", () => {
    expect(typeof usePrevious).toBe("function");
  });
});
