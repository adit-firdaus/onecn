import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { ConfirmDialog } from "./confirm-dialog";

describe("ConfirmDialog", () => {
  test("renders trigger button with default label", () => {
    const html = renderToString(<ConfirmDialog />);
    expect(html).toContain("Open");
  });

  test("renders custom trigger", () => {
    const html = renderToString(<ConfirmDialog trigger={<span>Delete</span>} />);
    expect(html).toContain("Delete");
    expect(html).not.toContain("Open");
  });
});
