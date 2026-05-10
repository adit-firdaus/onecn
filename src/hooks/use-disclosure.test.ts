import { describe, expect, test } from "bun:test";
import { useDisclosure } from "./use-disclosure";

describe("useDisclosure", () => {
  test("exports a function", () => {
    expect(typeof useDisclosure).toBe("function");
  });
});
