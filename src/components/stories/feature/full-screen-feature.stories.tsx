import type { Meta, StoryObj } from "@storybook/react";
import { FullScreenFeature } from "@/components/feature";
import bg from "../../../../public/watch.jpg";

const meta = {
  title: "Components/Feature/Full Screen",
  component: FullScreenFeature,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FullScreenFeature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: bg.src,
    alt: "",
    children: (
      <div className='flex flex-col justify-between h-screen'>
        <div className='p-14 w-80'>
          <h2 className='text-9xl'>Face it.</h2>
        </div>
        <div className='flex justify-end pb-20 font-semibold pr-14'>
          <p className='text-xl'>This is the product you need.</p>
        </div>
      </div>
    ),
  },
};
