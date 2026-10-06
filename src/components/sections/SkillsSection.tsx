"use client";

import React from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { TechBadge } from "@/components/shared/TechBadge";
import { Marquee } from "@/components/shared/Marquee";
import { StaggerContainer, StaggerItem } from "@/components/shared/Stagger";
import { skillCategories, marqueeSkills } from "@/data/skills";
import { Layout, Server, Wrench, Sparkles, CheckCircle2, Brain, Database, Code2 } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiSequelize,
  SiGit,
  SiPostman,
  SiRedux,
  SiExpo,
  SiSupabase,
  SiPython,
  SiSocketdotio,
  SiVercel,
} from "react-icons/si";

export function SkillsSection() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "layout":
        return <Layout className="size-5 text-indigo-400" />;
      case "server":
        return <Server className="size-5 text-cyan-400" />;
      case "database":
        return <Database className="size-5 text-emerald-400" />;
      case "brain":
        return <Brain className="size-5 text-indigo-400" />;
      case "wrench":
        return <Wrench className="size-5 text-amber-400" />;
      default:
        return <Sparkles className="size-5 text-indigo-400" />;
    }
  };

  const getMarqueeIcon = (iconName: string) => {
    switch (iconName) {
      case "SiReact":
        return <SiReact className="size-5 text-[#61DAFB]" />;
      case "SiNextdotjs":
        return <SiNextdotjs className="size-5 text-foreground" />;
      case "SiTypescript":
        return <SiTypescript className="size-5 text-[#3178C6]" />;
      case "SiTailwindcss":
        return <SiTailwindcss className="size-5 text-[#06B6D4]" />;
      case "SiNodedotjs":
        return <SiNodedotjs className="size-5 text-[#339933]" />;
      case "SiMysql":
        return <SiMysql className="size-5 text-[#4479A1]" />;
      case "SiMongodb":
        return <SiMongodb className="size-5 text-[#47A248]" />;
      case "SiExpress":
        return <SiExpress className="size-5 text-foreground" />;
      case "SiSequelize":
        return <SiSequelize className="size-5 text-[#52B0E7]" />;
      case "SiSupabase":
        return <SiSupabase className="size-5 text-[#3ECF8E]" />;
      case "SiPython":
        return <SiPython className="size-5 text-[#3776AB]" />;
      case "SiSocketdotio":
        return <SiSocketdotio className="size-5 text-foreground" />;
      case "SiVercel":
        return <SiVercel className="size-5 text-foreground" />;
      case "SiGit":
        return <SiGit className="size-5 text-[#F05032]" />;
      case "SiPostman":
        return <SiPostman className="size-5 text-[#FF6C37]" />;
      case "SiRedux":
        return <SiRedux className="size-5 text-[#764ABC]" />;
      case "SiExpo":
        return <SiExpo className="size-5 text-foreground" />;
      case "SiShadcnui":
        return <Code2 className="size-5 text-foreground" />;
      default:
        return <Sparkles className="size-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Core Stack &amp; Tooling"
          title="Battle-Tested Technologies &amp;"
          highlightedText="Engineering Capabilities"
          subtitle="A comprehensive toolkit refined over 4+ years of delivering high-impact production web applications."
        />

        {/* Infinite Marquee of Brand Logos (Pause on hover) */}
        <div className="mb-14 rounded-2xl bg-card/60 border border-border/80 backdrop-blur-md p-3.5 shadow-sm">
          <Marquee speed={30} pauseOnHover={true}>
            {marqueeSkills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-muted/60 border border-border/70 hover:border-indigo-500/40 hover:bg-card transition-all"
              >
                {getMarqueeIcon(skill.icon)}
                <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Skill Level Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
            <span className="text-foreground font-semibold">Core:</span>
            <span>Primary production strength</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            <span className="text-foreground font-semibold">Proficient:</span>
            <span>Extensive experience</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
            <span className="text-foreground font-semibold">Familiar:</span>
            <span>Working knowledge</span>
          </div>
        </div>

        {/* Skill Category Cards with Staggered Upward Entrance */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {skillCategories.map((category, idx) => (
            <StaggerItem key={idx} direction="up" distance={28} className="h-full">
              <SpotlightCard className="p-7 h-full flex flex-col justify-between bg-card/80 border-border/80 hover:border-indigo-500/40 group">
                <div className="space-y-5">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-border/60">
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {category.title}
                      </h3>
                      <span className="text-xs text-muted-foreground font-mono">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <TechBadge
                        key={sIdx}
                        name={skill.name}
                        level={skill.level}
                        size="md"
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    <span>Production Grade</span>
                  </span>
                  <span className="text-indigo-400 font-bold">100% Tested</span>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

