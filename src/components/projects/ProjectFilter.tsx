"use client";

import React from "react";
import { ProjectCategory } from "@/types";
import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: { id: ProjectCategory; label: string; count: number }[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
}

export function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-card/65 backdrop-blur-md border border-border/80 max-w-2xl mx-auto mb-12 shadow-sm">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 min-h-[42px] ${
              isActive
                ? "text-white font-bold shadow-md"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 shadow-md shadow-indigo-500/20"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
            <span
              className={`relative z-10 px-1.5 py-0.5 text-[10px] rounded-full font-mono ${
                isActive
                  ? "bg-white/20 text-white font-bold"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {cat.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

