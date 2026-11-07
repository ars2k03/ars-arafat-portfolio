export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
  id: number;
  fields?: ContactMessage;
}

export interface ContactChannel {
  label: "Email" | "LinkedIn" | "GitHub" | "X";
  value: string;
  href: string;
}
