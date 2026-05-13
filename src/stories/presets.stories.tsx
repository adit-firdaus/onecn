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
import type * as React from "react";

const meta: Meta = {
  title: "Customization/Presets",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const presetNames = [
  "default",
  "modern",
  "brutalist",
  "minimal",
  "corporate",
  "neon",
  "retro",
  "ios",
  "macos",
] as const;

function PresetCard({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <OneCNProvider config={{ preset: name }}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold capitalize">{name}</h3>
          <Badge variant="secondary">preset</Badge>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">{children}</div>
      </div>
    </OneCNProvider>
  );
}

function ComponentPreview() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
      <div className="space-y-2">
        <Label htmlFor="preview-input">Email</Label>
        <Input id="preview-input" placeholder="hello@example.com" />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">This is card content.</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button size="sm">Save</Button>
        </CardFooter>
      </Card>
      <div className="flex items-center space-x-2">
        <Switch id="preview-switch" defaultChecked />
        <Label htmlFor="preview-switch">Airplane mode</Label>
      </div>
    </div>
  );
}

export const AllPresets: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Preset Showcase</h1>
          <p className="text-muted-foreground">
            Each card is wrapped in its own <code>OneCNProvider</code> with a different preset
            applied. Notice how radius, colors, shadows, and borders change across presets.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {presetNames.map((name) => (
            <PresetCard key={name} name={name}>
              <ComponentPreview />
            </PresetCard>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const PresetComparison: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Preset Comparison</h1>
          <p className="text-muted-foreground">
            Side-by-side comparison of the same components rendered with different presets.
          </p>
        </div>

        <div className="space-y-6">
          {presetNames.map((name) => (
            <OneCNProvider key={name} config={{ preset: name }}>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {name}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button>Button</Button>
                  <Button variant="outline">Outline</Button>
                  <Badge>Badge</Badge>
                  <Input className="w-[200px]" placeholder="Input" />
                  <Card className="w-[240px]">
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm">Mini Card</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </OneCNProvider>
          ))}
        </div>
      </div>
    </div>
  ),
};
