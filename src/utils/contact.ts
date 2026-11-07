import type { ContactChannel } from "@/types/contact";
import { site } from "@/utils/site";

export const CONTACT_MESSAGES = {
  success: "Thank you for reaching out. Your message has been delivered and I will get back to you shortly.",
  missingFields: "Please complete all required fields before sending.",
  invalidEmail: "Please provide a valid email address.",
  tooLong: "Your message exceeds the allowed length. Please shorten it and try again.",
  unavailable: "Your message could not be sent at the moment. Please try again later or reach me by email.",
} as const;

export const contactChannels: ContactChannel[] = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: `linkedin.com/in/${site.linkedin.handle}`, href: site.linkedin.url },
  { label: "GitHub", value: `github.com/${site.github.handle}`, href: site.github.url },
  { label: "X", value: `x.com/${site.x.handle}`, href: site.x.url },
];
