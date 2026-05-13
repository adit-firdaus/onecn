import type { OneCNConfig } from "../config";

/**
 * Corporate preset — blue-toned primary, compact sizing, formal radius.
 * Professional, trustworthy aesthetic.
 */
export const corporatePreset: OneCNConfig = {
  theme: {
    radius: "0.25rem",
    background: "0 0% 100%",
    foreground: "222 47% 11%",
    card: "0 0% 100%",
    "card-foreground": "222 47% 11%",
    popover: "0 0% 100%",
    "popover-foreground": "222 47% 11%",
    primary: "221 83% 53%",
    "primary-foreground": "0 0% 100%",
    secondary: "210 40% 96%",
    "secondary-foreground": "222 47% 11%",
    muted: "210 40% 96%",
    "muted-foreground": "215 16% 47%",
    accent: "210 40% 96%",
    "accent-foreground": "222 47% 11%",
    destructive: "0 84% 60%",
    "destructive-foreground": "0 0% 100%",
    border: "214 32% 91%",
    input: "214 32% 91%",
    ring: "221 83% 53%",
  },
  components: {
    Button: {
      defaultProps: { size: "sm" },
      baseClassName: "font-medium",
    },
    Card: {
      baseClassName: "shadow-sm",
    },
    Input: {
      baseClassName: "text-sm",
    },
    Badge: {
      baseClassName: "font-medium",
    },
  },
};
