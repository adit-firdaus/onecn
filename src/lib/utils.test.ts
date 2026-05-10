import { describe, expect, test } from "bun:test";
import { cn } from "../lib/utils";

describe("cn()", () => {
  test("merges tailwind classes correctly", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  test("handles conditional classes", () => {
    const isActive = true;
    expect(cn("base", isActive && "active")).toBe("base active");
  });

  test("filters out falsy values", () => {
    expect(cn("a", null, undefined, false, "b")).toBe("a b");
  });

  test("handles arrays of classes", () => {
    expect(cn(["a", "b"], "c")).toBe("a b c");
  });

  test("handles empty input", () => {
    expect(cn()).toBe("");
  });

  test("merges conflicting tailwind utilities", () => {
    expect(cn("text-sm", "text-lg")).toBe("text-lg");
  });
});
