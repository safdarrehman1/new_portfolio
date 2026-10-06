import nodemailer from "nodemailer";
import { Resend } from "resend";
import { ContactFormData } from "@/types";

interface SendEmailParams {
  data: ContactFormData;
  clientIp?: string;
}

export async function sendContactEmail({ data, clientIp }: SendEmailParams) {
  const toEmail = process.env.CONTACT_TO_EMAIL || "safdar.contact@example.com";
  const resendApiKey = process.env.RESEND_API_KEY;
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  const emailSubject = `🚀 [Portfolio Inquiry] ${data.subject} - from ${data.name}`;

  const notificationHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #f3f4f6; margin: 0; padding: 24px; }
        .container { max-width: 600px; margin: 0 auto; background: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; }
        .header { background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%); padding: 32px 24px; text-align: center; }
        .header h1 { margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; }
        .header p { margin: 8px 0 0 0; color: #e0e7ff; font-size: 14px; }
        .content { padding: 28px 24px; }
        .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; background: #1e1b4b; color: #a5b4fc; border: 1px solid #3730a3; margin-bottom: 20px; }
        .field { margin-bottom: 20px; }
        .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #9ca3af; margin-bottom: 6px; font-weight: 600; }
        .value { font-size: 16px; color: #f9fafb; background: #1f2937; padding: 12px 16px; border-radius: 8px; border: 1px solid #374151; }
        .message-box { font-size: 15px; line-height: 1.6; color: #f9fafb; background: #1f2937; padding: 16px; border-radius: 8px; border: 1px solid #374151; white-space: pre-wrap; }
        .footer { border-top: 1px solid #1f2937; padding: 20px 24px; font-size: 12px; color: #6b7280; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Client Inquiry</h1>
          <p>Received via Safdar Rehman's Portfolio</p>
        </div>
        <div class="content">
          <span class="badge">Project: ${data.projectType}</span>
          
          <div class="field">
            <div class="label">Sender Name</div>
            <div class="value">${escapeHtml(data.name)}</div>
          </div>

          <div class="field">
            <div class="label">Sender Email</div>
            <div class="value"><a href="mailto:${escapeHtml(data.email)}" style="color: #38bdf8; text-decoration: none;">${escapeHtml(data.email)}</a></div>
          </div>

          <div class="field">
            <div class="label">Subject</div>
            <div class="value">${escapeHtml(data.subject)}</div>
          </div>

          ${
            data.budget
              ? `
          <div class="field">
            <div class="label">Budget Range</div>
            <div class="value">${escapeHtml(data.budget)}</div>
          </div>`
              : ""
          }

          <div class="field">
            <div class="label">Message</div>
            <div class="message-box">${escapeHtml(data.message)}</div>
          </div>

          <div class="field">
            <div class="label">Client IP Address</div>
            <div class="value" style="font-family: monospace; font-size: 13px;">${escapeHtml(clientIp || "Unknown")}</div>
          </div>
        </div>
        <div class="footer">
          Safdar Rehman Portfolio Website • Notification Service
        </div>
      </div>
    </body>
    </html>
  `;

  const autoReplyHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #f3f4f6; margin: 0; padding: 24px; }
        .container { max-width: 600px; margin: 0 auto; background: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; }
        .header { background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%); padding: 32px 24px; text-align: center; }
        .header h1 { margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; }
        .content { padding: 28px 24px; line-height: 1.6; font-size: 15px; color: #e5e7eb; }
        .quote { background: #1f2937; border-left: 4px solid #6366f1; padding: 14px 18px; margin: 20px 0; border-radius: 0 8px 8px 0; font-style: italic; color: #cbd5e1; }
        .cta { display: inline-block; background: #4f46e5; color: #ffffff !important; padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none; margin-top: 16px; }
        .footer { border-top: 1px solid #1f2937; padding: 20px 24px; font-size: 12px; color: #6b7280; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Reaching Out!</h1>
        </div>
        <div class="content">
          <p>Hi <strong>${escapeHtml(data.name)}</strong>,</p>
          <p>Thank you for getting in touch regarding your <strong>${escapeHtml(data.projectType)}</strong> project. I've received your message and will review it carefully.</p>
          
          <div class="quote">
            "${escapeHtml(data.message.slice(0, 200))}${data.message.length > 200 ? "..." : ""}"
          </div>

          <p>I usually respond within <strong>24 hours</strong>. If your request is urgent, feel free to connect with me directly on LinkedIn or WhatsApp.</p>

          <p>Best regards,<br>
          <strong>Safdar Rehman</strong><br>
          <span style="color: #9ca3af; font-size: 13px;">Software Engineer | Full Stack Developer</span></p>
        </div>
        <div class="footer">
          Safdar Rehman • Peshawar, Pakistan • <a href="https://github.com/safdarrehman1" style="color: #38bdf8; text-decoration: none;">GitHub</a> • <a href="https://linkedin.com/in/safdar-rehman-910440247" style="color: #38bdf8; text-decoration: none;">LinkedIn</a>
        </div>
      </div>
    </body>
    </html>
  `;

  // 1. Try Resend if API key is provided
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "Safdar Rehman Portfolio <onboarding@resend.dev>",
        to: [toEmail],
        replyTo: data.email,
        subject: emailSubject,
        html: notificationHtml,
      });

      // Send auto-reply to user
      try {
        await resend.emails.send({
          from: "Safdar Rehman <onboarding@resend.dev>",
          to: [data.email],
          subject: "Message Received — Safdar Rehman",
          html: autoReplyHtml,
        });
      } catch (autoErr) {
        console.warn("Auto-reply send warning (Resend):", autoErr);
      }

      return { success: true, provider: "resend" };
    } catch (resendError) {
      console.error("Resend error:", resendError);
      // Fallback to nodemailer if credentials present
    }
  }

  // 2. Try Nodemailer / Gmail SMTP
  if (gmailUser && gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      await transporter.sendMail({
        from: `"Safdar Rehman Portfolio" <${gmailUser}>`,
        to: toEmail,
        replyTo: data.email,
        subject: emailSubject,
        html: notificationHtml,
      });

      try {
        await transporter.sendMail({
          from: `"Safdar Rehman" <${gmailUser}>`,
          to: data.email,
          subject: "Message Received — Safdar Rehman",
          html: autoReplyHtml,
        });
      } catch (autoErr) {
        console.warn("Auto-reply send warning (Nodemailer):", autoErr);
      }

      return { success: true, provider: "nodemailer" };
    } catch (nodeError) {
      console.error("Nodemailer error:", nodeError);
      throw new Error("Failed to send email via SMTP");
    }
  }

  // 3. Fallback for development/demo when no credentials set
  console.log("ℹ️ [Email Simulation Mode] No RESEND_API_KEY or GMAIL credentials configured. Message logged successfully:");
  console.log("To:", toEmail);
  console.log("From:", data.name, `<${data.email}>`);
  console.log("Subject:", data.subject);
  console.log("Content:", data.message);

  return { success: true, provider: "simulation", simulated: true };
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
