import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../textarea";
import { Label } from "../label";

const meta = {
  title: "UI/Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "Type your message here.",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='message'>Textarea Label</Label>
      <Textarea id='message' placeholder='Type your message here.' />
    </div>
  ),
};
