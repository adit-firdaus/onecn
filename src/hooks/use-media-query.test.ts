import { describe, expect, test } from "bun:test";
import { useMediaQuery } from "./use-media-query";

describe("useMediaQuery", () => {
  test("exports a function", () => {
    expect(typeof useMediaQuery).toBe("function");
  });
});
