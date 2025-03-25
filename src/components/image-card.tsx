import React from "react";
import Link, { type LinkProps } from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

interface cta extends LinkProps {
  text: string;
}

interface ImageCardProps extends ImageProps {
  title: string;
  description?: string;
  cta?: cta;
  position?: "default" | "center";
  noBorder?: boolean;
}

export function ImageCard({
  title,
  description,
  cta,
  src,
  alt,
  width,
  height,
  children,
  className,
  position = "default",
  noBorder = false,
}: ImageCardProps) {
  const centeredClassnames = position === "center" ? "items-center" : "";
  const borderClassnames = noBorder ? "border-none shadow-none" : "";

  return (
    <Card
      className={cn(
        "flex flex-col",
        centeredClassnames,
        borderClassnames,
        className
      )}
    >
      <CardHeader className={cn("flex flex-col", centeredClassnames)}>
        <div className='pb-3'>
          <Image src={src} alt={alt} width={width} height={height} />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {cta ? (
        <CardFooter>
          <Button variant='link' className='p-0'>
            <Link href={cta.href}>{cta.text}</Link>
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
}
