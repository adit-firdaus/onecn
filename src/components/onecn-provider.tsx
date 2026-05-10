import { ThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import type * as React from "react";
import { ConfigProvider, type OneCNConfig } from "../lib/config";
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
   */
  config?: OneCNConfig;
  children: React.ReactNode;
}

export function OneCNProvider({ theme, config, children }: OneCNProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      {...theme}
    >
      <ConfigProvider config={config}>
        {children}
        <Toaster />
      </ConfigProvider>
    </ThemeProvider>
  );
}
