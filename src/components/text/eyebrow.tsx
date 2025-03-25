import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface EyebrowProps extends PropsWithChildren {
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn("uppercase text-md font-semibold", className)}>
      {children}
    </p>
  );
}
