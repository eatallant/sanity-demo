import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FeatureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imagePosition?: 'left' | 'right';
}

export function FullScreenFeature({ children, src, alt }: FeatureProps) {
  return (
    <article className="h-screen">
      <div>{children}</div>
      {src ? (
        <div className="absolute inset-0 -z-10">
          <Image src={src} alt={alt || ''} objectFit="cover" layout="fill" />
        </div>
      ) : null}
    </article>
  );
}

export function SplitFeature({
  className,
  children,
  src,
  alt,
  imagePosition = 'left'
}: FeatureProps) {
  const imageRight = imagePosition === 'right';
  return (
    <article
      className={cn(
        'flex flex-col gap-6 md:flex-row md:min-h-72',
        imageRight ? 'md:flex-row-reverse' : null,
        className
      )}
    >
      <div className="relative w-full md:w-1/3 md:mx-20">
        {src ? (
          <Image
            src={src}
            alt={alt || ''}
            height={500}
            width={500}
            className="object-cover w-full h-full max-w-full"
          />
        ) : null}
      </div>
      <div
        className={cn(
          'flex flex-col md:self-center md:w-1/2 px-8 md:px-24',
          imageRight ? 'items-center' : 'items-start'
        )}
      >
        {children}
      </div>
    </article>
  );
}
