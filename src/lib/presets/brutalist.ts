import type { OneCNConfig } from "../config";

/**
 * Brutalist preset — sharp corners, heavy borders, high contrast.
 * Zero radius, bold typography, no subtlety.
 */
export const brutalistPreset: OneCNConfig = {
  theme: {
    radius: "0rem",
    background: "0 0% 100%",
    foreground: "0 0% 0%",
    card: "0 0% 100%",
    "card-foreground": "0 0% 0%",
    popover: "0 0% 100%",
    "popover-foreground": "0 0% 0%",
    primary: "0 0% 0%",
    "primary-foreground": "0 0% 100%",
    secondary: "0 0% 90%",
    "secondary-foreground": "0 0% 0%",
    muted: "0 0% 90%",
    "muted-foreground": "0 0% 40%",
    accent: "0 0% 90%",
    "accent-foreground": "0 0% 0%",
    destructive: "0 100% 50%",
    "destructive-foreground": "0 0% 100%",
    border: "0 0% 0%",
    input: "0 0% 0%",
    ring: "0 0% 0%",
  },
  components: {
    Button: {
      variantOverrides: {
        default: "border-2 border-black",
        destructive: "border-2 border-red-600",
        outline: "border-2 border-black",
        secondary: "border-2 border-black",
      },
      baseClassName: "font-bold uppercase tracking-wide",
    },
    Card: {
      baseClassName: "border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    },
    Input: {
      baseClassName: "border-2 border-black",
    },
    Badge: {
      baseClassName: "border-2 border-black font-bold uppercase",
    },
  },
};
