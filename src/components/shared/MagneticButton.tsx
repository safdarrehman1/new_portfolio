"use client";

import React from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
}: MagneticButtonProps) {
  return (
    <div
      className={`inline-block transition-transform duration-300 ease-out hover:-translate-y-0.5 active:scale-95 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

