import { OneCNProvider } from "@/components/onecn-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const meta: Meta<typeof OneCNProvider> = {
  title: "Setup/OneCNProvider",
  component: OneCNProvider,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof OneCNProvider>;

function DemoContent() {
  return (
    <div className="w-[360px] space-y-6">
      <div className="space-y-2 text-center">
        <h3 className="text-lg font-semibold">Component Preview</h3>
        <p className="text-sm text-muted-foreground">See how config affects these components</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Danger</Button>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <Badge>Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>

      <div className="space-y-2">
        <Label htmlFor="demo-email">Email</Label>
        <Input id="demo-email" placeholder="you@example.com" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Card Example</CardTitle>
          <CardDescription>This card respects your preset and config.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch id="demo-switch" />
            <Label htmlFor="demo-switch">Enable notifications</Label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button size="sm">Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <OneCNProvider>
      <DemoContent />
    </OneCNProvider>
  ),
};

export const WithConfig: Story = {
  render: () => (
    <OneCNProvider
      config={{
        components: {
          Button: { defaultProps: { size: "lg", variant: "outline" } },
        },
      }}
    >
      <div className="w-[360px] space-y-4 text-center">
        <p className="text-sm text-muted-foreground">
          The button below inherits config defaults (lg + outline). Other buttons override it.
        </p>
        <Button>Config Default Button</Button>
        <div className="flex justify-center gap-2">
          <Button variant="default">Overrides config</Button>
          <Button size="sm">Smaller size</Button>
        </div>
      </div>
    </OneCNProvider>
  ),
};

export const PresetModern: Story = {
  render: () => (
    <OneCNProvider config={{ preset: "modern" }}>
      <DemoContent />
    </OneCNProvider>
  ),
};

export const PresetBrutalist: Story = {
  render: () => (
    <OneCNProvider config={{ preset: "brutalist" }}>
      <DemoContent />
    </OneCNProvider>
  ),
};

export const PresetMinimal: Story = {
  render: () => (
    <OneCNProvider config={{ preset: "minimal" }}>
      <DemoContent />
    </OneCNProvider>
  ),
};

export const PresetCorporate: Story = {
  render: () => (
    <OneCNProvider config={{ preset: "corporate" }}>
      <DemoContent />
    </OneCNProvider>
  ),
};

export const PresetNeon: Story = {
  render: () => (
    <OneCNProvider config={{ preset: "neon" }}>
      <DemoContent />
    </OneCNProvider>
  ),
};

export const PresetRetro: Story = {
  render: () => (
    <OneCNProvider config={{ preset: "retro" }}>
      <DemoContent />
    </OneCNProvider>
  ),
};

export const PresetIOS: Story = {
  render: () => (
    <OneCNProvider config={{ preset: "ios" }}>
      <DemoContent />
    </OneCNProvider>
  ),
};

export const PresetMacOS: Story = {
  render: () => (
    <OneCNProvider config={{ preset: "macos" }}>
      <DemoContent />
    </OneCNProvider>
  ),
};

export const VariantOverrides: Story = {
  render: () => (
    <OneCNProvider
      config={{
        components: {
          Button: {
            variantOverrides: {
              default: "shadow-lg hover:shadow-xl",
              outline: "border-dashed border-2",
            },
          },
          Badge: {
            variantOverrides: {
              default: "rounded-full",
            },
          },
        },
      }}
    >
      <div className="w-[360px] space-y-4 text-center">
        <p className="text-sm text-muted-foreground">
          Buttons and badges have global variant overrides applied.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Button>Default (shadow)</Button>
          <Button variant="outline">Outline (dashed)</Button>
          <Button variant="secondary">Secondary (unchanged)</Button>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge>Default (pill)</Badge>
          <Badge variant="secondary">Secondary</Badge>
        </div>
      </div>
    </OneCNProvider>
  ),
};

export const BaseClassName: Story = {
  render: () => (
    <OneCNProvider
      config={{
        components: {
          Card: { baseClassName: "border-2 border-dashed" },
          Input: { baseClassName: "bg-muted/50" },
        },
      }}
    >
      <div className="w-[360px] space-y-4 text-center">
        <p className="text-sm text-muted-foreground">
          Cards and inputs have a global baseClassName prepended.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Dashed Card</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Input with muted bg" />
          </CardContent>
        </Card>
      </div>
    </OneCNProvider>
  ),
};

export const RuntimeTheme: Story = {
  render: () => (
    <OneCNProvider
      config={{
        theme: {
          primary: "221 83% 53%",
          radius: "0.75rem",
        },
      }}
    >
      <div className="w-[360px] space-y-4 text-center">
        <p className="text-sm text-muted-foreground">
          Runtime CSS variables override the theme without rebuilding Tailwind.
        </p>
        <Button>Blue Primary</Button>
        <Input placeholder="Rounded input" />
        <Card>
          <CardHeader>
            <CardTitle>Themed Card</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </OneCNProvider>
  ),
};

export const CombinedConfig: Story = {
  render: () => (
    <OneCNProvider
      config={{
        preset: "modern",
        theme: {
          primary: "221 83% 53%",
        },
        components: {
          Button: {
            defaultProps: { size: "lg" },
            variantOverrides: {
              default: "shadow-lg",
            },
          },
        },
      }}
    >
      <div className="w-[360px] space-y-4 text-center">
        <p className="text-sm text-muted-foreground">
          Modern preset + blue primary + large buttons with shadow.
        </p>
        <DemoContent />
      </div>
    </OneCNProvider>
  ),
};
