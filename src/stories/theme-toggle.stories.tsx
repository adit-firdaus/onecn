import { ThemeToggle } from "@/components/helpers/theme-toggle";
import { OneCNProvider } from "@/components/onecn-provider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ThemeToggle> = {
  title: "Helpers/ThemeToggle",
  component: ThemeToggle,
  decorators: [
    (Story) => (
      <OneCNProvider>
        <Story />
      </OneCNProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};
