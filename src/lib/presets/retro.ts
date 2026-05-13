import type { OneCNConfig } from "../config";

/**
 * Retro preset — warm beige/paper tones, amber primary, muted palette.
 * Nostalgic, print-inspired aesthetic.
 */
export const retroPreset: OneCNConfig = {
  theme: {
    radius: "0.375rem",
    background: "40 30% 96%",
    foreground: "30 20% 15%",
    card: "40 25% 94%",
    "card-foreground": "30 20% 15%",
    popover: "40 30% 96%",
    "popover-foreground": "30 20% 15%",
    primary: "35 80% 45%",
    "primary-foreground": "0 0% 100%",
    secondary: "40 20% 88%",
    "secondary-foreground": "30 20% 15%",
    muted: "40 20% 88%",
    "muted-foreground": "30 10% 45%",
    accent: "40 20% 88%",
    "accent-foreground": "30 20% 15%",
    destructive: "0 70% 50%",
    "destructive-foreground": "0 0% 100%",
    border: "40 15% 82%",
    input: "40 15% 82%",
    ring: "35 80% 45%",
  },
  components: {
    Button: {
      baseClassName: "font-medium",
    },
    Card: {
      baseClassName: "shadow-sm border-[hsl(40,15%,78%)]",
    },
    Input: {
      baseClassName: "bg-[hsl(40,25%,98%)]",
    },
  },
};
