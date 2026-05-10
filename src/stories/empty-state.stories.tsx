import { EmptyState } from "@/components/helpers/empty-state";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EmptyState> = {
  title: "Helpers/EmptyState",
  component: EmptyState,
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};

export const Custom: Story = {
  args: {
    title: "No orders yet",
    description: "When you make your first sale, it will show up here.",
    action: { label: "Create order", onClick: () => {} },
  },
};
