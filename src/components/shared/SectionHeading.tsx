"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SplitText } from "./SplitText";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlightedText,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-14 sm:mb-16 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge
            variant="gradient"
            className="mb-4 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm bg-indigo-500/10 border-indigo-500/25 text-indigo-400 backdrop-blur-md"
          >
            {badge}
          </Badge>
        </motion.div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
        {title}{" "}
        {highlightedText && (
          <span className="gradient-text">{highlightedText}</span>
        )}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

