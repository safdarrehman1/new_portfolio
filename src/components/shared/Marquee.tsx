"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  speed?: number; // seconds for full loop
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  pauseOnHover = true,
  speed = 30,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 select-none relative [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,1)_12%,rgba(0,0,0,1)_88%,transparent_100%)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-8 min-w-full animate-marquee",
          direction === "right" && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around gap-8 min-w-full animate-marquee",
          direction === "right" && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
