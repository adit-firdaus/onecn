import { Label } from "@/components/ui/label";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Email address",
  },
};
