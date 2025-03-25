import React from "react";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type cta = {
  text: string;
  href: string;
};

interface HeroProps {
  cta?: cta;
  title: string;
  description?: string;
  image: StaticImageData;
  alt?: string;
  className?: string;
}

export function Hero({
  cta,
  title,
  description,
  image,
  alt = "",
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative min-h-[60vh] md:min-h-[90vh] container-padding overflow-hidden bg-gray-700 bg-opacity-20",
        className
      )}
      aria-label='Hero section'
    >
      {image && (
        <div className='absolute inset-0 -z-10'>
          <Image
            loading='eager'
            src={image}
            alt={alt}
            className='object-cover w-full h-full'
            priority
          />
        </div>
      )}
      <div className='flex flex-col items-center h-full'>
        <div className='flex flex-col items-center pb-20'>
          <h1 className='py-6 font-bold text-white text-9xl'>{title}</h1>
          <p className='text-3xl text-white'>{description}</p>
        </div>
        {cta ? (
          <Button className=''>
            <Link href={cta.href}>{cta.text}</Link>
          </Button>
        ) : null}
      </div>
    </section>
  );
}

interface SplitHeroProps extends HeroProps {
  imagePosition?: "left" | "right";
}

export function SplitHero({
  cta,
  title,
  description,
  image,
  alt = "",
  imagePosition = "right",
  className,
}: SplitHeroProps) {
  const imagePositionClass =
    imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section
      className={cn(
        "h-80vh md:h-screen flex flex-col",
        imagePositionClass,
        className
      )}
    >
      <div className='relative w-full md:w-1/2'>
        <Image src={image} alt={alt} className='object-cover w-full h-full' />
      </div>
      <div
        className={cn(
          "w-full md:w-1/2 flex flex-col justify-center pl-6 py-20 md:py-0"
        )}
      >
        <div className='pb-10'>
          <h1 className='text-7xl'>{title}</h1>
          <p className='text-3xl font-semibold'>{description}</p>
        </div>
        {cta ? (
          <Button className='self-start'>
            <Link href={cta.href}>{cta.text}</Link>
          </Button>
        ) : null}
      </div>
    </section>
  );
}
