"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiSequelize,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiRedux,
  SiExpo,
  SiFigma,
  SiVercel,
  SiAntdesign,
  SiHtml5,
  SiPython,
  SiSocketdotio,
  SiSupabase,
  SiFirebase,
  SiStreamlit,
  SiOpencv,
  SiRailway,
} from "react-icons/si";
import { Code2, Server, Sparkles, Layers, Cpu, Globe, Database, Network, Bot } from "lucide-react";

interface TechBadgeProps {
  name: string;
  level?: "Core" | "Proficient" | "Familiar";
  showIcon?: boolean;
  className?: string;
  size?: "sm" | "md";
}

const iconMap: Record<string, React.ReactNode> = {
  react: <SiReact className="text-[#61DAFB] size-3.5" />,
  "react.js": <SiReact className="text-[#61DAFB] size-3.5" />,
  nextjs: <SiNextdotjs className="text-foreground size-3.5" />,
  "next.js": <SiNextdotjs className="text-foreground size-3.5" />,
  "next.js 15/16": <SiNextdotjs className="text-foreground size-3.5" />,
  "next.js (app router)": <SiNextdotjs className="text-foreground size-3.5" />,
  typescript: <SiTypescript className="text-[#3178C6] size-3.5" />,
  javascript: <SiJavascript className="text-[#F7DF1E] size-3.5" />,
  "javascript (es6+)": <SiJavascript className="text-[#F7DF1E] size-3.5" />,
  tailwind: <SiTailwindcss className="text-[#06B6D4] size-3.5" />,
  "tailwind css": <SiTailwindcss className="text-[#06B6D4] size-3.5" />,
  nodejs: <SiNodedotjs className="text-[#339933] size-3.5" />,
  "node.js": <SiNodedotjs className="text-[#339933] size-3.5" />,
  express: <SiExpress className="text-foreground size-3.5" />,
  "express.js": <SiExpress className="text-foreground size-3.5" />,
  mysql: <SiMysql className="text-[#4479A1] size-3.5" />,
  "mysql (sequelize)": <SiMysql className="text-[#4479A1] size-3.5" />,
  mongodb: <SiMongodb className="text-[#47A248] size-3.5" />,
  "mongodb (mongoose)": <SiMongodb className="text-[#47A248] size-3.5" />,
  supabase: <SiSupabase className="text-[#3ECF8E] size-3.5" />,
  sequelize: <SiSequelize className="text-[#52B0E7] size-3.5" />,
  "sequelize orm": <SiSequelize className="text-[#52B0E7] size-3.5" />,
  postgresql: <SiPostgresql className="text-[#4169E1] size-3.5" />,
  git: <SiGit className="text-[#F05032] size-3.5" />,
  "git & github": <SiGit className="text-[#F05032] size-3.5" />,
  github: <SiGithub className="text-foreground size-3.5" />,
  postman: <SiPostman className="text-[#FF6C37] size-3.5" />,
  zustand: <SiRedux className="text-[#764ABC] size-3.5" />,
  "react query": <Sparkles className="text-[#FF4154] size-3.5" />,
  "react query (tanstack)": <Sparkles className="text-[#FF4154] size-3.5" />,
  "redux toolkit": <SiRedux className="text-[#764ABC] size-3.5" />,
  "context api": <Code2 className="text-indigo-400 size-3.5" />,
  expo: <SiExpo className="text-foreground size-3.5" />,
  "react native (expo)": <SiExpo className="text-foreground size-3.5" />,
  "react native": <SiExpo className="text-foreground size-3.5" />,
  figma: <SiFigma className="text-[#F24E1E] size-3.5" />,
  vercel: <SiVercel className="text-foreground size-3.5" />,
  "firebase hosting": <SiFirebase className="text-[#FFCA28] size-3.5" />,
  firebase: <SiFirebase className="text-[#FFCA28] size-3.5" />,
  railway: <SiRailway className="text-[#0B0D0E] dark:text-white size-3.5" />,
  hostinger: <Globe className="text-[#673DE6] size-3.5" />,
  "dns & server migration": <Network className="text-cyan-400 size-3.5" />,
  "ant design": <SiAntdesign className="text-[#0170FE] size-3.5" />,
  "material ui": <Layers className="text-[#007FFF] size-3.5" />,
  "material ui (mui)": <Layers className="text-[#007FFF] size-3.5" />,
  mui: <Layers className="text-[#007FFF] size-3.5" />,
  shadcn: <Code2 className="text-foreground size-3.5" />,
  "shadcn ui": <Code2 className="text-foreground size-3.5" />,
  "html5 / css3": <SiHtml5 className="text-[#E34F26] size-3.5" />,
  html5: <SiHtml5 className="text-[#E34F26] size-3.5" />,
  css3: <Code2 className="text-[#1572B6] size-3.5" />,
  python: <SiPython className="text-[#3776AB] size-3.5" />,
  "python (learning)": <SiPython className="text-[#3776AB] size-3.5" />,
  streamlit: <SiStreamlit className="text-[#FF4B4B] size-3.5" />,
  opencv: <SiOpencv className="text-[#5C3EE8] size-3.5" />,
  pyscenedetect: <Sparkles className="text-amber-400 size-3.5" />,
  librosa: <Sparkles className="text-emerald-400 size-3.5" />,
  ffmpeg: <Sparkles className="text-teal-400 size-3.5" />,
  "socket.io": <SiSocketdotio className="text-foreground size-3.5" />,
  socketio: <SiSocketdotio className="text-foreground size-3.5" />,
  "openai api": <Bot className="text-emerald-400 size-3.5" />,
  "generative ai & llms": <Cpu className="text-cyan-400 size-3.5" />,
  "prompt engineering": <Sparkles className="text-indigo-400 size-3.5" />,
  "tokenization & embeddings": <Database className="text-amber-400 size-3.5" />,
  "ai-assisted features": <Sparkles className="text-cyan-400 size-3.5" />,
  "restful apis": <Server className="text-indigo-400 size-3.5" />,
  "rest apis": <Server className="text-indigo-400 size-3.5" />,
};

export function TechBadge({
  name,
  level,
  showIcon = true,
  className = "",
  size = "sm",
}: TechBadgeProps) {
  const normalizedKey = name.toLowerCase().trim();
  const icon = iconMap[normalizedKey] || <Code2 className="size-3.5 text-primary" />;

  const badgeVariant = level
    ? level === "Core"
      ? "core"
      : level === "Proficient"
      ? "proficient"
      : "familiar"
    : "outline";

  return (
    <Badge
      variant={badgeVariant}
      className={`inline-flex items-center gap-1.5 transition-all hover:scale-105 duration-200 cursor-default ${
        size === "md" ? "px-3 py-1 text-xs" : "px-2.5 py-0.5 text-[11px]"
      } ${className}`}
    >
      {showIcon && icon}
      <span>{name}</span>
      {level && (
        <span className="opacity-60 text-[9px] font-normal uppercase tracking-wider ml-0.5">
          • {level}
        </span>
      )}
    </Badge>
  );
}
