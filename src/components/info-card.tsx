import React, { PropsWithChildren } from "react";
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

interface cta extends LinkProps {
  text: string;
}

interface InfoCardProps extends PropsWithChildren {
  icon?: React.JSX.Element;
  title: string;
  description?: string;
  cta?: cta;
  position?: "default" | "center";
}

export function InfoCard({
  icon,
  title,
  description,
  cta,
  children,
  position = "default",
}: InfoCardProps) {
  const centeredClassnames = position === "center" ? "items-center" : "";
  return (
    <Card className={cn("flex flex-col max-w-80", centeredClassnames)}>
      <CardHeader className={cn("flex flex-col", centeredClassnames)}>
        {icon ? <div>{icon}</div> : null}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className={position === "center" ? "text-center" : ""}>
        {children}
      </CardContent>
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
