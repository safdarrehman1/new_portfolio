"use client";

import React from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { Reveal } from "@/components/shared/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/shared/Stagger";
import { siteConfig } from "@/data/site-config";
import {
  MapPin,
  Brain,
  Rocket,
  ShieldCheck,
  Award,
  Layers,
  Code,
  Zap,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export function AboutSection() {
  const statCards = [
    {
      label: "Years Experience",
      value: siteConfig.stats.yearsExperience,
      subtext: "Production Web Development",
      icon: <Award className="size-5 text-indigo-400" />,
    },
    {
      label: "Shipped Projects",
      value: siteConfig.stats.projectsDelivered,
      subtext: "Full Stack & Microservices",
      icon: <Rocket className="size-5 text-cyan-400" />,
    },
    {
      label: "Core Technologies",
      value: siteConfig.stats.technologiesMastered,
      subtext: "Frameworks, DBs & Tools",
      icon: <Layers className="size-5 text-emerald-400" />,
    },
    {
      label: "GitHub Contributions",
      value: siteConfig.stats.githubContributions,
      subtext: `${siteConfig.githubStats.longestStreak} Continuous Streak`,
      icon: <FaGithub className="size-5 text-indigo-400" />,
    },
  ];

  const clientBenefits = [
    {
      title: "End-to-End Execution",
      desc: "From initial Figma wireframes to production Next.js frontend, secure Node.js APIs, and database migrations.",
      icon: <Layers className="size-4 text-indigo-400" />,
    },
    {
      title: "Sub-Second Performance",
      desc: "Optimized Core Web Vitals, server caching, and indexed MySQL queries to maximize user retention and conversions.",
      icon: <Zap className="size-4 text-cyan-400" />,
    },
    {
      title: "Clean Code & Strict Typing",
      desc: "Strictly typed TypeScript with modular components, exhaustive error handling, and maintainable architecture.",
      icon: <ShieldCheck className="size-4 text-emerald-400" />,
    },
    {
      title: "Reliable Async Communication",
      desc: "Daily sprint updates, recorded feature walkthroughs, and proactive bottleneck identification.",
      icon: <Clock className="size-4 text-amber-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Engineering Profile"
          title="Engineering High-Impact Systems with"
          highlightedText="Precision & Speed"
          subtitle="Delivering scalable software architectures that solve complex business challenges with modern engineering standards."
        />

        {/* 4 Stat Counters with Stagger */}
        <StaggerContainer
          staggerDelay={0.09}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
        >
          {statCards.map((stat, idx) => (
            <StaggerItem key={idx} direction="up" distance={24}>
              <SpotlightCard className="p-6 text-center lg:text-left flex flex-col justify-between h-full bg-card/80 border-border/80 hover:border-indigo-500/40">
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    {stat.icon}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    Verified
                  </span>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-foreground gradient-text font-mono">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm font-semibold text-foreground mt-1.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.subtext}
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bento Grid Layout with Directional Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: My Story & Background (Span 7 cols - Enters from Left) */}
          <div className="md:col-span-7">
            <Reveal direction="left" distance={32} className="h-full">
              <SpotlightCard className="p-7 sm:p-8 h-full flex flex-col justify-between bg-card/80 border-border/80">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
                    <Code className="size-3.5" />
                    <span>Technical Background</span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">
                    Bridging Design Craft with Resilient Backend Architecture
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    I am a Junior Full-Stack Developer at <strong className="text-foreground font-semibold">Culyte Software House</strong> in Peshawar with 4+ years of hands-on experience building production web applications with React.js and Next.js, and a growing backend practice in Node.js, Express, MySQL (Sequelize), MongoDB, and Supabase.
                  </p>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Over my career, I have delivered admin panels, marketing landing pages, e-commerce frontends, and complete client platforms across fintech, healthcare, logistics, and AI-driven products. My prior experience includes impactful roles at <strong className="text-foreground font-semibold">ORK Technologies</strong> and <strong className="text-foreground font-semibold">Tech Track</strong>.
                  </p>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Currently focused on AI Engineering, studying generative AI &amp; LLM fundamentals, and developing Python-based AI tools with the aim of seamlessly integrating intelligence into modern web applications. BS Software Engineering graduate (2022–2026, completed 28 August 2026).
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-border/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-muted-foreground mr-1">
                    Core Arsenal:
                  </span>
                  {["React.js", "Next.js", "TypeScript", "Node.js", "Supabase"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-lg bg-muted text-foreground font-medium border border-border/80 font-mono"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Card 2: Why Clients Hire Safdar (Span 5 cols - Enters from Right) */}
          <div className="md:col-span-5">
            <Reveal direction="right" distance={32} className="h-full">
              <SpotlightCard className="p-7 sm:p-8 h-full flex flex-col justify-between bg-card/80 border-border/80">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
                    <Sparkles className="size-3.5" />
                    <span>Why Work With Me</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">
                    What Clients &amp; Teams Value
                  </h3>

                  <div className="space-y-4">
                    {clientBenefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-muted border border-border/80 shrink-0 mt-0.5">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-foreground">
                            {benefit.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {benefit.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5" />
                    <span>Available for immediate onboarding</span>
                  </span>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Card 3: Currently Building (FYP 2025-26) (Span 6 cols - Enters from Left) */}
          <div className="md:col-span-6">
            <Reveal direction="left" distance={32} className="h-full">
              <SpotlightCard className="p-7 h-full flex flex-col justify-between bg-card/80 border-border/80">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <Brain className="size-4" />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                      FYP 2025–26 Flagship
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-foreground mb-1">
                    Intelligent Hiring &amp; Skills Gap Engine
                  </h4>
                  <p className="text-xs font-semibold text-indigo-400 mb-3">
                    AI-Powered Candidate Assessment &amp; NLP Parsing
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Engineering an automated candidate assessment platform using vector embeddings, NLP resume parsing, and semantic skill gap scoring. Built with MERN, Next.js, and Expo React Native.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/50 text-[11px] font-mono text-indigo-400 flex items-center justify-between">
                  <span>Vector Embeddings • Semantic Search</span>
                  <span className="text-emerald-400">96.8% Accuracy</span>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Card 4: Global Availability & Location (Span 6 cols - Enters from Right) */}
          <div className="md:col-span-6">
            <Reveal direction="right" distance={32} className="h-full">
              <SpotlightCard className="p-7 h-full flex flex-col justify-between bg-card/80 border-border/80">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <MapPin className="size-4" />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      Remote Worldwide Ready
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-foreground mb-1">
                    Languages &amp; Global Collaboration
                  </h4>
                  <p className="text-xs font-semibold text-cyan-400 mb-3">
                    Peshawar, Pakistan (PKT, UTC+5) • Remote Ready
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-medium">
                      English — Fluent
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium">
                      Urdu — Fluent
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium">
                      Pashto — Native
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Experienced with agile sprints, asynchronous Slack/Notion collaboration, Git review workflows, and flexible timezone overlap for international teams.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/50 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                  <span>Average Response Time: &lt; 24h</span>
                  <span className="text-emerald-400 font-medium">100% Reliability</span>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


