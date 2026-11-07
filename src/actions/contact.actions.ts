"use server";

import { sendContactEmail } from "@/lib/email";
import type { ContactState } from "@/types/contact";
import { CONTACT_MESSAGES as MESSAGES } from "@/utils/contact";

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

  if (!(await sendContactEmail(fields))) {
    return { status: "error", message: MESSAGES.unavailable, id, fields };
  }

  return { status: "success", message: MESSAGES.success, id };
}
