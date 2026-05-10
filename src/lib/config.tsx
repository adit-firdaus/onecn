import * as React from "react";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface OneCNConfig {
  components?: Record<string, Record<string, unknown>>;
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
