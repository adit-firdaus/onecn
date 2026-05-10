import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { ThemeToggle } from "./theme-toggle";

describe("ThemeToggle", () => {
  test("renders toggle button", () => {
    const html = renderToString(<ThemeToggle />);
    expect(html).toContain("Toggle theme");
  });

  test("applies custom className", () => {
    const html = renderToString(<ThemeToggle className="custom-class" />);
    expect(html).toContain("custom-class");
  });
});
