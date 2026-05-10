import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AspectRatio> = {
  title: "UI/AspectRatio",
  component: AspectRatio,
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="bg-muted max-w-md">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="by Drew Beamer"
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
  ),
};

export const Square: Story = {
  render: () => (
    <AspectRatio ratio={1 / 1} className="bg-muted max-w-md">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="by Drew Beamer"
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
  ),
};
