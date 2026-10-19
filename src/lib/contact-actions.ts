"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { redis } from "@/lib/redis";

export interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
  id: number;
  fields?: Record<"name" | "email" | "subject" | "message", string>;
}

const MESSAGES = {
  success: "Thank you for reaching out. Your message has been delivered and I will get back to you shortly.",
  missingFields: "Please complete all required fields before sending.",
  invalidEmail: "Please provide a valid email address.",
  tooLong: "Your message exceeds the allowed length. Please shorten it and try again.",
  rateLimited: "You have reached the message limit. Please try again later.",
  unavailable: "Your message could not be sent at the moment. Please try again later or reach me by email.",
} as const;

const log = (event: string, detail?: string) =>
  console.error(`[contact] ${event}${detail ? `: ${detail}` : ""}`);

const RATE_LIMIT = 3;
const RATE_WINDOW_SECONDS = 60 * 60;

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// fails open if redis is down
async function withinRateLimit(ip: string) {
  try {
    if (redis.status === "wait") await redis.connect();
    const key = `contact:rate:${ip}`;
    const count = await redis.incr(key);
    if (count === 1) await redis.expire(key, RATE_WINDOW_SECONDS);
    return count <= RATE_LIMIT;
  } catch (error) {
    log("rate limiter unavailable", error instanceof Error ? error.message : undefined);
    return true;
  }
}

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const id = Date.now();
  const field = (name: string) => String(formData.get(name) ?? "").trim();

  // honeypot filled, fake a success for the bot
  if (field("company")) {
    return { status: "success", message: MESSAGES.success, id };
  }

  const name = field("name");
  const email = field("email");
  const subject = field("subject");
  const message = field("message");
  const fields = { name, email, subject, message };

  if (!name || !email || !subject || !message) {
    return { status: "error", message: MESSAGES.missingFields, id, fields };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return { status: "error", message: MESSAGES.invalidEmail, id, fields };
  }
  if (name.length > 100 || subject.length > 200 || message.length > 5000) {
    return { status: "error", message: MESSAGES.tooLong, id, fields };
  }

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0].trim() ?? "127.0.0.1";
  if (!(await withinRateLimit(ip))) {
    return { status: "error", message: MESSAGES.rateLimited, id, fields };
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const fromAddress = process.env.CONTACT_FROM_EMAIL?.match(/<([^>]+)>/)?.[1] ?? process.env.CONTACT_FROM_EMAIL?.trim();
  if (!process.env.RESEND_API_KEY || !to || !fromAddress) {
    log("email service not configured");
    return { status: "error", message: MESSAGES.unavailable, id, fields };
  }

  const senderName = name.replace(/["<>\\\r\n]/g, "").slice(0, 60);
  const from = `"${senderName} via ${fromAddress.split("@")[1]}" <${fromAddress}>`;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}<br/><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr/>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      log("delivery failed", error.name);
      return { status: "error", message: MESSAGES.unavailable, id, fields };
    }
  } catch (error) {
    log("delivery error", error instanceof Error ? error.message : undefined);
    return { status: "error", message: MESSAGES.unavailable, id, fields };
  }

  return { status: "success", message: MESSAGES.success, id };
}
