import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { EmptyState } from "./empty-state";

describe("EmptyState", () => {
  test("renders with default title and description", () => {
    const html = renderToString(<EmptyState />);
    expect(html).toContain("No results found");
    expect(html).toContain("Try adjusting your search");
  });

  test("renders custom title and description", () => {
    const html = renderToString(<EmptyState title="Empty" description="Nothing here" />);
    expect(html).toContain("Empty");
    expect(html).toContain("Nothing here");
  });

  test("renders action button when provided", () => {
    const html = renderToString(<EmptyState action={{ label: "Create", onClick: () => {} }} />);
    expect(html).toContain("Create");
  });

  test("applies custom className", () => {
    const html = renderToString(<EmptyState className="custom-class" />);
    expect(html).toContain("custom-class");
  });
});
