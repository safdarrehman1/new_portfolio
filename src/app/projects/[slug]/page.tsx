import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { TechBadge } from "@/components/shared/TechBadge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Calendar,
  UserCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study | Safdar Rehman`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back Link */}
        <div>
          <Button asChild variant="ghost" size="sm" className="rounded-xl gap-2">
            <Link href="/#projects">
              <ArrowLeft className="size-4" />
              <span>Back to all projects</span>
            </Link>
          </Button>
        </div>

        {/* Header Title & Badges */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.featured && (
              <Badge variant="gradient">
                <Sparkles className="size-3 mr-1" />
                Featured Project
              </Badge>
            )}
            {project.isNda && (
              <Badge variant="destructive">
                <ShieldCheck className="size-3 mr-1" />
                Client NDA Protected
              </Badge>
            )}
            <Badge variant="outline" className="font-mono text-xs">
              {project.date}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground font-medium">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-mono pt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4 text-primary" />
              <span>Timeline: {project.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <UserCheck className="size-4 text-primary" />
              <span>Role: {project.role}</span>
            </span>
          </div>
        </div>

        {/* Main Mockup / Screenshot Showcase */}
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-card border border-border/80 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Key Metrics Banner */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-card border border-border/80">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                  {metric.label}
                </span>
                <p className="text-2xl font-bold gradient-text font-mono">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Problem -> Solution -> Result Breakdown */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Case Study &amp; Technical Breakdown
          </h2>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-red-500/20 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-red-400">
                1. The Challenge
              </h3>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-blue-500/20 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                2. Architectural Solution
              </h3>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-emerald-500/20 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <TrendingUp className="size-4" />
                <span>3. Business Impact &amp; Results</span>
              </h3>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        {project.keyFeatures && (
          <div className="p-8 rounded-2xl bg-card border border-border/80 space-y-4">
            <h3 className="text-lg font-bold text-foreground">
              Key Features &amp; Implementation Details
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="size-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="p-8 rounded-2xl bg-card border border-border/80 space-y-4">
          <h3 className="text-lg font-bold text-foreground">
            Technologies &amp; Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} name={tech} size="md" />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {project.liveUrl && (
            <Button asChild variant="gradient" size="lg" className="rounded-xl">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="size-4" />
              </a>
            </Button>
          )}

          {project.adminUrl && (
            <Button asChild variant="outline" size="lg" className="rounded-xl border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10">
              <a
                href={project.adminUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Launch Admin Portal</span>
                <ExternalLink className="size-4" />
              </a>
            </Button>
          )}

          {project.githubUrl && (
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaGithub className="size-4" />
                <span>Explore Source Code</span>
              </a>
            </Button>
          )}

          <Button asChild variant="ghost" size="lg" className="rounded-xl">
            <Link href="/#contact">Discuss Similar Project →</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
