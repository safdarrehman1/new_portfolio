import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { profileData } from "@/data/profile";

// In-memory rate limiting map: IP -> { count, resetTime }
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX_REQUESTS = 40; // max 40 requests
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // per 1 minute window

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Periodic cleanup
  if (rateLimitMap.size > 1000) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (now > val.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - record.count };
}

// Zod Schema for chat request payload (flexible and resilient)
const ChatRequestSchema = z.object({
  message: z.string().min(1, "Message is required"),
  history: z.any().optional().default([]),
});

export interface ChatAction {
  label: string;
  action: "scroll" | "link" | "download";
  url: string;
}

interface GroundedResponse {
  text: string;
  actions: ChatAction[];
}

/**
 * Knowledge retrieval matching against verified profileData.
 */
function generateGroundedResponse(userQuery: string): GroundedResponse {
  const q = userQuery.toLowerCase().trim();

  // 1. Projects & Specific Apps
  if (
    q.includes("project") ||
    q.includes("built") ||
    q.includes("work") ||
    q.includes("portfolio") ||
    q.includes("thinklawn") ||
    q.includes("peela") ||
    q.includes("lets play") ||
    q.includes("let's play") ||
    q.includes("chedmed") ||
    q.includes("culyte") ||
    q.includes("mirza")
  ) {
    return {
      text:
        `Safdar has developed and shipped **multiple production-grade systems**:\n\n` +
        `• **Intelligent Hiring & Skills Gap Analysis** (FYP): AI-driven candidate screening platform with dynamic assessments, radar gap charts, and real-time Socket.io chat.\n` +
        `• **ThinkLawn** (https://thinklawn.com): AI-powered lawn diagnostic platform with soil test processing, custom care plans, and recurring Stripe subscriptions.\n` +
        `• **Peela** (https://peela.net): Roadside assistance platform with live driver location tracking, automated dispatch, and fare calculation.\n` +
        `• **Let's Play** (https://joinletsplay.vercel.app - *In development*): Multi-sport venue reservation system with instant court scheduling and tournament bracket generation.\n` +
        `• **Chedmed** (https://chedmed.online): Medical supplies e-commerce platform with inventory management and secure ordering.\n` +
        `• **Culyte Official Website** (https://culyte.com): Agency portfolio with interactive service showcases.\n` +
        `• **AI Video Highlight Extractor**: Computer vision tool with OpenCV & Librosa for scene scoring.`,
      actions: [
        { label: "View Projects Grid", action: "scroll", url: "#projects" },
        { label: "GitHub Profile", action: "link", url: profileData.contact.github },
      ],
    };
  }

  // 2. Tech Stack & Skills
  if (
    q.includes("skill") ||
    q.includes("stack") ||
    q.includes("tech") ||
    q.includes("react") ||
    q.includes("next") ||
    q.includes("node") ||
    q.includes("typescript") ||
    q.includes("database") ||
    q.includes("backend") ||
    q.includes("frontend")
  ) {
    return {
      text:
        `Safdar's verified **core technical stack** includes:\n\n` +
        `• **Frontend**: React (React 19 & 18), Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, ShadCN UI, Ant Design, MUI, Zustand, React Query.\n` +
        `• **Backend & APIs**: Node.js, Express.js, REST APIs, Socket.io, Supabase, JWT Authentication.\n` +
        `• **Databases**: MySQL (Sequelize ORM), MongoDB (Mongoose), PostgreSQL (via Supabase).\n` +
        `• **AI & Vision**: Generative AI concepts, LLM prompt engineering, Python, OpenCV, Streamlit, Librosa.\n` +
        `• **DevOps**: Git/GitHub, Postman, Vercel, Firebase Hosting, Railway, Hostinger, DNS management.`,
      actions: [
        { label: "Inspect Tech Stack", action: "scroll", url: "#skills" },
        { label: "Explore Shipped Work", action: "scroll", url: "#projects" },
      ],
    };
  }

  // 3. AI Learning & Projects
  if (
    q.includes("ai") ||
    q.includes("learning") ||
    q.includes("machine learning") ||
    q.includes("llm") ||
    q.includes("prompt") ||
    q.includes("python") ||
    q.includes("opencv") ||
    q.includes("intelligent hiring")
  ) {
    return {
      text:
        `Safdar is actively learning and applying **AI Engineering** principles:\n\n` +
        `• **Intelligent Hiring & Skills Gap Analysis** (Final Year Project): Built automated resume matching against role criteria, adaptive MCQ quiz generation, and candidate skill gap radar visualizations.\n` +
        `• **AI Video Highlight Extractor**: Developed a Python & Streamlit tool that calculates optical motion vectors with OpenCV and audio frequency spikes with Librosa to isolate high-action movie scenes.\n` +
        `• **Current Focus**: Generative AI architectures, LLM prompt engineering, vector embeddings, and integrating intelligent AI workflows into full-stack web applications.`,
      actions: [
        { label: "View AI Projects", action: "scroll", url: "#projects" },
        { label: "Discuss AI Work", action: "scroll", url: "#contact" },
      ],
    };
  }

  // 4. Availability, Hiring & Freelance
  if (
    q.includes("hire") ||
    q.includes("available") ||
    q.includes("freelance") ||
    q.includes("full-time") ||
    q.includes("job") ||
    q.includes("work together") ||
    q.includes("contract") ||
    q.includes("open to work") ||
    q.includes("rate") ||
    q.includes("salary")
  ) {
    return {
      text:
        `Yes! Safdar is **actively available** for:\n\n` +
        `• **Full-time Junior Full-Stack Developer roles** (Remote or Hybrid)\n` +
        `• **Freelance & Contract Projects** (Web apps, SaaS MVPs, Admin dashboards, API backends)\n\n` +
        `**Key details**:\n` +
        `• **Location**: Peshawar, Pakistan (UTC+5, flexible overlap with US/EU/Gulf timezones)\n` +
        `• **Spoken Languages**: English (Fluent), Urdu (Fluent), Pashto (Native)\n` +
        `• **Commitment**: Clean code, daily async updates, and fast delivery from database to frontend.`,
      actions: [
        { label: "Send an Inquiry", action: "scroll", url: "#contact" },
        { label: "Download Resume", action: "download", url: profileData.contact.cvPath },
        { label: "WhatsApp Direct", action: "link", url: profileData.contact.whatsapp },
      ],
    };
  }

  // 5. Experience & Work History
  if (
    q.includes("experience") ||
    q.includes("career") ||
    q.includes("history") ||
    q.includes("company") ||
    q.includes("companies") ||
    q.includes("culyte") ||
    q.includes("ork") ||
    q.includes("tech track")
  ) {
    const expList = profileData.experience
      .map(
        (e) =>
          `• **${e.role} @ ${e.company}** (${e.period})\n  ${e.description}`
      )
      .join("\n\n");

    return {
      text: `Safdar's **professional experience** milestones:\n\n${expList}\n\nOverall, he brings 4+ years of hands-on software development experience across client and enterprise applications.`,
      actions: [
        { label: "View Experience Timeline", action: "scroll", url: "#experience" },
        { label: "Download CV (PDF)", action: "download", url: profileData.contact.cvPath },
      ],
    };
  }

  // 6. Education & Credentials
  if (
    q.includes("education") ||
    q.includes("university") ||
    q.includes("degree") ||
    q.includes("graduate") ||
    q.includes("graduation") ||
    q.includes("sarhad") ||
    q.includes("bs")
  ) {
    const edu = profileData.education[0];
    return {
      text:
        `Safdar's **academic background**:\n\n` +
        `• **Degree**: ${edu.degree}\n` +
        `• **University**: ${edu.institution}, ${edu.location}\n` +
        `• **Timeline**: ${edu.period} (Completed: **${edu.completionDate}**)\n` +
        `• **Capstone Project**: Intelligent Hiring & Skills Gap Analysis System (AI-powered hiring platform).`,
      actions: [
        { label: "View Education Section", action: "scroll", url: "#education" },
        { label: "Download Resume", action: "download", url: profileData.contact.cvPath },
      ],
    };
  }

  // 7. Contact & Socials
  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("phone") ||
    q.includes("call") ||
    q.includes("linkedin") ||
    q.includes("whatsapp") ||
    q.includes("message")
  ) {
    return {
      text:
        `You can connect with Safdar through any of these direct channels:\n\n` +
        `• **Email**: ${profileData.contact.email}\n` +
        `• **Location**: ${profileData.location}\n` +
        `• **LinkedIn**: [Safdar Rehman on LinkedIn](${profileData.contact.linkedin})\n` +
        `• **GitHub**: [github.com/safdarrehman1](${profileData.contact.github})\n` +
        `• **Typical Response Time**: Within 24 hours`,
      actions: [
        { label: "Open Contact Form", action: "scroll", url: "#contact" },
        { label: "Chat on WhatsApp", action: "link", url: profileData.contact.whatsapp },
      ],
    };
  }

  // 8. Resume / CV
  if (q.includes("cv") || q.includes("resume") || q.includes("pdf") || q.includes("download")) {
    return {
      text:
        `You can download Safdar Rehman's official **Software Engineer Resume / CV** directly below. It includes comprehensive details on his 4+ years experience, stack, and project achievements.`,
      actions: [
        { label: "Download Resume (PDF)", action: "download", url: profileData.contact.cvPath },
        { label: "View Full Profile", action: "scroll", url: "#about" },
      ],
    };
  }

  // Default Fallback
  return {
    text:
      `Hello! I am **Ask Safdar AI**, the portfolio assistant for Safdar Rehman. Safdar is a **Junior Full-Stack Developer** (React, Next.js, Node.js, Express, MySQL, Supabase) with 4+ years of hands-on experience and a focus on AI Engineering.\n\n` +
      `Here are some topics I can help you explore:\n` +
      `• **Projects**: Shipped platforms like ThinkLawn, Peela, Let's Play (*In development*), and Intelligent Hiring\n` +
      `• **Skills**: Full-stack web toolkit, databases, and AI engineering tools\n` +
      `• **Availability**: Hiring status for full-time roles, contracts, and freelance work\n` +
      `• **Background**: Education at Sarhad University (graduated Aug 2026) and work history at Culyte, ORK, and Tech Track\n` +
      `• **Contact**: Email, WhatsApp, and scheduling inquiries`,
    actions: [
      { label: "Explore Projects", action: "scroll", url: "#projects" },
      { label: "View Tech Stack", action: "scroll", url: "#skills" },
      { label: "Get In Touch", action: "scroll", url: "#contact" },
    ],
  };
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check by IP
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const { allowed, remaining } = checkRateLimit(clientIp);

    if (!allowed) {
      return NextResponse.json(
        {
          error: "Too many requests. Please wait a moment before sending another message.",
          reply: "Too many requests. Please wait a moment before sending another message.",
          actions: [],
        },
        {
          status: 429,
          headers: {
            "Retry-After": "60",
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    // 2. Safe Body Extraction
    let body: unknown = null;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body", reply: "Please provide a valid message.", actions: [] },
        { status: 400 }
      );
    }

    const parsed = ChatRequestSchema.safeParse(body);
    const userMessage = parsed.success
      ? parsed.data.message
      : typeof (body as { message?: unknown })?.message === "string"
      ? (body as { message: string }).message
      : "";

    if (!userMessage || !userMessage.trim()) {
      return NextResponse.json(
        { error: "Message is required", reply: "Please type a message to start.", actions: [] },
        { status: 400 }
      );
    }

    // 3. Ground response on verified profileData
    const grounded = generateGroundedResponse(userMessage);

    // 4. Return Server-Sent Events / Chunked Stream for token-by-token streaming
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        // Split text into tokens / words / whitespaces for natural smooth streaming
        const tokens = grounded.text.match(/(\S+|\s+)/g) || [grounded.text];

        for (let i = 0; i < tokens.length; i++) {
          const token = tokens[i];
          if (!token) continue;

          const payload = JSON.stringify({
            type: "token",
            token,
          });

          controller.enqueue(encoder.encode(`data: ${payload}\n\n`));

          // Natural typewriter delay (12-16ms per token)
          await new Promise((res) => setTimeout(res, 14));
        }

        // Send final payload with full reply & action buttons
        const donePayload = JSON.stringify({
          type: "done",
          reply: grounded.text,
          actions: grounded.actions,
          timestamp: new Date().toISOString(),
        });

        controller.enqueue(encoder.encode(`data: ${donePayload}\n\n`));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-RateLimit-Remaining": remaining.toString(),
      },
    });
  } catch (error) {
    console.error("Chat API route error:", error);
    return NextResponse.json(
      {
        reply:
          "I'm here to assist you! Feel free to ask about Safdar's engineering stack, projects, availability, or contact information.",
        actions: [
          { label: "View Projects", action: "scroll", url: "#projects" },
          { label: "Contact Safdar", action: "scroll", url: "#contact" },
        ],
      },
      { status: 200 }
    );
  }
}
