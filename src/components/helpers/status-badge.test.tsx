import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { StatusBadge } from "./status-badge";

describe("StatusBadge", () => {
  test("renders children", () => {
    const html = renderToString(<StatusBadge>Active</StatusBadge>);
    expect(html).toContain("Active");
  });

  test("applies success status classes", () => {
    const html = renderToString(<StatusBadge status="success">Done</StatusBadge>);
    expect(html).toContain("green");
  });

  test("applies error status classes", () => {
    const html = renderToString(<StatusBadge status="error">Failed</StatusBadge>);
    expect(html).toContain("destructive");
  });
});
