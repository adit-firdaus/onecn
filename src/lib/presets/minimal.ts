import type { OneCNConfig } from "../config";

/**
 * Minimal preset — no card borders, subtle backgrounds, airy spacing.
 * Clean, whitespace-driven design.
 */
export const minimalPreset: OneCNConfig = {
  theme: {
    radius: "0.5rem",
    background: "0 0% 100%",
    foreground: "240 10% 3.9%",
    card: "0 0% 98%",
    "card-foreground": "240 10% 3.9%",
    popover: "0 0% 100%",
    "popover-foreground": "240 10% 3.9%",
    primary: "240 5.9% 10%",
    "primary-foreground": "0 0% 98%",
    secondary: "0 0% 96%",
    "secondary-foreground": "240 5.9% 10%",
    muted: "0 0% 96%",
    "muted-foreground": "240 3.8% 56%",
    accent: "0 0% 96%",
    "accent-foreground": "240 5.9% 10%",
    destructive: "0 84.2% 60.2%",
    "destructive-foreground": "0 0% 98%",
    border: "0 0% 92%",
    input: "0 0% 92%",
    ring: "240 5.9% 10%",
  },
  components: {
    Card: {
      baseClassName: "border-0 shadow-none bg-transparent",
    },
    Button: {
      variantOverrides: {
        default: "shadow-none",
        secondary: "shadow-none",
        destructive: "shadow-none",
      },
    },
    Input: {
      baseClassName: "border-0 border-b rounded-none bg-transparent px-0",
    },
    Separator: {
      baseClassName: "bg-border/50",
    },
  },
};
