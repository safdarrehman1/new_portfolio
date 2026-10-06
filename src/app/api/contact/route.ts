import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    // 1. Extract IP for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    // 2. Check rate limit: max 5 requests per hour per IP
    const rateLimit = checkRateLimit(ip, { limit: 5, windowMs: 60 * 60 * 1000 });
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error:
            "Too many requests. Please wait a while before sending another message or email me directly.",
        },
        { status: 429 }
      );
    }

    // 3. Parse and validate body
    const body = await req.json();
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const issues = validationResult.error.issues;
      const firstMessage = issues[0]?.message || "Invalid input data";
      return NextResponse.json({ error: firstMessage }, { status: 400 });
    }

    const data = validationResult.data;

    // 4. Honeypot check (anti-bot)
    if (data.honeypot && data.honeypot.length > 0) {
      // Return 200 to fool the bot, but do not send email
      return NextResponse.json(
        { success: true, message: "Message received" },
        { status: 200 }
      );
    }

    // 5. Send emails (notification to Safdar & auto-reply to client)
    const emailResult = await sendContactEmail({
      data,
      clientIp: ip,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        provider: emailResult.provider,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Contact API Route error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Internal server error occurred while sending email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
