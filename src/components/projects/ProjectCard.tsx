"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/types";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { TechBadge } from "@/components/shared/TechBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Maximize2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Clock,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const isInDevelopment =
    project.status?.toLowerCase().includes("development") ||
    project.id === "lets-play";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="h-full flex flex-col"
    >
      <SpotlightCard className="h-full flex flex-col group hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
        {/* Project Thumbnail with overlay controls */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40 border-b border-border/60">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

          {/* Badges on Top of Image */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <div className="flex flex-wrap gap-1.5">
              {isInDevelopment ? (
                <Badge
                  variant="outline"
                  className="text-[10px] px-2 py-0.5 shadow-sm backdrop-blur-md font-semibold bg-amber-500/15 border-amber-500/30 text-amber-300"
                >
                  <Clock className="size-2.5 mr-1 text-amber-400" />
                  In Development
                </Badge>
              ) : project.featured ? (
                <Badge
                  variant="gradient"
                  className="text-[10px] px-2 py-0.5 shadow-sm backdrop-blur-md font-semibold bg-indigo-500/15 border-indigo-500/30 text-indigo-300"
                >
                  <Sparkles className="size-2.5 mr-1 text-indigo-400" />
                  Featured
                </Badge>
              ) : null}

              {project.isNda && (
                <Badge
                  variant="destructive"
                  className="text-[10px] px-2 py-0.5 backdrop-blur-md"
                >
                  <ShieldCheck className="size-2.5 mr-1" />
                  NDA
                </Badge>
              )}
            </div>

            <span className="text-[10px] font-mono text-muted-foreground bg-background/90 px-2.5 py-0.5 rounded-full backdrop-blur-md border border-border/60">
              {project.date}
            </span>
          </div>

          {/* Quick View Button on Image Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/55 backdrop-blur-[2px]">
            <Button
              variant="glass"
              size="sm"
              onClick={() => onOpenModal(project)}
              className="rounded-full gap-1.5 text-xs font-semibold text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-transform min-h-[38px]"
            >
              <Maximize2 className="size-3.5" />
              <span>Quick Preview</span>
            </Button>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
          <div className="space-y-2">
            <h3
              onClick={() => onOpenModal(project)}
              className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-indigo-400 transition-colors cursor-pointer line-clamp-1"
            >
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics / Highlights if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex items-center gap-3 py-2 px-3 rounded-lg bg-muted/40 border border-border/50 text-xs">
              <span className="text-muted-foreground text-[11px] font-mono">
                {project.metrics[0].label}:
              </span>
              <span className="font-bold text-indigo-400 font-mono">
                {project.metrics[0].value}
              </span>
            </div>
          )}

          {/* Tech stack badges (max 4 chips) */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.slice(0, 4).map((tech) => (
              <TechBadge key={tech} name={tech} size="sm" />
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[10px] text-muted-foreground self-center px-1 font-mono">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-border/60 flex items-center justify-between gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenModal(project)}
              className="px-2 text-xs text-indigo-400 font-semibold hover:text-indigo-300 hover:bg-indigo-500/10 gap-1 rounded-lg min-h-[38px]"
            >
              <span>Case Study</span>
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
            </Button>

            <div className="flex items-center gap-1.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
                >
                  <FaGithub className="size-4" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit live site of ${project.title}`}
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-indigo-400 hover:bg-indigo-500/10 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
                >
                  <ExternalLink className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}


