import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/utils/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles by Arafat Rahman on backend engineering, TypeScript, Next.js and building production software.",
};

interface Post {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  href: string;
}

// Newest first. Add posts here as they are published.
const posts: Post[] = [];

const upcomingTopics = [
  "Structuring a NestJS backend with Prisma and PostgreSQL",
  "Verifying Facebook access tokens safely in Node.js",
  "Caching API responses with Redis in Next.js",
];

export default function BlogPage() {
  return (
    <section className="w-full flex-1 bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">

        {/* Lead Headline Banner */}
        <div className="border-b-2 border-[#1a1a1a] pb-8 mb-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif text-[#1a1a1a] tracking-tight leading-[1.08] mb-4">
              Writing &amp; Notes
            </h1>

            <p className="text-base sm:text-xl text-[#4a4336] font-serif italic leading-relaxed">
              Practical write-ups on backend engineering, TypeScript and shipping production software.
            </p>
          </div>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="p-5 sm:p-6 bg-[#f4efe2] border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[5px_5px_0px_#7a2020] hover:-translate-y-0.5 transition-all duration-150 flex flex-col gap-3 group"
              >
                <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#696050]">
                  {post.date} · {post.readTime}
                </div>
                <h2 className="text-xl sm:text-2xl font-black font-serif text-[#1a1a1a] tracking-tight group-hover:text-[#7a2020] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[#4a4336] leading-relaxed">{post.excerpt}</p>
                <ul className="flex flex-wrap gap-2 mt-auto pt-1">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7a2020] bg-[#fbf8f1] px-2 py-0.5 border border-[#1a1a1a]/20"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl p-6 sm:p-8 bg-[#f4efe2] border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#1a1a1a] tracking-tight">
              First articles coming soon
            </h2>
            <p className="text-base text-[#2e2a22] leading-relaxed">
              I&apos;m writing up lessons from the projects I&apos;ve built. Upcoming topics include:
            </p>
            <ul className="space-y-1.5 text-base text-[#4a4336] leading-relaxed">
              {upcomingTopics.map((topic) => (
                <li key={topic} className="flex gap-2">
                  <span className="text-[#7a2020] shrink-0">▸</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={site.github.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#7a2020]"
              >
                <span>Follow on GitHub</span>
                <span aria-hidden="true">&#8599;&#xFE0E;</span>
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#fbf8f1] text-[#1a1a1a] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#ede3ce] hover:text-[#7a2020] transition-colors border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
              >
                <span>See Projects</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
