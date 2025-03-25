import type { Meta, StoryObj } from "@storybook/react";
import { ToastButton } from "../toastButton";
import { ToastAction } from "@radix-ui/react-toast";
import { Toaster } from "../toaster";

const meta = {
  title: "UI/Toast",
  component: ToastButton,
  args: {
    buttonText: "Toast",
    variant: "default",
  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof ToastButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "Your message has been sent.",
  },
};

export const WithTitle: Story = {
  args: {
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
  },
};

export const WithAction: Story = {
  args: {
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
    action: <ToastAction altText='Try again'>Try again</ToastAction>,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
  },
};
