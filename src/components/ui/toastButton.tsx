"use client";

import React from "react";
import { Button } from "./button";
import { useToast } from "@/lib/hooks/use-toast";
import { ToastActionElement } from "./toast";

type ToastProps = {
  buttonText: string;
  title?: string;
  description?: string;
  variant?: "destructive" | "default";
  action?: ToastActionElement;
};
export function ToastButton({
  buttonText,
  description,
  title,
  variant = "default",
  action,
}: ToastProps) {
  const { toast } = useToast();

  return (
    <Button
      variant='default'
      onClick={() => {
        toast({
          title,
          description,
          variant,
          action,
        });
      }}
    >
      {buttonText}
    </Button>
  );
}
