# @adit_firdaus/onecn

All [shadcn/ui](https://ui.shadcn.com) components packed into a single, easy-to-install package.

## Why?

Instead of installing shadcn components one-by-one via the CLI, `@adit_firdaus/onecn` gives you everything in one shot:

```bash
bun add @adit_firdaus/onecn
```

## Installation

### 1. Install the package

```bash
bun add @adit_firdaus/onecn
```

### 2. Import the styles

Add this to your main CSS file (e.g. `globals.css`):

```css
@import "@adit_firdaus/onecn/styles";
```

Or copy the CSS variables from `node_modules/@adit_firdaus/onecn/dist/index.css` into your own stylesheet.

### 3. Configure Tailwind

Make sure your `tailwind.config.js` includes the package in its content paths:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@adit_firdaus/onecn/dist/**/*.{js,ts,jsx,tsx}",
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

Import any component directly from `@adit_firdaus/onecn`:

```tsx
import { Button, Card, Dialog, Input, Label } from "@adit_firdaus/onecn";
```

## Included Components

- **Layout**: AspectRatio, Card, Resizable, ScrollArea, Separator, Sheet, Skeleton
- **Forms**: Button, Calendar, Checkbox, Command, Form, Input, InputOTP, Label, RadioGroup, Select, Slider, Switch, Textarea, Toggle, ToggleGroup
- **Overlays**: AlertDialog, Dialog, Drawer, DropdownMenu, ContextMenu, HoverCard, Menubar, NavigationMenu, Popover, Sheet, Tooltip
- **Data Display**: Avatar, Badge, Breadcrumb, Carousel, Chart, Pagination, Progress, Table
- **Feedback**: Alert, Sonner, Toast, Toaster
- **Navigation**: Accordion, Collapsible, Tabs
- **Utilities**: cn (from `tailwind-merge` + `clsx`)

## Requirements

- React >= 18
- TailwindCSS >= 3
- react-dom >= 18

## Development

```bash
cd projects/node/onecn
bun install
bun run build
```

## License

MIT
