import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
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
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#fbf8f1] text-[#1a1a1a] selection:bg-[#7a2020] selection:text-[#fbf8f1]">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
