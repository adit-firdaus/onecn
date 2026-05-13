import type { OneCNConfig } from "../config";

export type PresetName =
  | "default"
  | "modern"
  | "brutalist"
  | "minimal"
  | "corporate"
  | "neon"
  | "retro"
  | "ios"
  | "macos";

export type PresetRegistry = Record<PresetName, OneCNConfig>;
