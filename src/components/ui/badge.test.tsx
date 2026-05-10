import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { ConfigProvider } from "../../lib/config";
import { Badge } from "./badge";

describe("Badge", () => {
  test("renders with default variant", () => {
    const html = renderToString(<Badge>Default</Badge>);
    expect(html).toContain("Default");
    expect(html).toContain("bg-primary");
  });

  test("applies destructive variant", () => {
    const html = renderToString(<Badge variant="destructive">Error</Badge>);
    expect(html).toContain("bg-destructive");
  });

  test("applies custom className", () => {
    const html = renderToString(<Badge className="custom-badge">Label</Badge>);
    expect(html).toContain("custom-badge");
  });

  test("applies config defaults when inside ConfigProvider", () => {
    const html = renderToString(
      <ConfigProvider config={{ components: { Badge: { variant: "outline" } } }}>
        <Badge>Config</Badge>
      </ConfigProvider>
    );
    expect(html).toContain("text-foreground");
  });
});
