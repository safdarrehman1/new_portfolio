"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className,
  from = "from-indigo-500",
  via = "via-blue-500",
  to = "to-teal-400",
  animate = false,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r inline-block",
        from,
        via,
        to,
        animate && "bg-[length:200%_auto] animate-gradient",
        className
      )}
    >
      {children}
    </span>
  );
}
