import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@/components/ui/separator";
import { SplitFeature } from "@/components/feature";
import beans from "../../../../public/coffee-beans.jpg";
import cup from "../../../../public/java-cup.jpg";

const meta = {
  title: "Components/Feature/Split Screen",
  component: SplitFeature,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SplitFeature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "",
    alt: "",
    imagePosition: "left",
  },
  render: () => (
    <>
      <SplitFeature src={beans.src} alt='' imagePosition='left'>
        <div className='flex flex-col gap-4'>
          <h3>SHOW OFF YOUR PRODUCT</h3>
          <ul className='flex flex-col items-center gap-2'>
            <li>this is a feature</li>
            <li>another great thing</li>
            <li>more features on this line</li>
          </ul>
        </div>
      </SplitFeature>
      <Separator className='my-3' />
      <SplitFeature src={cup.src} alt='' imagePosition='right'>
        <div className='flex flex-col gap-4'>
          <h3>SHOW OFF YOUR PRODUCT</h3>
          <ul className='flex flex-col gap-2 pl-2'>
            <li>this is a feature</li>
            <li className='pl-4'>another great thing</li>
            <li className='pl-8'>more features on this line</li>
          </ul>
        </div>
      </SplitFeature>
    </>
  ),
};
