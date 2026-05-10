import { SkeletonCard } from "@/components/helpers/skeleton-card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SkeletonCard> = {
  title: "Helpers/SkeletonCard",
  component: SkeletonCard,
};

export default meta;
type Story = StoryObj<typeof SkeletonCard>;

export const Default: Story = {};

export const NoHeader: Story = {
  args: {
    header: false,
  },
};

export const NoFooter: Story = {
  args: {
    footer: false,
  },
};
