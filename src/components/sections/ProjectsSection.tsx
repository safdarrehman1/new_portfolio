"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { projects } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Compute categories with exact item counts
  const categories = useMemo(() => {
    return [
      { id: "all" as ProjectCategory, label: "All Projects", count: projects.length },
      {
        id: "fullstack" as ProjectCategory,
        label: "Full Stack",
        count: projects.filter((p) => p.category.includes("fullstack")).length,
      },
      {
        id: "frontend" as ProjectCategory,
        label: "Frontend",
        count: projects.filter((p) => p.category.includes("frontend")).length,
      },
      {
        id: "admin" as ProjectCategory,
        label: "Admin Panels",
        count: projects.filter((p) => p.category.includes("admin")).length,
      },
      {
        id: "ai" as ProjectCategory,
        label: "AI & Python",
        count: projects.filter((p) => p.category.includes("ai")).length,
      },
      {
        id: "mobile" as ProjectCategory,
        label: "Mobile Apps",
        count: projects.filter((p) => p.category.includes("mobile")).length,
      },
    ];
  }, []);

  // Filter projects according to selection
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category.includes(activeCategory));
  }, [activeCategory]);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Featured Works"
          title="Engineered with Precision &amp;"
          highlightedText="High Impact"
          subtitle="Explore selected enterprise platforms, AI systems, SaaS portals, and open-source applications."
        />

        {/* Category Filters */}
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={handleOpenModal}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More on GitHub Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-2xl bg-card/60 border border-border/80 backdrop-blur-md max-w-xl mx-auto shadow-sm">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Sparkles className="size-6" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold text-foreground">
                Want to explore more source code &amp; repositories?
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Visit my GitHub profile featuring 35+ public repos and daily commits.
              </p>
            </div>
            <Button
              asChild
              variant="gradient"
              size="sm"
              className="rounded-xl shrink-0"
            >
              <a
                href="https://github.com/safdarrehman1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <FaGithub className="size-3.5" />
                <span>GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
