import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../input";
import { Label } from "../label";

const meta = {
  title: "UI/Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "email",
    placeholder: "email",
  },
};

export const Disabled: Story = {
  args: {
    type: "email",
    placeholder: "email",
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='input'>Input Label</Label>
      <Input id='input' />
    </div>
  ),
};
