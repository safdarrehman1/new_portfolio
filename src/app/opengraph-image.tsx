import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";

export const alt = "Safdar Rehman — Software Engineer & Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#070913",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.25) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.25) 0%, transparent 50%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "64px",
              width: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #6366f1, #3b82f6, #14b8a6)",
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            SR
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#ffffff", fontSize: "28px", fontWeight: "bold" }}>
              {siteConfig.name}
            </span>
            <span style={{ color: "#94a3b8", fontSize: "16px" }}>
              {siteConfig.location}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {siteConfig.title}
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "24px", margin: 0 }}>
            {siteConfig.tagline}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#38bdf8",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          <span>React.js</span>
          <span>•</span>
          <span>Next.js 16</span>
          <span>•</span>
          <span>Node.js</span>
          <span>•</span>
          <span>MySQL / MongoDB</span>
          <span>•</span>
          <span>TypeScript</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
