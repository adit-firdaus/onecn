import type { OneCNConfig } from "../config";
import { brutalistPreset } from "./brutalist";
import { corporatePreset } from "./corporate";
import { defaultPreset } from "./default";
import { iosPreset } from "./ios";
import { macosPreset } from "./macos";
import { minimalPreset } from "./minimal";
import { modernPreset } from "./modern";
import { neonPreset } from "./neon";
import { retroPreset } from "./retro";
import type { PresetName } from "./types";

export const presetRegistry: Record<PresetName, OneCNConfig> = {
  default: defaultPreset,
  modern: modernPreset,
  brutalist: brutalistPreset,
  minimal: minimalPreset,
  corporate: corporatePreset,
  neon: neonPreset,
  retro: retroPreset,
  ios: iosPreset,
  macos: macosPreset,
};

/**
 * Resolve one or more preset names into a single OneCNConfig.
 * When multiple presets are provided, they are deep-merged left-to-right.
 */
export function applyPreset(name: string | string[]): OneCNConfig {
  const names = Array.isArray(name) ? name : [name];
  let result: OneCNConfig = {};
  for (const n of names) {
    const preset = presetRegistry[n as PresetName];
    if (!preset) {
      console.warn(`[onecn] Unknown preset: "${n}". Ignoring.`);
      continue;
    }
    result = mergePresetConfigs(result, preset);
  }
  return result;
}

function mergePresetConfigs(a: OneCNConfig, b: OneCNConfig): OneCNConfig {
  const merged: OneCNConfig = { ...a };

  if (b.theme !== undefined) {
    merged.theme = { ...a.theme, ...b.theme };
  }
  if (b.components !== undefined) {
    merged.components = {};
    const allKeys = new Set([...Object.keys(a.components ?? {}), ...Object.keys(b.components)]);
    for (const key of allKeys) {
      const left = a.components?.[key] ?? {};
      const right = b.components?.[key] ?? {};
      merged.components[key] = {
        baseClassName: right.baseClassName ?? left.baseClassName,
        variantOverrides: { ...left.variantOverrides, ...right.variantOverrides },
        defaultProps: mergePresetDefaultProps(left.defaultProps, right.defaultProps),
      };
    }
  }
  if (b.toast !== undefined) {
    merged.toast = { ...a.toast, ...b.toast };
  }

  return merged;
}

function mergePresetDefaultProps(
  a: Record<string, unknown> | undefined,
  b: Record<string, unknown> | undefined
): Record<string, unknown> | undefined {
  if (!a) return b;
  if (!b) return a;
  const merged = { ...a };
  for (const key of Object.keys(b)) {
    if (
      key === "className" &&
      typeof merged.className === "string" &&
      typeof b.className === "string"
    ) {
      merged.className = `${merged.className} ${b.className}`;
    } else if (key === "style" && typeof merged.style === "object" && typeof b.style === "object") {
      merged.style = { ...merged.style, ...b.style };
    } else {
      merged[key] = b[key];
    }
  }
  return merged;
}
