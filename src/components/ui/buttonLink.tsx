import { Button } from "./button";
import Link from "next/link";
import { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonLinkProps extends ButtonProps {
  href: string;
  text: string;
  external?: boolean;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export function ButtonLink({
  href,
  text,
  external = false,
  variant = "default",
  size = "lg",
  className,
  ...props
}: ButtonLinkProps) {
  const targetBlank = external ? "_blank" : "";

  return (
    <Link href={href} className="w-fit" target={targetBlank}>
      <Button
        variant={variant}
        size={size}
        className={cn(className)}
        {...props}
      >
        {text}
      </Button>
    </Link>
  );
}
