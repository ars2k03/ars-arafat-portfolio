import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "A R S | Full-Stack Software Engineer",
    template: "%s | A R S",
  },
  description: "Portfolio of A R S, a full-stack software engineer building web and mobile applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#fbf8f1] text-[#1a1a1a] selection:bg-[#7a2020] selection:text-[#fbf8f1]">
        {children}
      </body>
    </html>
  );
}
