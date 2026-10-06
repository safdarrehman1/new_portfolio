"use client";

import React from "react";

export function BackgroundBeams() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Top Left Indigo Ambient Glow */}
      <div className="absolute -top-[10%] left-[10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/10 blur-[100px] will-change-transform animate-pulse-subtle" />

      {/* Middle Right Sky/Blue Ambient Glow */}
      <div className="absolute top-[35%] -right-[5%] h-[580px] w-[580px] rounded-full bg-gradient-to-br from-blue-600/15 to-cyan-500/15 blur-[110px] will-change-transform animate-pulse-subtle [animation-delay:2s]" />

      {/* Bottom Left Teal Ambient Glow */}
      <div className="absolute top-[70%] left-[5%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-teal-500/15 to-emerald-600/10 blur-[100px] will-change-transform animate-pulse-subtle [animation-delay:4s]" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20" />
    </div>
  );
}

