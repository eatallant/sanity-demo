import React from 'react';
import { cn } from '@/lib/utils';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { type TextWithImage } from '@/sanity/types';
import { urlFor } from '@/sanity/lib/image';

type cta = {
  text: string;
  href: string;
};

interface TextWithImageProps extends TextWithImage {
  cta?: cta;
  className?: string;
}

export function TextWithImage({
  cta,
  heading,
  description,
  image,
  imagePosition = 'right',
  className
}: TextWithImageProps) {
  const imagePositionClass = imagePosition.includes('right')
    ? 'md:flex-row-reverse'
    : 'md:flex-row';

  return (
    <section
      className={cn(
        'h-80vh md:h-screen flex flex-col',
        imagePositionClass,
        className
      )}
    >
      {image?.asset && (
        <div className="relative w-full md:w-1/2">
          <Image
            src={urlFor(image).height(800).width(600).url()}
            alt={image?.alt || ''}
            height={800}
            width={600}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <div
        className={cn(
          'w-full md:w-1/2 flex flex-col justify-center pl-6 py-20 md:py-0'
        )}
      >
        <div className="pb-10">
          <h2 className="text-7xl">{heading}</h2>
          <p className="text-3xl font-semibold">{description}</p>
        </div>
        {cta ? (
          <Button className="self-start">
            <Link href={cta.href}>{cta.text}</Link>
          </Button>
        ) : null}
      </div>
    </section>
  );
}
