import { Education } from "@/types";

export const educationData: Education[] = [
  {
    id: "suit-peshawar",
    institution: "Sarhad University of Science and Information Technology",
    degree: "B.S. Computer Software Engineering (BS SE)",
    period: "2022 — 2026",
    location: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
    completionDate: "Completed 28 August 2026",
    description:
      "Comprehensive four-year computer software engineering program focusing on modern software architecture, database management systems, algorithms, distributed systems, and AI engineering integration.",
    highlights: [
      "Graduated with strong foundation in full-stack web architectures, software design patterns, and database engineering.",
      "Lead developer for Final Year Project (FYP): Intelligent Hiring & Skills Gap Analysis.",
      "Built production-ready projects in React, Next.js, Node.js, Express, MySQL, MongoDB, and Supabase during studies.",
      "Active contributor to open-source software, hackathons, and software engineering team leadership.",
    ],
    fypTitle: "Intelligent Hiring & Skills Gap Analysis",
    fypDescription:
      "An AI-powered hiring platform with automated resume screening, semantic skill-gap analysis, auto-generated candidate assessments, real-time chat via Socket.io, and role-based onboarding for companies, employees, and freelancers.",
    languages: [
      { name: "English", proficiency: "Fluent" },
      { name: "Urdu", proficiency: "Fluent" },
      { name: "Pashto", proficiency: "Native" },
    ],
    certifications: [
      {
        title: "Generative AI & LLM Fundamentals",
        issuer: "AI Engineering Practice",
        date: "2024 — Present",
      },
      {
        title: "Full-Stack Web Development with React & Node.js",
        issuer: "Industry Engineering Projects",
        date: "2023 — 2024",
      },
      {
        title: "Next.js & Modern Frontend Architecture",
        issuer: "Production Deployments (Vercel)",
        date: "2024",
      },
      {
        title: "Relational Database Design & MySQL Optimization",
        issuer: "Sequelize ORM & SQL Systems",
        date: "2024",
      },
    ],
  },
];
