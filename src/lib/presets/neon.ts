import type { OneCNConfig } from "../config";

/**
 * Neon preset — dark base, saturated neon accents, glow effects.
 * Cyberpunk-inspired aesthetic.
 */
export const neonPreset: OneCNConfig = {
  theme: {
    radius: "0.5rem",
    background: "240 10% 3.9%",
    foreground: "0 0% 98%",
    card: "240 10% 6%",
    "card-foreground": "0 0% 98%",
    popover: "240 10% 6%",
    "popover-foreground": "0 0% 98%",
    primary: "160 100% 50%",
    "primary-foreground": "240 10% 3.9%",
    secondary: "240 3.7% 15.9%",
    "secondary-foreground": "0 0% 98%",
    muted: "240 3.7% 15.9%",
    "muted-foreground": "240 5% 64.9%",
    accent: "320 100% 60%",
    "accent-foreground": "0 0% 98%",
    destructive: "0 100% 60%",
    "destructive-foreground": "0 0% 98%",
    border: "240 3.7% 20%",
    input: "240 3.7% 20%",
    ring: "160 100% 50%",
  },
  components: {
    Button: {
      variantOverrides: {
        default: "shadow-[0_0_10px_rgba(0,255,170,0.3)]",
      },
    },
    Card: {
      baseClassName: "border border-[hsl(240,3.7%,20%)] shadow-lg",
    },
    Input: {
      baseClassName: "bg-[hsl(240,10%,6%)] border-[hsl(240,3.7%,25%)]",
    },
    Badge: {
      baseClassName: "border border-[hsl(240,3.7%,25%)]",
    },
  },
};
