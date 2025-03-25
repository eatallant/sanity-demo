import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";
import { Label } from "../label";

const meta = {
  title: "UI/Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' />
      <Label htmlFor='terms'>Accept terms and conditions</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms2' disabled />
      <Label
        htmlFor='terms2'
        className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
};
