"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/shared/TechBadge";
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Calendar,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl sm:max-w-4xl p-0 overflow-hidden border-border/80">
        {/* Banner image preview */}
        <div className="relative w-full h-56 sm:h-72 bg-muted/50 overflow-hidden border-b border-border/60">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

          {/* Badges overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.isNda && (
              <Badge variant="destructive" className="flex items-center gap-1">
                <ShieldCheck className="size-3" />
                <span>Client NDA (Proprietary)</span>
              </Badge>
            )}
            {project.featured && (
              <Badge variant="gradient" className="flex items-center gap-1">
                <Sparkles className="size-3" />
                <span>Featured Project</span>
              </Badge>
            )}
          </div>
        </div>

        {/* Scrollable details container */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(90vh-14rem)] overflow-y-auto">
          {/* Header */}
          <DialogHeader className="text-left space-y-2">
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-mono">
                <Calendar className="size-3.5 text-primary" />
                {project.date}
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <UserCheck className="size-3.5 text-primary" />
                {project.role}
              </span>
            </div>

            <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-muted-foreground font-medium">
              {project.subtitle}
            </DialogDescription>
          </DialogHeader>

          {/* Key Metrics Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-muted/40 border border-border/60">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">
                    {metric.label}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-foreground gradient-text">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Case Study Breakdown: Problem -> Solution -> Result */}
          <div className="space-y-4">
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-1.5">
                The Challenge &amp; Problem
              </h4>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1.5">
                Engineered Solution
              </h4>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center gap-1.5">
                <TrendingUp className="size-4" />
                Business Impact &amp; Result
              </h4>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider text-xs">
                Key Features &amp; Architecture Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="size-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Technologies &amp; Libraries Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} size="md" />
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-border/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2.5">
              {project.liveUrl && (
                <Button asChild variant="gradient" size="sm" className="rounded-xl">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    <span>Visit Live Demo</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                </Button>
              )}

              {project.adminUrl && (
                <Button asChild variant="outline" size="sm" className="rounded-xl border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10">
                  <a
                    href={project.adminUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    <span>Admin Portal</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                </Button>
              )}

              {project.githubUrl && (
                <Button asChild variant="outline" size="sm" className="rounded-xl">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    <FaGithub className="size-3.5" />
                    <span>View Repository</span>
                  </a>
                </Button>
              )}

              <Button asChild variant="ghost" size="sm" className="rounded-xl">
                <Link href={`/projects/${project.slug}`}>
                  Case Study Page →
                </Link>
              </Button>
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={onClose}
              className="rounded-xl"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
