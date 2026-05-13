import type { OneCNConfig } from "../config";

/**
 * iOS preset — Apple's mobile design language.
 * Highly rounded corners, system blue primary, large touch targets,
 * clean white surfaces with subtle depth.
 */
export const iosPreset: OneCNConfig = {
  theme: {
    radius: "0.75rem",
    background: "0 0% 100%",
    foreground: "240 6% 10%",
    card: "0 0% 100%",
    "card-foreground": "240 6% 10%",
    popover: "0 0% 100%",
    "popover-foreground": "240 6% 10%",
    primary: "211 100% 50%",
    "primary-foreground": "0 0% 100%",
    secondary: "240 5% 96%",
    "secondary-foreground": "240 6% 10%",
    muted: "240 5% 96%",
    "muted-foreground": "240 4% 46%",
    accent: "240 5% 96%",
    "accent-foreground": "240 6% 10%",
    destructive: "0 84% 60%",
    "destructive-foreground": "0 0% 100%",
    border: "240 6% 90%",
    input: "240 6% 90%",
    ring: "211 100% 50%",
  },
  components: {
    Button: {
      defaultProps: { size: "lg" },
      variantOverrides: {
        default: "rounded-full font-semibold shadow-sm",
        secondary: "rounded-full font-medium",
        outline: "rounded-full font-medium",
        destructive: "rounded-full font-semibold",
        ghost: "rounded-full font-medium",
      },
    },
    Card: {
      baseClassName: "rounded-2xl shadow-sm border-0",
    },
    Input: {
      baseClassName: "rounded-xl h-12 text-base bg-secondary/50 border-0",
    },
    Badge: {
      baseClassName: "rounded-full font-medium px-3 py-1",
    },
    Switch: {
      baseClassName: "data-[state=checked]:bg-primary",
    },
    Avatar: {
      baseClassName: "rounded-full",
    },
  },
};
