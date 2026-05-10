import { describe, expect, test } from "bun:test";
import { renderToString } from "react-dom/server";
import { ConfigProvider, useConfig } from "./config";

function TestConsumer() {
  const config = useConfig();
  return <span data-testid="config">{JSON.stringify(config)}</span>;
}

describe("ConfigProvider", () => {
  test("provides empty config by default", () => {
    const html = renderToString(
      <ConfigProvider>
        <TestConsumer />
      </ConfigProvider>
    );
    expect(html).toContain("{}");
  });

  test("provides config values to consumers", () => {
    const html = renderToString(
      <ConfigProvider config={{ components: { Button: { size: "lg" } } }}>
        <TestConsumer />
      </ConfigProvider>
    );
    expect(html).toContain("size");
    expect(html).toContain("lg");
  });

  test("merges nested config correctly", () => {
    const html = renderToString(
      <ConfigProvider
        config={{
          components: { Button: { variant: "outline" } },
          toast: { position: "top-right", duration: 3000 },
        }}
      >
        <TestConsumer />
      </ConfigProvider>
    );
    expect(html).toContain("variant");
    expect(html).toContain("outline");
    expect(html).toContain("position");
    expect(html).toContain("top-right");
    expect(html).toContain("duration");
    expect(html).toContain("3000");
  });
});

describe("useConfig", () => {
  test("returns empty object when used outside provider", () => {
    const html = renderToString(<TestConsumer />);
    expect(html).toContain("{}");
  });
});
