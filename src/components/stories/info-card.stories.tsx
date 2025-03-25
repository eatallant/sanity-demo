import type { Meta, StoryObj } from "@storybook/react";
import { InfoCard } from "../info-card";
import { Icons } from "../icons";
import img from "../../../public/watch.jpg";

const meta = {
  title: "Components/InfoCard",
  component: InfoCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Icons.rocket height={48} width={48} />,
    title: "Card Title",
    description: "This is the description",
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
  },
};
