"use client";

import React from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/shared/Stagger";
import { educationData } from "@/data/education";
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Sparkles,
} from "lucide-react";

export function EducationSection() {
  const edu = educationData[0];

  return (
    <section id="education" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Academics &amp; Credentials"
          title="Formal Education &amp;"
          highlightedText="Certifications"
          subtitle="Continuous theoretical grounding in computer software engineering paired with modern industry credentials."
        />

        <div className="space-y-10">
          {/* Main University Card */}
          <Reveal direction="up" distance={30}>
            <SpotlightCard className="p-6 sm:p-8 bg-card/80 border-border/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-border/60">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <GraduationCap className="size-7" />
                  </div>
                  <div>
                    <Badge variant="gradient" className="text-[10px] mb-1 bg-indigo-500/15 text-indigo-300 border-indigo-500/30">
                      {edu.completionDate || "Completed 28 August 2026"}
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col sm:items-end gap-1.5 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5 text-indigo-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3.5 text-indigo-400" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <div className="pt-6 space-y-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>

                {/* Spoken Languages Sub-grid */}
                {edu.languages && (
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/70 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Spoken &amp; Written Languages:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {edu.languages.map((lang, lIdx) => (
                        <span
                          key={lIdx}
                          className="text-xs px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium font-mono"
                        >
                          {lang.name} — <strong className="text-foreground">{lang.proficiency}</strong>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* FYP Highlight */}
                {edu.fypTitle && (
                  <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
                      <Sparkles className="size-3.5 text-amber-400" />
                      <span>Final Year Project (FYP):</span>
                    </div>
                    <h4 className="text-sm font-bold text-foreground">
                      {edu.fypTitle}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {edu.fypDescription}
                    </p>
                  </div>
                )}

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                    Academic Highlights &amp; Core Focus:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85"
                      >
                        <CheckCircle2 className="size-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Certifications Grid */}
          {edu.certifications && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Award className="size-5 text-amber-400" />
                <span>Professional Certifications &amp; Courses</span>
              </h3>

              <StaggerContainer
                staggerDelay={0.08}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {edu.certifications.map((cert, idx) => (
                  <StaggerItem key={idx} direction="up" distance={20} className="h-full">
                    <SpotlightCard className="p-5 bg-card/75 border-border/80 hover:border-indigo-500/40 h-full flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-indigo-400">
                            {cert.issuer}
                          </span>
                          <span className="text-[10px] font-mono text-muted-foreground">
                            {cert.date}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-foreground">
                          {cert.title}
                        </h4>
                      </div>

                      {cert.credentialId && (
                        <div className="pt-3 mt-3 border-t border-border/50 text-[10px] font-mono text-muted-foreground">
                          ID: {cert.credentialId}
                        </div>
                      )}
                    </SpotlightCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

