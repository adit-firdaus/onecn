import { describe, expect, test } from "bun:test";
import { themeToStyleObject } from "../config";
import { applyPreset, presetRegistry } from "./registry";

describe("presetRegistry", () => {
  test("contains all expected presets", () => {
    expect(Object.keys(presetRegistry).sort()).toEqual([
      "brutalist",
      "corporate",
      "default",
      "ios",
      "macos",
      "minimal",
      "modern",
      "neon",
      "retro",
    ]);
  });

  test("default preset is empty", () => {
    expect(presetRegistry.default).toEqual({});
  });

  test("modern preset has theme radius", () => {
    expect(presetRegistry.modern.theme?.radius).toBe("0.75rem");
  });

  test("brutalist preset has zero radius", () => {
    expect(presetRegistry.brutalist.theme?.radius).toBe("0rem");
  });

  test("corporate preset has blue primary", () => {
    expect(presetRegistry.corporate.theme?.primary).toContain("221");
  });

  test("neon preset has cyan primary", () => {
    expect(presetRegistry.neon.theme?.primary).toContain("160");
  });

  test("retro preset has warm background", () => {
    expect(presetRegistry.retro.theme?.background).toContain("40");
  });

  test("minimal preset removes card borders", () => {
    expect(presetRegistry.minimal.components?.Card?.baseClassName).toContain("border-0");
  });

  test("ios preset has system blue primary", () => {
    expect(presetRegistry.ios.theme?.primary).toContain("211");
  });

  test("ios preset uses rounded-full buttons", () => {
    expect(presetRegistry.ios.components?.Button?.variantOverrides?.default).toContain(
      "rounded-full"
    );
  });

  test("macos preset has compact sizing", () => {
    expect(presetRegistry.macos.components?.Button?.defaultProps?.size).toBe("sm");
  });

  test("macos preset has subdued borders", () => {
    expect(presetRegistry.macos.components?.Card?.baseClassName).toContain("border");
  });
});

describe("applyPreset", () => {
  test("returns empty config for empty array", () => {
    const result = applyPreset([]);
    expect(result).toEqual({});
  });

  test("applies single preset by name", () => {
    const result = applyPreset("modern");
    expect(result.theme?.radius).toBe("0.75rem");
  });

  test("merges multiple presets left-to-right", () => {
    const result = applyPreset(["modern", "brutalist"]);
    // brutalist overrides modern's radius
    expect(result.theme?.radius).toBe("0rem");
    // modern's component defaults should still be present if not overridden
    expect(result.components?.Card?.baseClassName).toBe(
      presetRegistry.brutalist.components?.Card?.baseClassName
    );
  });

  test("warns on unknown preset and ignores it", () => {
    const consoleWarn = console.warn;
    let warnCalled = false;
    console.warn = () => {
      warnCalled = true;
    };
    const result = applyPreset("nonexistent");
    expect(result).toEqual({});
    expect(warnCalled).toBe(true);
    console.warn = consoleWarn;
  });

  test("all presets generate valid theme style objects", () => {
    for (const [name, preset] of Object.entries(presetRegistry)) {
      if (preset.theme) {
        const style = themeToStyleObject(preset.theme);
        if (name !== "default") {
          expect(Object.keys(style).length).toBeGreaterThan(0);
          expect(style).toHaveProperty("--radius");
        }
      }
    }
  });
});
