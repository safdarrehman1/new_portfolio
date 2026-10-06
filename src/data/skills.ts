import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description:
      "Crafting pixel-perfect, lightning-fast, responsive web and mobile UIs with modern component libraries and design systems.",
    iconName: "layout",
    skills: [
      { name: "React.js", level: "Core", iconKey: "react", highlight: true },
      { name: "Next.js", level: "Core", iconKey: "nextjs", highlight: true },
      { name: "TypeScript", level: "Core", iconKey: "typescript", highlight: true },
      { name: "JavaScript (ES6+)", level: "Core", iconKey: "javascript", highlight: true },
      { name: "Tailwind CSS", level: "Core", iconKey: "tailwind", highlight: true },
      { name: "ShadCN UI", level: "Core", iconKey: "shadcn", highlight: true },
      { name: "Ant Design", level: "Proficient", iconKey: "antdesign" },
      { name: "Material UI (MUI)", level: "Proficient", iconKey: "mui" },
      { name: "React Native (Expo)", level: "Proficient", iconKey: "expo" },
      { name: "HTML5 / CSS3", level: "Core", iconKey: "html5" },
    ],
  },
  {
    title: "Backend, Databases & APIs",
    description:
      "Developing scalable server-side architectures, robust REST APIs, real-time WebSockets, and optimized data models.",
    iconName: "server",
    skills: [
      { name: "Node.js", level: "Core", iconKey: "nodejs", highlight: true },
      { name: "Express.js", level: "Core", iconKey: "express", highlight: true },
      { name: "MySQL (Sequelize)", level: "Core", iconKey: "mysql", highlight: true },
      { name: "MongoDB (Mongoose)", level: "Core", iconKey: "mongodb", highlight: true },
      { name: "Supabase", level: "Proficient", iconKey: "supabase", highlight: true },
      { name: "REST APIs", level: "Core", iconKey: "api", highlight: true },
      { name: "Socket.io", level: "Proficient", iconKey: "socketio" },
    ],
  },
  {
    title: "State & Data Fetching",
    description:
      "Managing complex global client state, server cache synchronization, and optimistic UI mutations.",
    iconName: "database",
    skills: [
      { name: "Zustand", level: "Core", iconKey: "zustand", highlight: true },
      { name: "React Query", level: "Core", iconKey: "reactquery", highlight: true },
      { name: "Redux Toolkit", level: "Proficient", iconKey: "redux" },
      { name: "Context API", level: "Core", iconKey: "contextapi" },
    ],
  },
  {
    title: "AI Engineering & Python (Learning)",
    description:
      "Exploring LLM fundamentals, prompt engineering, and building Python-assisted tools for next-gen intelligent web apps.",
    iconName: "brain",
    skills: [
      { name: "Generative AI & LLMs", level: "Proficient", iconKey: "ai", highlight: true },
      { name: "Prompt Engineering", level: "Proficient", iconKey: "prompt", highlight: true },
      { name: "Python (learning)", level: "Familiar", iconKey: "python" },
      { name: "Tokenization & Embeddings", level: "Familiar", iconKey: "tokenization" },
      { name: "AI-Assisted Features", level: "Proficient", iconKey: "aifeatures" },
      { name: "OpenCV & Streamlit", level: "Familiar", iconKey: "streamlit" },
    ],
  },
  {
    title: "Tools, Hosting & Deployment",
    description:
      "Modern development workflows, version control, API testing, continuous deployment, and DNS server management.",
    iconName: "wrench",
    skills: [
      { name: "Git & GitHub", level: "Core", iconKey: "git", highlight: true },
      { name: "Postman", level: "Core", iconKey: "postman", highlight: true },
      { name: "Vercel", level: "Core", iconKey: "vercel", highlight: true },
      { name: "Firebase Hosting", level: "Proficient", iconKey: "firebase" },
      { name: "Railway", level: "Proficient", iconKey: "railway" },
      { name: "Hostinger", level: "Proficient", iconKey: "hostinger" },
      { name: "DNS & Server Migration", level: "Proficient", iconKey: "dns" },
    ],
  },
];

export const marqueeSkills = [
  { name: "React.js", icon: "SiReact", color: "#61DAFB" },
  { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
  { name: "Supabase", icon: "SiSupabase", color: "#3ECF8E" },
  { name: "MySQL (Sequelize)", icon: "SiMysql", color: "#4479A1" },
  { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
  { name: "Express.js", icon: "SiExpress", color: "#ffffff" },
  { name: "ShadCN UI", icon: "SiShadcnui", color: "#ffffff" },
  { name: "Socket.io", icon: "SiSocketdotio", color: "#ffffff" },
  { name: "React Native", icon: "SiExpo", color: "#ffffff" },
  { name: "Python", icon: "SiPython", color: "#3776AB" },
  { name: "Git & GitHub", icon: "SiGit", color: "#F05032" },
  { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
  { name: "Vercel", icon: "SiVercel", color: "#ffffff" },
  { name: "Zustand", icon: "SiRedux", color: "#764ABC" },
  { name: "React Query", icon: "SiReactquery", color: "#FF4154" },
];
