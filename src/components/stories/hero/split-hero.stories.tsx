import type { Meta, StoryObj } from "@storybook/react";
import { SplitHero } from "../../hero";
import img from "../../../../public/deepmind.jpg";

const meta = {
  title: "Components/Hero/Split Hero",
  component: SplitHero,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SplitHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Split Hero",
    description: "Description goes here.",
    image: img,
    className: "bg-gray-200",
    cta: {
      href: "/",
      text: "Call To Action",
    },
  },
};

export const ImageLeft: Story = {
  args: {
    title: "Split Hero",
    description: "Description goes here.",
    image: img,
    imagePosition: "left",
    className: "bg-gray-200",
  },
};
