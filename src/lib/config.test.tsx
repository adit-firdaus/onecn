import { describe, expect, test } from "bun:test";
import { renderToString } from "react-dom/server";
import {
  ConfigProvider,
  mergeConfigs,
  themeToStyleObject,
  useComponentConfig,
  useConfig,
} from "./config";

function TestConsumer() {
  const config = useConfig();
  return <span data-testid="config">{JSON.stringify(config)}</span>;
}

function TestComponentConsumer({ name }: { name: string }) {
  const config = useComponentConfig(name);
  return <span data-testid="component-config">{JSON.stringify(config)}</span>;
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
      <ConfigProvider config={{ components: { Button: { defaultProps: { size: "lg" } } } }}>
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
          components: { Button: { defaultProps: { variant: "outline" } } },
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

describe("useComponentConfig", () => {
  test("returns empty config for unknown component", () => {
    const html = renderToString(
      <ConfigProvider>
        <TestComponentConsumer name="Unknown" />
      </ConfigProvider>
    );
    expect(html).toContain("{}");
  });

  test("returns typed config for known component", () => {
    const html = renderToString(
      <ConfigProvider config={{ components: { Button: { baseClassName: "extra" } } }}>
        <TestComponentConsumer name="Button" />
      </ConfigProvider>
    );
    expect(html).toContain("baseClassName");
    expect(html).toContain("extra");
  });
});

describe("mergeConfigs", () => {
  test("returns b when a is empty", () => {
    const result = mergeConfigs({}, { theme: { radius: "1rem" } });
    expect(result.theme?.radius).toBe("1rem");
  });

  test("returns a when b is empty", () => {
    const result = mergeConfigs({ theme: { radius: "1rem" } }, {});
    expect(result.theme?.radius).toBe("1rem");
  });

  test("b overrides a for theme", () => {
    const result = mergeConfigs(
      { theme: { radius: "0.5rem", primary: "0 0% 0%" } },
      { theme: { radius: "1rem" } }
    );
    expect(result.theme?.radius).toBe("1rem");
    expect(result.theme?.primary).toBe("0 0% 0%");
  });

  test("merges component configs deeply", () => {
    const result = mergeConfigs(
      { components: { Button: { baseClassName: "a", defaultProps: { size: "sm" } } } },
      { components: { Button: { defaultProps: { variant: "outline" } } } }
    );
    expect(result.components?.Button?.baseClassName).toBe("a");
    expect(result.components?.Button?.defaultProps).toEqual({
      size: "sm",
      variant: "outline",
    });
  });

  test("merges className in defaultProps", () => {
    const result = mergeConfigs(
      { components: { Button: { defaultProps: { className: "btn" } } } },
      { components: { Button: { defaultProps: { className: "large" } } } }
    );
    expect(result.components?.Button?.defaultProps?.className).toBe("btn large");
  });

  test("b component overrides take precedence for baseClassName", () => {
    const result = mergeConfigs(
      { components: { Button: { baseClassName: "a" } } },
      { components: { Button: { baseClassName: "b" } } }
    );
    expect(result.components?.Button?.baseClassName).toBe("b");
  });

  test("merges variantOverrides", () => {
    const result = mergeConfigs(
      { components: { Button: { variantOverrides: { default: "bg-red" } } } },
      { components: { Button: { variantOverrides: { outline: "bg-blue" } } } }
    );
    expect(result.components?.Button?.variantOverrides).toEqual({
      default: "bg-red",
      outline: "bg-blue",
    });
  });
});

describe("themeToStyleObject", () => {
  test("returns empty object for empty theme", () => {
    expect(themeToStyleObject({})).toEqual({});
  });

  test("generates style object for single variable", () => {
    const style = themeToStyleObject({ radius: "0.5rem" });
    expect(style).toEqual({ "--radius": "0.5rem" });
  });

  test("generates style object for multiple variables", () => {
    const style = themeToStyleObject({
      background: "0 0% 100%",
      primary: "240 5.9% 10%",
      radius: "0.75rem",
    });
    expect(style).toEqual({
      "--background": "0 0% 100%",
      "--primary": "240 5.9% 10%",
      "--radius": "0.75rem",
    });
  });

  test("skips undefined values", () => {
    const style = themeToStyleObject({ radius: "0.5rem", primary: undefined });
    expect(style).toHaveProperty("--radius");
    expect(style).not.toHaveProperty("--primary");
  });
});
