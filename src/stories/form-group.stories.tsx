import { FormGroup } from "@/components/helpers/form-group";
import { Input } from "@/components/ui/input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormGroup> = {
  title: "Helpers/FormGroup",
  component: FormGroup,
};

export default meta;
type Story = StoryObj<typeof FormGroup>;

export const Default: Story = {
  render: () => (
    <FormGroup label="Email" helper="We'll never share your email.">
      <Input placeholder="you@example.com" />
    </FormGroup>
  ),
};

export const Required: Story = {
  render: () => (
    <FormGroup label="Password" required>
      <Input type="password" placeholder="••••••••" />
    </FormGroup>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormGroup label="Username" error="Username is already taken.">
      <Input placeholder="johndoe" />
    </FormGroup>
  ),
};
