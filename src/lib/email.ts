import "server-only";
import { Resend } from "resend";
import type { ContactMessage } from "@/types/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const log = (event: string, detail?: string) =>
  console.error(`[contact] ${event}${detail ? `: ${detail}` : ""}`);

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendContactEmail({ name, email, subject, message }: ContactMessage): Promise<boolean> {
  const to = process.env.CONTACT_TO_EMAIL;
  const fromAddress = process.env.CONTACT_FROM_EMAIL?.match(/<([^>]+)>/)?.[1] ?? process.env.CONTACT_FROM_EMAIL?.trim();
  if (!process.env.RESEND_API_KEY || !to || !fromAddress) {
    log("email service not configured");
    return false;
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
      return false;
    }
  } catch (error) {
    log("delivery error", error instanceof Error ? error.message : undefined);
    return false;
  }

  return true;
}
