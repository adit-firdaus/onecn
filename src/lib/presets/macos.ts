import type { OneCNConfig } from "../config";

/**
 * macOS preset — Apple's desktop design language.
 * Subdued professionalism, medium radius, graphite accents,
 * subtle borders over heavy shadows, compact sizing.
 */
export const macosPreset: OneCNConfig = {
  theme: {
    radius: "0.375rem",
    background: "0 0% 100%",
    foreground: "0 0% 15%",
    card: "0 0% 100%",
    "card-foreground": "0 0% 15%",
    popover: "0 0% 100%",
    "popover-foreground": "0 0% 15%",
    primary: "211 100% 50%",
    "primary-foreground": "0 0% 100%",
    secondary: "220 9% 94%",
    "secondary-foreground": "0 0% 15%",
    muted: "220 9% 94%",
    "muted-foreground": "0 0% 45%",
    accent: "220 9% 94%",
    "accent-foreground": "0 0% 15%",
    destructive: "0 84% 60%",
    "destructive-foreground": "0 0% 100%",
    border: "220 9% 88%",
    input: "220 9% 88%",
    ring: "211 100% 50%",
  },
  components: {
    Button: {
      defaultProps: { size: "sm" },
      variantOverrides: {
        default: "shadow-sm font-medium",
        secondary: "bg-secondary/80 font-medium",
        outline: "font-medium",
        ghost: "font-medium",
      },
    },
    Card: {
      baseClassName: "shadow-sm border border-border/60",
    },
    Input: {
      baseClassName: "bg-background shadow-inner border-border/80 h-8 text-sm",
    },
    Badge: {
      baseClassName: "font-medium tracking-tight",
    },
    Switch: {
      baseClassName: "data-[state=checked]:bg-primary",
    },
    Select: {
      baseClassName: "h-8 text-sm",
    },
    Tabs: {
      baseClassName: "bg-muted/50 rounded-md p-1",
    },
  },
};
