import { ThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";
import { ConfigProvider, type OneCNConfig, mergeConfigs, themeToStyleObject } from "../lib/config";
import { applyPreset } from "../lib/presets/registry";
import { Toaster } from "./ui/toaster";

export type { ThemeProviderProps };
export { useTheme };

export interface OneCNProviderProps {
  /**
   * Props passed to next-themes ThemeProvider.
   * If omitted, a sensible default is used.
   */
  theme?: Omit<ThemeProviderProps, "children">;
  /**
   * Global component configuration.
   * Supports presets via `config.preset`.
   */
  config?: OneCNConfig;
  children: React.ReactNode;
}

export function OneCNProvider({ theme, config, children }: OneCNProviderProps) {
  const resolvedConfig = React.useMemo(() => {
    const presetConfig = config?.preset ? applyPreset(config.preset) : {};
    return mergeConfigs(presetConfig, config ?? {});
  }, [config]);

  const themeStyle = React.useMemo(
    () => (resolvedConfig.theme ? themeToStyleObject(resolvedConfig.theme) : undefined),
    [resolvedConfig.theme]
  );

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      {...theme}
    >
      <ConfigProvider config={resolvedConfig}>
        {themeStyle ? (
          <div style={themeStyle} className="contents">
            {children}
            <Toaster />
          </div>
        ) : (
          <>
            {children}
            <Toaster />
          </>
        )}
      </ConfigProvider>
    </ThemeProvider>
  );
}
