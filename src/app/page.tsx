import { ToastButton } from "@/components/ui/toastButton";
import { Hero } from "@/components/hero";
import { InfoCard } from "@/components/info-card";
import { SplitFeature } from "@/components/feature";
import { Separator } from "@/components/ui/separator";

import { Icons } from "@/components/icons";
import bg from "../../public/console-table.jpg";
import beans from "../../public/coffee-beans.jpg";
import cup from "../../public/java-cup.jpg";

export default function Home() {
  console.log(bg);
  return (
    <main>
      <Hero
        image={bg}
        title='Page Title.'
        description='This is the description of the page.'
      />
      <article className='flex flex-col items-center gap-10 py-10 bg-indigo-900'>
        <h3>Here are some feature cards</h3>
        <div className='flex gap-12 md:flex-row'>
          <InfoCard
            icon={<Icons.rocket height={48} width={48} color='#48179c' />}
            title='Feature A'
            position='center'
          >
            Content describing the feature. It has a longer length and goes into
            some detail.
          </InfoCard>
          <InfoCard
            icon={<Icons.rocket height={48} width={48} color='#48179c' />}
            title='Feature B'
            position='center'
          >
            Content describing feature B. Different length on this one to show
            how it looks when there is even more descriptive content.
          </InfoCard>
          <InfoCard
            icon={<Icons.rocket height={48} width={48} color='#48179c' />}
            title='Feature C'
            position='center'
            cta={{ href: "/", text: "Example CTA" }}
          >
            Content describing feature C with a button.
          </InfoCard>
        </div>
      </article>
      <article className='my-14'>
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
      </article>
    </main>
  );
}
