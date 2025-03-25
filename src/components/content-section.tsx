import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Eyebrow } from "./text/eyebrow";

interface ContentSectionProps extends PropsWithChildren {
  className?: string;
  eyebrow?: string;
  title?: string;
  position?: "left" | "center" | "right";
}

export function ContentSection({
  eyebrow,
  title,
  children,
  className,
  position = "left",
}: ContentSectionProps) {
  const positionClass =
    position === "center"
      ? "items-center"
      : position === "right"
        ? "items-end"
        : "";

  const childrenClass =
    position === "center"
      ? "text-center"
      : position === "right"
        ? "text-end"
        : "";

  return (
    <article className={cn("flex flex-col p-4", positionClass, className)}>
      <Eyebrow className='mx-1'>{eyebrow}</Eyebrow>
      <h2 className='pb-5'>{title}</h2>
      <div className={cn("flex flex-col", childrenClass)}>{children}</div>
    </article>
  );
}
