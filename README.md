# @coolaf/onecn

All [shadcn/ui](https://ui.shadcn.com) components packed into a single, easy-to-install package.

[![CI](https://github.com/adit-firdaus/onecn/actions/workflows/ci.yml/badge.svg)](https://github.com/adit-firdaus/onecn/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/@coolaf%2Fonecn.svg)](https://www.npmjs.com/package/@coolaf/onecn)

## Why?

Instead of installing shadcn components one-by-one via the CLI, `@coolaf/onecn` gives you everything in one shot:

```bash
bun add @coolaf/onecn
```

## Installation

### 1. Install the package

```bash
bun add @coolaf/onecn
```

### 2. Import the styles

Add this to your main CSS file (e.g. `globals.css`):

```css
@import "@coolaf/onecn/styles";
```

Or copy the CSS variables from `node_modules/@coolaf/onecn/dist/index.css` into your own stylesheet.

### 3. Configure Tailwind

Make sure your `tailwind.config.js` includes the package in its content paths:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@coolaf/onecn/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
```

## Usage

### Barrel import (all components)

```tsx
import { Button, Card, Dialog, Input, Label } from "@coolaf/onecn";
```

### Subpath import (tree-shaking friendly)

For better bundler performance and to avoid resolving heavy transitive dependencies when you only need one component:

```tsx
import { Button } from "@coolaf/onecn/button";
import { Dialog } from "@coolaf/onecn/dialog";
import { cn } from "@coolaf/onecn/utils";
import { useToast } from "@coolaf/onecn/use-toast";
```

### Quick example

```tsx
import { Button } from "@coolaf/onecn/button";
import { Card, CardHeader, CardTitle, CardContent } from "@coolaf/onecn/card";

export function ProfileCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Save</Button>
      </CardContent>
    </Card>
  );
}
```

## Customization

`@coolaf/onecn` is designed to be highly customizable at both the global and component level.

### `OneCNProvider`

Wrap your app with `OneCNProvider` to enable global configuration:

```tsx
import { OneCNProvider } from "@coolaf/onecn/onecn-provider";

function App() {
  return (
    <OneCNProvider>
      <YourApp />
    </OneCNProvider>
  );
}
```

### Presets

Apply a built-in design preset to instantly change the look and feel:

```tsx
import { OneCNProvider } from "@coolaf/onecn/onecn-provider";

function App() {
  return (
    <OneCNProvider config={{ preset: "modern" }}>
      <YourApp />
    </OneCNProvider>
  );
}
```

**Available presets:**

| Preset | Description |
|--------|-------------|
| `default` | Standard shadcn/ui baseline |
| `modern` | Larger radius, softer shadows, generous padding |
| `brutalist` | Sharp corners, heavy borders, high contrast |
| `minimal` | No card borders, subtle backgrounds, airy spacing |
| `corporate` | Blue-toned primary, compact sizing, formal |
| `neon` | Dark base, saturated neon accents, glow effects |
| `retro` | Warm beige/paper tones, amber primary |
| `ios` | Apple iOS design language — system blue, rounded-full buttons, large touch targets |
| `macos` | Apple macOS design language — compact, subdued borders, graphite accents |

Combine presets (later ones override earlier ones):

```tsx
<OneCNProvider config={{ preset: ["modern", "corporate"] }}>
```

### Component Defaults

Set default props for any component globally:

```tsx
<OneCNProvider
  config={{
    components: {
      Button: {
        defaultProps: { size: "lg", variant: "outline" },
      },
      Input: {
        defaultProps: { className: "bg-muted" },
      },
    },
  }}
>
```

### Variant Overrides

Override CVA variant classes globally without touching component code:

```tsx
<OneCNProvider
  config={{
    components: {
      Button: {
        variantOverrides: {
          default: "shadow-lg hover:shadow-xl",
          destructive: "ring-2 ring-red-300",
        },
      },
    },
  }}
>
```

### Base ClassName

Prepend classes to every instance of a component:

```tsx
<OneCNProvider
  config={{
    components: {
      Card: {
        baseClassName: "border-2",
      },
    },
  }}
>
```

### Runtime Theme Variables

Override CSS custom properties at runtime without rebuilding Tailwind:

```tsx
<OneCNProvider
  config={{
    theme: {
      primary: "221 83% 53%",
      radius: "0.75rem",
    },
  }}
>
```

All theme variables are optional. Only the ones you specify will be injected.

### Full Config Example

```tsx
<OneCNProvider
  config={{
    preset: "modern",
    theme: {
      primary: "221 83% 53%",
      radius: "0.75rem",
    },
    components: {
      Button: {
        defaultProps: { size: "lg" },
        variantOverrides: {
          default: "shadow-md",
        },
      },
    },
    toast: {
      position: "top-right",
      duration: 4000,
    },
  }}
>
```

## Included Components (55)

| Category | Components |
|----------|-----------|
| **Layout** | AspectRatio, Card, Resizable, ScrollArea, Separator, Sheet, Skeleton |
| **Forms** | Button, Calendar, Checkbox, Command, Form, Input, InputOTP, Label, RadioGroup, Select, Slider, Switch, Textarea, Toggle, ToggleGroup |
| **Overlays** | AlertDialog, Dialog, Drawer, DropdownMenu, ContextMenu, HoverCard, Menubar, NavigationMenu, Popover, Sheet, Tooltip |
| **Data Display** | Avatar, Badge, Breadcrumb, Carousel, Chart, Pagination, Progress, Table |
| **Feedback** | Alert, Sonner, Toast, Toaster |
| **Navigation** | Accordion, Collapsible, Tabs |
| **Helpers** | ConfirmDialog, CopyButton, EmptyState, FormGroup, PageHeader, SkeletonCard, StatusBadge, ThemeToggle |
| **Utilities** | `cn` (from `tailwind-merge` + `clsx`) |

## Requirements

- React >= 18
- TailwindCSS >= 3
- react-dom >= 18

## Development

```bash
# Install dependencies
bun install

# Run tests
bun test

# Run linter
bun run lint

# Build package
bun run build

# Watch mode build
bun run dev

# Sync components with upstream shadcn/ui
bun run scripts/sync-shadcn.ts
bun run scripts/sync-shadcn.ts button
```

## License

MIT
