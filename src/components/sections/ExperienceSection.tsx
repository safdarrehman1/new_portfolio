"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { TechBadge } from "@/components/shared/TechBadge";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/Reveal";
import { experiences } from "@/data/experience";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Career Journey"
          title="Work Experience &amp;"
          highlightedText="Engineering Milestones"
          subtitle="A track record of delivering production full-stack web applications, scalable client admin portals, and resilient database architectures."
        />

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Timeline Track (Desktop: Center, Mobile: Left) */}
          <div className="absolute top-2 bottom-2 left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 w-[2px] bg-border/60" />

          {/* Scroll-linked dynamic drawing line */}
          <motion.div
            style={{ scaleY: shouldReduceMotion ? 1 : scaleY }}
            className="absolute top-2 bottom-2 left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-indigo-500 via-cyan-400 to-emerald-400 origin-top shadow-sm shadow-indigo-500/30"
          />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col lg:flex-row items-start ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-6 lg:gap-12 pl-10 sm:pl-14 lg:pl-0`}
                >
                  {/* Timeline Pop-in Node */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-4 z-20 flex items-center justify-center h-8 w-8 rounded-full border-2 bg-card ${
                      exp.current
                        ? "border-indigo-400 text-indigo-400 shadow-lg shadow-indigo-500/30"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {exp.current ? (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                      </span>
                    ) : (
                      <Briefcase className="size-3.5" />
                    )}
                  </motion.div>

                  {/* Card Content with Alternating Directional Reveal */}
                  <div className={`w-full lg:w-[calc(50%-2rem)] ${isEven ? "lg:text-left" : "lg:text-left"}`}>
                    <Reveal
                      direction={shouldReduceMotion ? "none" : isEven ? "left" : "right"}
                      distance={30}
                    >
                      <SpotlightCard className="p-6 sm:p-8 bg-card/80 border-border/80 hover:border-indigo-500/40">
                        {/* Header info */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-border/60">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                {exp.role}
                              </h3>
                              {exp.current && (
                                <Badge variant="success" className="text-[11px] px-2 py-0.5">
                                  Current Role
                                </Badge>
                              )}
                            </div>

                            <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-indigo-400">
                              <span>{exp.company}</span>
                              {exp.companyUrl && exp.companyUrl !== "#" && (
                                <a
                                  href={exp.companyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-indigo-300 transition-colors"
                                  aria-label={`Visit ${exp.company} website`}
                                >
                                  <ExternalLink className="size-3.5 inline ml-0.5" />
                                </a>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs text-muted-foreground font-mono">
                            <span className="flex items-center gap-1">
                              <Calendar className="size-3.5 text-indigo-400" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="size-3.5 text-indigo-400" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Key Achievements Bullets */}
                        <div className="space-y-2 mb-6">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                            Key Impact &amp; Contributions:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.slice(0, 4).map((item, aIdx) => {
                              const colonIdx = item.indexOf(":");
                              if (colonIdx !== -1) {
                                const prefix = item.slice(0, colonIdx);
                                const rest = item.slice(colonIdx + 1);
                                return (
                                  <li
                                    key={aIdx}
                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed"
                                  >
                                    <CheckCircle2 className="size-4 text-teal-400 shrink-0 mt-0.5" />
                                    <span>
                                      <strong className="text-foreground font-semibold">{prefix}:</strong>
                                      <span className="text-muted-foreground">{rest}</span>
                                    </span>
                                  </li>
                                );
                              }
                              return (
                                <li
                                  key={aIdx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                                >
                                  <CheckCircle2 className="size-4 text-teal-400 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* Tech Stack Badges (Clean 4-5 relevant tags) */}
                        <div className="pt-4 border-t border-border/50">
                          <span className="text-xs text-muted-foreground font-mono block mb-2">
                            Applied Technologies:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.slice(0, 5).map((tech) => (
                              <TechBadge key={tech} name={tech} size="sm" />
                            ))}
                            {exp.technologies.length > 5 && (
                              <span className="text-[11px] text-muted-foreground self-center px-1 font-mono">
                                +{exp.technologies.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>
                      </SpotlightCard>
                    </Reveal>
                  </div>

                  {/* Empty Spacer Column for Desktop alternating balance */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

