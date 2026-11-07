import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/ui/JsonLd";
import { site, siteKeywords } from "@/utils/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Md Arafat Rahman Sohan (ARS) | Full-Stack Software Engineer — ars2k03",
    template: "%s | Md Arafat Rahman Sohan (ARS)",
  },
  description: site.description,
  keywords: [...siteKeywords],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  applicationName: "ars2k03.tech — Md Arafat Rahman Sohan",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: "ars2k03.tech — Md Arafat Rahman Sohan (ARS)",
    title: "Md Arafat Rahman Sohan (ARS) | Full-Stack Software Engineer",
    description: site.description,
    locale: "en_US",
    firstName: "Arafat",
    lastName: "Rahman Sohan",
    username: site.username,
  },
  twitter: {
    card: "summary_large_image",
    site: `@${site.x.handle}`,
    creator: `@${site.x.handle}`,
    title: "Md Arafat Rahman Sohan (ARS) | Full-Stack Software Engineer",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.fullName,
      alternateName: [...site.alternateNames],
      url: site.url,
      image: `${site.url}/profile.jpg`,
      description: site.description,
      jobTitle: site.role,
      email: `mailto:${site.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.address.locality,
        addressCountry: site.address.country,
      },
      homeLocation: {
        "@type": "Place",
        name: "Rajshahi, Bangladesh",
      },
      nationality: { "@type": "Country", name: "Bangladesh" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Rajshahi University of Engineering & Technology (RUET)",
      },
      knowsAbout: [
        "TypeScript",
        "Next.js",
        "React",
        "NestJS",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Full-Stack Web Development",
        "AI Agents",
        "LLM Integration",
      ],
      worksFor: [
        { "@type": "Organization", name: "Chakri AI", url: "https://chakriai.com" },
        { "@type": "Organization", name: "JoldiMart", url: "https://joldimart.com" },
      ],
      sameAs: [site.github.url, site.linkedin.url, site.x.url],
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profilepage`,
      url: site.url,
      name: "Md Arafat Rahman Sohan (ARS) | Full-Stack Software Engineer",
      about: { "@id": `${site.url}/#person` },
      mainEntity: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "ars2k03.tech — Md Arafat Rahman Sohan (ARS)",
      alternateName: ["ARS", "ars2k03", "Arafat Rahman", "Arafat Rahman Sohan"],
      publisher: { "@id": `${site.url}/#person` },
      author: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
  ],
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
        <JsonLd data={personJsonLd} />
        {children}
      </body>
    </html>
  );
}
