import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { OneCNProvider } from "./onecn-provider";

describe("OneCNProvider", () => {
  test("renders children", () => {
    const html = renderToString(
      <OneCNProvider>
        <div data-testid="child">Hello</div>
      </OneCNProvider>
    );
    expect(html).toContain("Hello");
  });

  test("mounts toast container", () => {
    const html = renderToString(
      <OneCNProvider>
        <div>App</div>
      </OneCNProvider>
    );
    expect(html).toContain('role="region"');
    expect(html).toContain("Notifications");
  });

  test("passes config to ConfigProvider", () => {
    const html = renderToString(
      <OneCNProvider config={{ components: { Button: { size: "lg" } } }}>
        <div>App</div>
      </OneCNProvider>
    );
    expect(html).toContain("App");
  });
});
