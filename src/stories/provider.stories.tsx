import { OneCNProvider } from "@/components/onecn-provider";
import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OneCNProvider> = {
  title: "Setup/OneCNProvider",
  component: OneCNProvider,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof OneCNProvider>;

export const Default: Story = {
  render: () => (
    <OneCNProvider>
      <div className="space-y-4 text-center">
        <p>OneCNProvider wraps your app with:</p>
        <ul className="text-sm text-muted-foreground list-disc text-left inline-block">
          <li>next-themes ThemeProvider</li>
          <li>Toast container</li>
          <li>ConfigProvider (optional)</li>
        </ul>
        <Button>Try the toast</Button>
      </div>
    </OneCNProvider>
  ),
};

export const WithConfig: Story = {
  render: () => (
    <OneCNProvider
      config={{
        components: {
          Button: { size: "lg", variant: "outline" },
        },
      }}
    >
      <div className="space-y-4 text-center">
        <p>This button inherits config defaults (lg + outline):</p>
        <Button>Config Default Button</Button>
      </div>
    </OneCNProvider>
  ),
};
