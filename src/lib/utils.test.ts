import { describe, expect, test } from "bun:test";
import { cn, mergeProps } from "./utils";

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

describe("mergeProps", () => {
  test("overrides defaults with props", () => {
    const result = mergeProps({ size: "sm" }, { size: "lg" });
    expect(result.size).toBe("lg");
  });

  test("keeps defaults for missing props", () => {
    const result = mergeProps({ size: "sm", variant: "outline" }, { size: "lg" });
    expect(result.size).toBe("lg");
    expect(result.variant).toBe("outline");
  });

  test("merges className with cn", () => {
    const result = mergeProps({ className: "px-2" }, { className: "py-4" });
    expect(result.className).toBe("px-2 py-4");
  });

  test("merges style objects", () => {
    const result = mergeProps({ style: { color: "red" } }, { style: { background: "blue" } });
    expect(result.style).toEqual({ color: "red", background: "blue" });
  });

  test("instance style overrides default style keys", () => {
    const result = mergeProps(
      { style: { color: "red", background: "green" } },
      { style: { color: "blue" } }
    );
    expect(result.style).toEqual({ color: "blue", background: "green" });
  });
});
