import * as React from "react";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface ThemeVariables {
  background: string;
  foreground: string;
  card: string;
  "card-foreground": string;
  popover: string;
  "popover-foreground": string;
  primary: string;
  "primary-foreground": string;
  secondary: string;
  "secondary-foreground": string;
  muted: string;
  "muted-foreground": string;
  accent: string;
  "accent-foreground": string;
  destructive: string;
  "destructive-foreground": string;
  border: string;
  input: string;
  ring: string;
  radius: string;
}

export interface ComponentConfig<T = Record<string, unknown>> {
  /** Default props applied to every instance */
  defaultProps?: Partial<T>;
  /** Override CVA variant class names globally. Key is variant name, value is extra classes to append. */
  variantOverrides?: Record<string, string>;
  /** Additional classes prepended to the component base */
  baseClassName?: string;
}

export interface OneCNConfig {
  /** Preset name or array of presets to apply (left-to-right, later wins) */
  preset?: string | string[];
  /** Global CSS variable overrides (injected at runtime) */
  theme?: Partial<ThemeVariables>;
  /** Per-component typed configuration */
  components?: Record<string, ComponentConfig>;
  /** Toast global defaults */
  toast?: {
    position?: ToastPosition;
    duration?: number;
  };
}

const ConfigContext = React.createContext<OneCNConfig>({});

export interface ConfigProviderProps {
  config?: OneCNConfig;
  children: React.ReactNode;
}

export function ConfigProvider({ config, children }: ConfigProviderProps) {
  const value = React.useMemo(() => config ?? {}, [config]);
  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
}

export function useConfig(): OneCNConfig {
  return React.useContext(ConfigContext);
}

export function useComponentConfig<T = Record<string, unknown>>(
  componentName: string
): ComponentConfig<T> {
  const config = useConfig();
  const raw = config.components?.[componentName] ?? {};

  // Backward compatibility: if the config has direct prop keys (not wrapped in
  // defaultProps / variantOverrides / baseClassName), treat the whole object as defaultProps.
  const knownKeys = new Set(["defaultProps", "variantOverrides", "baseClassName"]);
  const rawKeys = Object.keys(raw);
  const isOldFormat = rawKeys.length > 0 && !rawKeys.some((k) => knownKeys.has(k));

  if (isOldFormat) {
    return {
      defaultProps: raw as Partial<T>,
    };
  }

  return raw as ComponentConfig<T>;
}

/**
 * Deep merge two OneCNConfig objects. Right-hand side wins on conflicts.
 * Arrays are not deeply merged — rhs replaces lhs arrays.
 */
export function mergeConfigs(a: OneCNConfig, b: OneCNConfig): OneCNConfig {
  const merged: OneCNConfig = { ...a };

  if (b.preset !== undefined) {
    merged.preset = b.preset;
  }
  if (b.theme !== undefined) {
    merged.theme = { ...a.theme, ...b.theme };
  }
  if (b.toast !== undefined) {
    merged.toast = { ...a.toast, ...b.toast };
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
        defaultProps: mergeDefaultProps(left.defaultProps, right.defaultProps),
      };
    }
  }

  return merged;
}

function mergeDefaultProps(
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

/**
 * Convert theme variables into a React style object for scoped CSS custom properties.
 * When applied to a wrapper element, children will inherit these variables.
 */
export function themeToStyleObject(theme: Partial<ThemeVariables>): React.CSSProperties {
  const style: Record<string, string> = {};
  for (const [key, value] of Object.entries(theme)) {
    if (value !== undefined) {
      style[`--${key}`] = value;
    }
  }
  return style as React.CSSProperties;
}
