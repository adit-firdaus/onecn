import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { PageHeader } from "./page-header";

describe("PageHeader", () => {
  test("renders title", () => {
    const html = renderToString(<PageHeader title="Dashboard" />);
    expect(html).toContain("Dashboard");
  });

  test("renders description", () => {
    const html = renderToString(<PageHeader title="Dashboard" description="Overview" />);
    expect(html).toContain("Overview");
  });

  test("renders actions", () => {
    const html = renderToString(<PageHeader title="Dashboard" actions={<span>Action</span>} />);
    expect(html).toContain("Action");
  });
});
