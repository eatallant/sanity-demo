import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "../../hero";
import bg from "../../../../public/console-table.jpg";

const meta = {
  title: "Components/Hero/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Hero",
    description: "Description goes here.",
    image: bg,
    cta: {
      href: "/",
      text: "Call To Action",
    },
  },
};