import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { CopyButton } from "./copy-button";

describe("CopyButton", () => {
  test("renders copy icon", () => {
    const html = renderToString(<CopyButton text="hello" />);
    expect(html).toContain("Copy");
  });

  test("applies custom className", () => {
    const html = renderToString(<CopyButton text="hello" className="custom-class" />);
    expect(html).toContain("custom-class");
  });
});
