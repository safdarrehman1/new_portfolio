"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "1,846+", "2.5+", "18+"
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Extract prefix, number, decimals, and suffix
    const match = value.match(/^([^0-9.]*)([0-9,.]+)(.*)$/);
    if (!match) {
      return;
    }

    const prefix = match[1] || "";
    const rawNumber = match[2].replace(/,/g, "");
    const suffix = match[3] || "";
    const targetNum = parseFloat(rawNumber);
    const hasDecimal = rawNumber.includes(".");
    const decimalPlaces = hasDecimal ? rawNumber.split(".")[1].length : 0;
    const hasComma = match[2].includes(",");

    let startTime: number | null = null;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * targetNum;

      let formattedNumber: string;
      if (hasDecimal) {
        formattedNumber = current.toFixed(decimalPlaces);
      } else {
        const rounded = Math.floor(current);
        formattedNumber = hasComma
          ? rounded.toLocaleString("en-US")
          : rounded.toString();
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
