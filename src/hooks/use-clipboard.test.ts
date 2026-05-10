import { describe, expect, test } from "bun:test";
import { useClipboard } from "./use-clipboard";

describe("useClipboard", () => {
  test("exports a function", () => {
    expect(typeof useClipboard).toBe("function");
  });
});
