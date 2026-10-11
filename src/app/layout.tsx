import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Chronicle | Editorial & Newspaper Portfolio",
  description: "A clean broadsheet and editorial style portfolio dispatch.",
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
