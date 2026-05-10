import { Progress } from "@/components/ui/progress";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 33,
    className: "w-[60%]",
  },
};

export const Half: Story = {
  args: {
    value: 50,
    className: "w-[60%]",
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    className: "w-[60%]",
  },
};
