import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { ConfigProvider } from "../../lib/config";
import { Button } from "./button";

describe("Button", () => {
  test("renders with default variant and size", () => {
    const html = renderToString(<Button>Click me</Button>);
    expect(html).toContain("Click me");
    expect(html).toContain("inline-flex");
  });

  test("renders as child when asChild is true", () => {
    const html = renderToString(
      <Button asChild>
        <a href="/">Link</a>
      </Button>
    );
    expect(html).toContain("<a");
    expect(html).toContain("Link");
  });

  test("applies destructive variant class", () => {
    const html = renderToString(<Button variant="destructive">Delete</Button>);
    expect(html).toContain("bg-destructive");
  });

  test("applies outline variant class", () => {
    const html = renderToString(<Button variant="outline">Outline</Button>);
    expect(html).toContain("border");
  });

  test("applies ghost variant class", () => {
    const html = renderToString(<Button variant="ghost">Ghost</Button>);
    expect(html).toContain("hover:bg-accent");
  });

  test("applies link variant class", () => {
    const html = renderToString(<Button variant="link">Link</Button>);
    expect(html).toContain("underline-offset-4");
  });

  test("applies small size class", () => {
    const html = renderToString(<Button size="sm">Small</Button>);
    expect(html).toContain("h-8");
  });

  test("applies large size class", () => {
    const html = renderToString(<Button size="lg">Large</Button>);
    expect(html).toContain("h-10");
  });

  test("applies icon size class", () => {
    const html = renderToString(<Button size="icon">+</Button>);
    expect(html).toContain("h-9");
  });

  test("forwards ref and custom className", () => {
    const html = renderToString(<Button className="custom-class">Custom</Button>);
    expect(html).toContain("custom-class");
  });

  test("applies config defaults when inside ConfigProvider", () => {
    const html = renderToString(
      <ConfigProvider config={{ components: { Button: { size: "lg" } } }}>
        <Button>Config</Button>
      </ConfigProvider>
    );
    expect(html).toContain("h-10");
  });

  test("instance props override config defaults", () => {
    const html = renderToString(
      <ConfigProvider config={{ components: { Button: { size: "lg" } } }}>
        <Button size="sm">Override</Button>
      </ConfigProvider>
    );
    expect(html).toContain("h-8");
    expect(html).not.toContain("h-10");
  });

  test("merges className from config and instance", () => {
    const html = renderToString(
      <ConfigProvider config={{ components: { Button: { className: "config-class" } } }}>
        <Button className="instance-class">Merged</Button>
      </ConfigProvider>
    );
    expect(html).toContain("config-class");
    expect(html).toContain("instance-class");
  });
});
