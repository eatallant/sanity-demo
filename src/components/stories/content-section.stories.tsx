import type { Meta, StoryObj } from "@storybook/react";
import { ContentSection } from "../content-section";

const meta = {
  title: "Components/ContentSection",
  component: ContentSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ContentSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";

export const Default: Story = {
  args: {
    eyebrow: "Eyebrow",
    title: "Content Section Title",
    children: <p>{longText}</p>,
    className: "md:w-1/2",
  },
};

export const Centered: Story = {
  args: {
    ...Default.args,
    position: "center",
  },
};

export const Right: Story = {
  args: {
    ...Default.args,
    children: <p>{longText}</p>,
    position: "right",
  },
};
