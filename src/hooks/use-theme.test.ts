import { describe, expect, test } from "bun:test";
import { useTheme } from "./use-theme";

describe("useTheme re-export", () => {
  test("exports useTheme function", () => {
    expect(typeof useTheme).toBe("function");
  });
});
