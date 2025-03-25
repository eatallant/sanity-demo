import type { Meta, StoryObj } from "@storybook/react";
import { ImageCard } from "../image-card";
import img from "../../../public/professional.jpg";
import imgCenter from "../../../public/nurse.jpg";

const meta = {
  title: "Components/ImageCard",
  component: ImageCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: img.src,
    alt: "",
    width: 400,
    height: 400,
    title: "Card Title",
    description: "This is the description",
    noBorder: true,
    cta: {
      text: "Click Here",
      href: "/",
    },
    children: <p>This is the main content section of the card.</p>,
  },
};

export const Centered: Story = {
  args: {
    ...Default.args,
    position: "center",
    src: imgCenter.src,
  },
};
