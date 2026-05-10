import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { Input } from "../ui/input";
import { FormGroup } from "./form-group";

describe("FormGroup", () => {
  test("renders label and children", () => {
    const html = renderToString(
      <FormGroup label="Email">
        <Input />
      </FormGroup>
    );
    expect(html).toContain("Email");
  });

  test("renders error message", () => {
    const html = renderToString(
      <FormGroup label="Email" error="Invalid">
        <Input />
      </FormGroup>
    );
    expect(html).toContain("Invalid");
  });

  test("renders helper text", () => {
    const html = renderToString(
      <FormGroup label="Email" helper="Tip">
        <Input />
      </FormGroup>
    );
    expect(html).toContain("Tip");
  });

  test("shows required indicator", () => {
    const html = renderToString(
      <FormGroup label="Email" required>
        <Input />
      </FormGroup>
    );
    expect(html).toContain("*");
  });
});
