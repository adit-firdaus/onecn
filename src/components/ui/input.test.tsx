import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { ConfigProvider } from "../../lib/config";
import { Input } from "./input";

describe("Input", () => {
  test("renders with default classes", () => {
    const html = renderToString(<Input placeholder="Enter text" />);
    expect(html).toContain('placeholder="Enter text"');
    expect(html).toContain("flex");
    expect(html).toContain("h-9");
    expect(html).toContain("rounded-md");
  });

  test("applies custom className", () => {
    const html = renderToString(<Input className="custom-input" />);
    expect(html).toContain("custom-input");
  });

  test("forwards type attribute", () => {
    const html = renderToString(<Input type="password" />);
    expect(html).toContain('type="password"');
  });

  test("forwards disabled attribute", () => {
    const html = renderToString(<Input disabled />);
    expect(html).toContain("disabled");
  });

  test("applies config defaults when inside ConfigProvider", () => {
    const html = renderToString(
      <ConfigProvider config={{ components: { Input: { className: "config-class" } } }}>
        <Input />
      </ConfigProvider>
    );
    expect(html).toContain("config-class");
  });
});
