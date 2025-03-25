import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Destructive: Story = {
  args: {
    variant: "secondary",
  },
};

export const Small: Story = {
  args: {
    variant: "default",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    variant: "default",
    size: "lg",
  },
};
