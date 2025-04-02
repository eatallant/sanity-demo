import React from "react";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { type Hero } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

type cta = {
  text: string;
  href: string;
};

interface HeroProps extends Hero {
  cta?: cta;
  className?: string;
}

export function Hero({
  cta,
  heading,
  description,
  image,
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
            src={urlFor(image).url()}
            alt={image.alt || ""}
            className='object-cover w-full h-full'
            priority
          />
        </div>
      )}
      <div className='flex flex-col items-center h-full'>
        <div className='flex flex-col items-center pb-20'>
          <h1 className='py-6 font-bold text-white text-9xl'>{heading}</h1>
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


