"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  ChevronDown,
  Cpu,
  Database,
  User,
  CheckCircle2,
  Zap,
  Play,
  Sparkles,
} from "lucide-react";
import { siteConfig, rotatingRoles } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { SplitText } from "@/components/shared/SplitText";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"fullstack" | "ai" | "database" | "profile">("fullstack");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedLatency, setSimulatedLatency] = useState(12.4);
  const [aiScore, setAiScore] = useState(96.8);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const runSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setSimulatedLatency(Number((Math.random() * 8 + 8).toFixed(1)));
      setAiScore(Number((Math.random() * 3 + 95.5).toFixed(1)));
      setIsSimulating(false);
    }, 450);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text, Value Proposition & CTAs (Slides from Left) */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        >
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-medium text-emerald-400 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Client Projects &amp; Full-Time Roles</span>
          </div>

          {/* Main Headline with Split Text Rise */}
          <div className="space-y-2 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Hi, I&apos;m{" "}
              <SplitText
                text={siteConfig.name}
                highlightWords={["Safdar", "Rehman"]}
                highlightClassName="gradient-text"
              />
            </h1>

            {/* Rotating Role Text */}
            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground mr-2">
                I build
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400 underline decoration-indigo-500/40 underline-offset-4"
                >
                  {rotatingRoles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Short Pitch */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Junior Full-Stack Developer with 4+ years hands-on experience in React, Next.js, Node.js, and Supabase. Delivering high-impact production admin panels, landing pages, and scalable AI-driven web architectures.
          </p>

          {/* Key Proof Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-lg py-2">
            <div className="p-3 rounded-xl bg-card/75 border border-border/80 text-center lg:text-left shadow-sm">
              <div className="text-xl font-bold text-foreground font-mono">
                <AnimatedCounter value={siteConfig.stats.projectsDelivered} />
              </div>
              <div className="text-[11px] text-muted-foreground font-medium">Delivered Projects</div>
            </div>
            <div className="p-3 rounded-xl bg-card/75 border border-border/80 text-center lg:text-left shadow-sm">
              <div className="text-xl font-bold text-indigo-400 font-mono">
                <AnimatedCounter value={siteConfig.stats.yearsExperience} />
              </div>
              <div className="text-[11px] text-muted-foreground font-medium">Hands-on Exp</div>
            </div>
            <div className="p-3 rounded-xl bg-card/75 border border-border/80 text-center lg:text-left shadow-sm">
              <div className="text-xl font-bold text-emerald-400 font-mono">
                <AnimatedCounter value={siteConfig.stats.githubContributions} />
              </div>
              <div className="text-[11px] text-muted-foreground font-medium">GitHub Commits</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
            <MagneticButton>
              <Button
                variant="gradient"
                size="lg"
                onClick={() => handleScrollTo("projects")}
                className="rounded-xl font-semibold shadow-lg shadow-indigo-500/20 hover:scale-105 transition-all gap-2 min-h-[44px]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="size-4" />
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl border-border/80 hover:bg-muted/80 backdrop-blur-sm min-h-[44px]"
              >
                <a
                  href={siteConfig.cvPath}
                  download="Safdar-Rehman-CV.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="size-4 text-indigo-400" />
                  <span>Download CV</span>
                </a>
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => handleScrollTo("contact")}
                className="rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted min-h-[44px]"
              >
                <Mail className="size-4 mr-2" />
                <span>Contact Safdar</span>
              </Button>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right Column: Interactive Live Engineering Console (Slides from Right) */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative w-full"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />

          {/* Interactive Showcase Card */}
          <div className="relative z-10 w-full rounded-2xl border border-border/80 bg-card/90 shadow-2xl backdrop-blur-xl overflow-hidden">
            {/* Terminal Top Window Bar */}
            <div className="px-4 py-3 bg-muted/40 border-b border-border/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-[11px] font-mono text-muted-foreground ml-2 hidden sm:inline">
                  safdar.dev/live-console
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span>Active</span>
              </div>
            </div>

            {/* Interactive Mode Tabs */}
            <div className="grid grid-cols-4 border-b border-border/60 bg-muted/20 text-xs font-medium">
              <button
                onClick={() => setActiveTab("fullstack")}
                className={`py-2.5 px-2 flex items-center justify-center gap-1.5 transition-colors border-b-2 min-h-[44px] ${
                  activeTab === "fullstack"
                    ? "border-indigo-400 text-foreground bg-card/60 font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Zap className="size-3.5 text-indigo-400" />
                <span className="text-[11px]">Stack</span>
              </button>
              <button
                onClick={() => setActiveTab("ai")}
                className={`py-2.5 px-2 flex items-center justify-center gap-1.5 transition-colors border-b-2 min-h-[44px] ${
                  activeTab === "ai"
                    ? "border-indigo-400 text-foreground bg-card/60 font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Cpu className="size-3.5 text-cyan-400" />
                <span className="text-[11px]">AI Model</span>
              </button>
              <button
                onClick={() => setActiveTab("database")}
                className={`py-2.5 px-2 flex items-center justify-center gap-1.5 transition-colors border-b-2 min-h-[44px] ${
                  activeTab === "database"
                    ? "border-indigo-400 text-foreground bg-card/60 font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Database className="size-3.5 text-emerald-400" />
                <span className="text-[11px]">Database</span>
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`py-2.5 px-2 flex items-center justify-center gap-1.5 transition-colors border-b-2 min-h-[44px] ${
                  activeTab === "profile"
                    ? "border-indigo-400 text-foreground bg-card/60 font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <User className="size-3.5 text-amber-400" />
                <span className="text-[11px]">Profile</span>
              </button>
            </div>

            {/* Tab Content Display */}
            <div className="p-5 min-h-[260px] flex flex-col justify-between">
              {activeTab === "fullstack" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-muted-foreground">Endpoint Test</span>
                    <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      HTTP 200 OK
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background/80 border border-border/80 font-mono text-xs space-y-1.5">
                    <div className="text-muted-foreground">
                      <span className="text-indigo-400 font-bold">POST</span> /api/v1/checkout/session
                    </div>
                    <div className="text-muted-foreground/80 text-[11px] pt-1">
                      {`{ "user": "safdar.rehman", "engine": "Next.js 16 + Node.js" }`}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-muted/40 border border-border/50">
                      <span className="text-muted-foreground text-[10px] block">Edge Latency</span>
                      <span className="text-sm font-bold text-foreground">
                        {isSimulating ? "..." : `${simulatedLatency} ms`}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-muted/40 border border-border/50">
                      <span className="text-muted-foreground text-[10px] block">Cache Rate</span>
                      <span className="text-sm font-bold text-emerald-400">99.4% HIT</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "ai" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-muted-foreground">Intelligent Hiring Engine</span>
                    <span className="font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      NLP Vector V2
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background/80 border border-border/80 text-xs space-y-2">
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-muted-foreground">Resume Similarity:</span>
                      <span className="font-bold text-cyan-400">{isSimulating ? "Calculating..." : `${aiScore}%`}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500"
                        style={{ width: `${aiScore}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-muted-foreground pt-1 flex items-center gap-1.5">
                      <CheckCircle2 className="size-3 text-emerald-400" />
                      <span>Zero skill mismatch detected • Qualified</span>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-muted-foreground flex items-center justify-between px-1">
                    <span>Model: Gemini / OpenAI Embeddings</span>
                    <span className="text-indigo-400 font-semibold">1536-dim</span>
                  </div>
                </div>
              )}

              {activeTab === "database" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-muted-foreground">Sequelize &amp; MySQL Index</span>
                    <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      B-Tree Indexed
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background/80 border border-border/80 font-mono text-[11px] text-muted-foreground space-y-1">
                    <div className="text-emerald-400">EXPLAIN ANALYZE SELECT * FROM orders</div>
                    <div>WHERE status = &apos;ACTIVE&apos; AND amount &gt; 500</div>
                    <div className="text-muted-foreground/60 pt-1">Execution cost: 0.04 • Index Scan</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-muted/40 border border-border/50">
                      <span className="text-muted-foreground text-[10px] block">Query Execution</span>
                      <span className="text-sm font-bold text-foreground">1.8 ms</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-muted/40 border border-border/50">
                      <span className="text-muted-foreground text-[10px] block">Connection Pool</span>
                      <span className="text-sm font-bold text-emerald-400">10/10 Healthy</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "profile" && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 rounded-xl overflow-hidden border border-indigo-500/30 bg-muted shrink-0 shadow-inner">
                      <Image
                        src="/safdar.jpg"
                        alt="Safdar Rehman"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">Safdar Rehman</h4>
                      <p className="text-xs text-indigo-400 font-mono">Junior Full-Stack Developer</p>
                      <p className="text-[11px] text-muted-foreground">Peshawar, PK (Remote Ready)</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["React.js", "Next.js", "Node.js", "Supabase", "MySQL"].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-muted border border-border text-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Interactive Action Button */}
              <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground">
                  Interactive Live Benchmark
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="rounded-lg text-xs font-semibold gap-1.5 h-8 border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-400"
                >
                  <Play className={`size-3 ${isSimulating ? "animate-spin" : ""}`} />
                  <span>{isSimulating ? "Benchmarking..." : "Re-run Benchmark"}</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => handleScrollTo("about")}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          Scroll Down
        </span>
        <ChevronDown className="size-4 text-indigo-400" />
      </motion.div>
    </section>
  );
}


