import { Toast, ToastAction } from "@/components/ui/toast";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => (
    <Toast>
      <div className="grid gap-1">
        <div className="text-sm font-semibold">Scheduled: Catch up</div>
        <div className="text-sm opacity-90">Friday, February 10, 2023 at 5:57 PM</div>
      </div>
      <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
    </Toast>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Toast variant="destructive">
      <div className="grid gap-1">
        <div className="text-sm font-semibold">Error</div>
        <div className="text-sm opacity-90">There was a problem with your request.</div>
      </div>
      <ToastAction altText="Try again">Try again</ToastAction>
    </Toast>
  ),
};
