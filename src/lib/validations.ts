import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(80, { message: "Name must not exceed 80 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." })
    .max(100, { message: "Email is too long." }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters long." })
    .max(120, { message: "Subject must not exceed 120 characters." }),
  projectType: z.enum([
    "Web App",
    "Landing Page",
    "Admin Panel",
    "Mobile App",
    "Full Stack Solution",
    "Other",
  ]),
  budget: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(2000, { message: "Message cannot exceed 2000 characters." }),
  honeypot: z.string().max(0, { message: "Bot detected" }).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
