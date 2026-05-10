import { CopyButton } from "@/components/helpers/copy-button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CopyButton> = {
  title: "Helpers/CopyButton",
  component: CopyButton,
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  args: {
    text: "Hello from onecn!",
  },
};
