import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skills & Tech Stack | The Chronicle",
  description: "Comprehensive inventory of programming languages, backend architectures, mobile frameworks, and data systems.",
};

interface TechItem {
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  level?: string;
}

interface TechCategory {
  title: string;
  badge: string;
  icon: string;
  summary: string;
  items: TechItem[];
}

export default function SkillsPage() {
  const categories: TechCategory[] = [
    {
      title: "Core Languages",
      badge: "SYNTAX & FOUNDATION",
      icon: "💻",
      summary: "Primary programming dialects utilized to formulate reliable, type-safe, and performant logic across the stack.",
      items: [
        {
          name: "TypeScript",
          category: "Static Typing",
          description: "Strict typing, complex generics, interfaces, and end-to-end contract safety across client & server.",
          icon: (
            <svg viewBox="0 0 128 128" className="w-8 h-8 shrink-0">
              <rect width="128" height="128" rx="16" fill="#3178c6" />
              <path
                d="M72.15 89.2c.4 1.7 1.25 3.3 2.5 4.6 1.3 1.3 2.9 2.3 4.8 3 1.9.7 4 .9 6.3.9 3.3 0 6.2-.5 8.7-1.5 2.5-1 4.5-2.4 6-4.2s2.3-3.9 2.3-6.4c0-2-.4-3.7-1.3-5.2-.9-1.5-2.1-2.8-3.7-3.9s-3.5-2.1-5.7-3-4.6-1.8-7.3-2.6c-2.3-.7-4.4-1.4-6.3-2.2s-3.5-1.7-4.8-2.8c-1.3-1.1-2.3-2.4-3-3.9-.7-1.5-1.1-3.3-1.1-5.4 0-2.6.7-5 2-7.1s3.1-3.8 5.4-5.1c2.3-1.3 5.1-2.3 8.3-2.9 3.2-.6 6.7-.9 10.4-.9 4.3 0 8.3.4 12 1.3s6.9 2.2 9.6 4.1l-6 12.5c-2.5-1.6-5.3-2.8-8.3-3.6s-6.1-1.2-9.3-1.2c-2.9 0-5.4.3-7.5.9s-3.8 1.5-5 2.7-1.8 2.7-1.8 4.6c0 1.7.5 3.2 1.4 4.5s2.2 2.4 3.9 3.3c1.7.9 3.7 1.8 6 2.5 2.3.8 4.8 1.6 7.4 2.4 2.8.9 5.4 1.9 7.8 3.1 2.4 1.2 4.4 2.6 6 4.3 1.6 1.7 2.8 3.7 3.5 6s1.1 5.1 1.1 8.2c0 3.7-.8 7-2.3 9.9-1.5 2.9-3.7 5.3-6.4 7.2s-6 3.2-9.8 4c-3.8.8-8 .12-12.6.12-4.8 0-9.3-.5-13.6-1.6-4.3-1.1-8-2.7-11.2-4.8l6.8-13.3zM45 42.1h18.2v59.1H45V42.1zM26.8 42.1v12.2h18.2V42.1H26.8zM63.2 42.1v12.2h18.2V42.1H63.2z"
                fill="#fff"
              />
            </svg>
          ),
        },
        {
          name: "JavaScript",
          category: "Modern ECMAScript",
          description: "ES6+, asynchronous event loops, closures, promises, prototype inheritance, and DOM manipulation.",
          icon: (
            <svg viewBox="0 0 128 128" className="w-8 h-8 shrink-0">
              <rect width="128" height="128" rx="16" fill="#f7df1e" />
              <path
                d="M67.3 95.8c2.1 3.5 5 6.2 9.2 8.1 4.2 1.9 8.8 2.8 14 2.8 3.8 0 7.2-.6 10-1.7s5.1-2.8 6.8-4.9c1.7-2.2 2.6-4.8 2.6-7.8 0-3-.8-5.5-2.5-7.5s-3.9-3.6-6.6-4.9c-2.7-1.3-5.9-2.5-9.6-3.6-4.5-1.3-8.5-2.7-12-4.2s-6.3-3.4-8.5-5.7c-2.2-2.3-3.3-5.4-3.3-9.3 0-4.3 1.3-8 3.9-11.2 2.6-3.2 6.2-5.7 10.8-7.5s9.9-2.7 15.9-2.7c6.3 0 12 1.2 17.1 3.5 5.1 2.4 8.9 5.8 11.5 10.3l-12.7 8.1c-1.7-2.8-3.9-4.9-6.7-6.3-2.8-1.4-6-2.1-9.6-2.1-3.6 0-6.7.7-9.1 2s-3.7 3.2-3.7 5.7c0 2.2.8 4.1 2.3 5.6 1.6 1.5 3.6 2.7 6.2 3.7 2.6 1 5.7 2.1 9.3 3.3 4.9 1.5 9.2 3.1 12.9 4.8 3.7 1.7 6.6 4 8.7 6.8 2.1 2.8 3.1 6.4 3.1 10.8 0 4.8-1.3 9-4 12.6-2.7 3.6-6.5 6.5-11.4 8.6-4.9 2.1-10.7 3.2-17.4 3.2-8.3 0-15.4-1.7-21.3-5-5.9-3.3-10-8.2-12.3-14.7l13.5-7.7zM19.7 75.3l13.6-8.2c1.7 3.1 3.7 5.3 6.1 6.8 2.4 1.4 5.3 2.1 8.8 2.1 2.9 0 5.2-.5 6.9-1.5 1.7-1 2.8-2.3 3.4-4 .6-1.7.9-5.1.9-10.3V21h15.2v49.8c0 7.8-.8 13.6-2.4 17.5s-4.3 6.9-8.1 9c-3.8 2.1-8.9 3.1-15.3 3.1-6.7 0-12.5-1.5-17.5-4.6s-8.7-7.7-11.6-13.8l-.02-6.7z"
                fill="#000"
              />
            </svg>
          ),
        },
        {
          name: "Dart",
          category: "Object-Oriented UI",
          description: "Sound null safety, asynchronous streams, isolates, and native multi-platform compilation.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
              <path fill="#0081C6" d="M4.11 3.47A2.3 2.3 0 0 0 2.5 5.6v12.8a2.3 2.3 0 0 0 1.61 2.13L15.6 22V2z" />
              <path fill="#00B4AB" d="M15.6 2h4.29a2.3 2.3 0 0 1 2.11 1.47l-6.4 6.4z" />
              <path fill="#005B9E" d="M15.6 22h4.29a2.3 2.3 0 0 0 2.11-1.47l-6.4-6.4z" />
              <path fill="#52C4F8" d="M22 3.47L15.6 9.87l-6.4-6.4L15.6 2h4.29A2.3 2.3 0 0 1 22 3.47z" />
              <path fill="#00C4B4" d="M22 20.53L15.6 14.13l-6.4 6.4L15.6 22h4.29A2.3 2.3 0 0 0 22 20.53z" />
              <path fill="#0175C2" d="M9.2 3.47l6.4 6.4v4.26l-6.4 6.4H4.11A2.3 2.3 0 0 1 2.5 18.4V5.6a2.3 2.3 0 0 1 1.61-2.13z" />
            </svg>
          ),
        },
        {
          name: "SQL",
          category: "Relational Queries",
          description: "Declarative query formulation, joins, indexing strategies, CTEs, transactions, and performance tuning.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="none">
              <rect width="24" height="24" rx="4" fill="#00758F" />
              <ellipse cx="12" cy="7" rx="7" ry="3" stroke="#fff" strokeWidth="1.5" />
              <path d="M5 7v5c0 1.66 3.13 3 7 3s7-1.34 7-3V7" stroke="#fff" strokeWidth="1.5" />
              <path d="M5 12v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" stroke="#fff" strokeWidth="1.5" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Backend Engines",
      badge: "SERVER-SIDE & APIS",
      icon: "⚙️",
      summary: "Scalable runtime environments, modular architectures, and high-concurrency request dispatch systems.",
      items: [
        {
          name: "Node.js",
          category: "JavaScript Runtime",
          description: "High-throughput asynchronous event-driven server runtime, cluster scaling, and stream pipelines.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
              <path
                d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.3l7 4.1 7-4.1V8.3l-7-4z"
                fill="#539E43"
              />
              <path
                d="M12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"
                fill="#539E43"
              />
            </svg>
          ),
        },
        {
          name: "Express.js",
          category: "Microservice REST",
          description: "Lightweight routing, custom middleware composition, JWT authentication, and RESTful endpoint design.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="none">
              <rect width="24" height="24" rx="4" fill="#1a1a1a" />
              <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fontFamily="monospace" fill="#fbf8f1">
                ex
              </text>
            </svg>
          ),
        },
        {
          name: "NestJS",
          category: "Enterprise Framework",
          description: "Modular architecture, dependency injection, TypeScript decorators, Microservices, and OpenAPI docs.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
              <path
                d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm7.6 13.5l-7.6 4.2-7.6-4.2v-7l7.6-4.2 7.6 4.2v7z"
                fill="#E0234E"
              />
              <path
                d="M12 6.8L6.8 9.7v4.6l5.2 2.9 5.2-2.9V9.7L12 6.8z"
                fill="#E0234E"
                opacity="0.8"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Frontend & Mobile",
      badge: "USER INTERFACES",
      icon: "📱",
      summary: "Crafting reactive, responsive, and cross-platform user journeys with uncompromising visual fidelity.",
      items: [
        {
          name: "Next.js",
          category: "React Framework",
          description: "App Router, Server-Side Rendering (SSR), Server Components (RSC), SEO optimization, and Edge caching.",
          icon: (
            <svg viewBox="0 0 128 128" className="w-8 h-8 shrink-0">
              <circle cx="64" cy="64" r="64" fill="#000" />
              <path
                d="M104.7 101.4L48.2 29H37.8v70h12.5V47.3l50 64.6c1.5-3.3 2.9-6.8 4.4-10.5zM78.6 49.3h12.5v49.7H78.6z"
                fill="#fff"
              />
            </svg>
          ),
        },
        {
          name: "Flutter",
          category: "Cross-Platform Mobile",
          description: "Custom widget sculpting, state management (Bloc/Riverpod), responsive layouts, and 60fps mobile execution.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
              <path fill="#02569B" d="M14.31 1.5L4.85 11l2.83 2.83L19.97 1.5h-5.66z" />
              <path fill="#0175C2" d="M14.31 11.5L9.65 16.16l2.83 2.83 4.66-4.66h5.66L14.31 11.5z" />
              <path fill="#29B6F6" d="M14.31 11.5l2.83-2.83 5.66 5.66h-5.66l-2.83-2.83z" />
              <path fill="#01579B" d="M12.48 18.99l2.83 2.83h5.66l-5.66-5.66-2.83 2.83z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Databases & In-Memory Stores",
      badge: "DATA PERSISTENCE",
      icon: "🗄️",
      summary: "Mission-critical relational schemas, flexible document datastores, and sub-millisecond caching layers.",
      items: [
        {
          name: "PostgreSQL",
          category: "Relational ACID DB",
          description: "Relational normalization, JSONB indexing, foreign keys, triggers, materialized views, and transactions.",
          icon: (
            <svg viewBox="0 0 128 128" className="w-8 h-8 shrink-0">
              <path
                d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4zm28.6 69.2c-1.3 7-5.5 13-11.8 17-5.4 3.4-11.9 5.2-18.3 5-10.4-.3-19.8-5.6-25-14.1-2.9-4.7-4.4-10.2-4.4-15.8 0-8.2 3.2-16.1 8.9-21.9 6.2-6.3 14.7-9.8 23.6-9.8 7.3 0 14.4 2.4 20.2 6.9 4.3 3.3 7.6 7.8 9.5 12.9l-10.2 3.8c-1.2-3.1-3.2-5.7-5.9-7.6-4-2.8-8.8-4.2-13.6-4.2-6.2 0-12 2.3-16.4 6.7-4 4-6.3 9.4-6.3 15.1 0 4 1.1 7.9 3.2 11.2 3.6 5.9 10.1 9.6 17.2 9.8 4.4.1 8.9-1.1 12.6-3.4 3.7-2.3 6.3-5.7 7.3-9.8l9.4 3.2z"
                fill="#336791"
              />
            </svg>
          ),
        },
        {
          name: "MongoDB",
          category: "NoSQL Document Store",
          description: "Schema-less document models, aggregation pipelines, replica sets, geo-spatial queries, and sharding.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
              <path
                d="M12 1.5C11.5 2 7 8.5 7 14c0 3.5 2.2 6.5 5 7.5 2.8-1 5-4 5-7.5 0-5.5-4.5-12-5-12.5zm0 17.5c-1.7-.8-3-2.7-3-5 0-3.3 2.5-7.8 3-8.8.5 1 3 5.5 3 8.8 0 2.3-1.3 4.2-3 5z"
                fill="#47A248"
              />
              <path d="M12 2v19.5c.3 0 .7-.1 1-.2V2.2c-.3-.1-.7-.2-1-.2z" fill="#3FA037" />
            </svg>
          ),
        },
        {
          name: "Redis",
          category: "In-Memory Cache",
          description: "Sub-millisecond latency key-value caching, Pub/Sub channels, session stores, rate limiting, and queues.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
              <path
                d="M21.5 8.2l-9.1-4.7a1 1 0 0 0-.8 0L2.5 8.2a1 1 0 0 0 0 1.8l9.1 4.7a1 1 0 0 0 .8 0l9.1-4.7a1 1 0 0 0 0-1.8z"
                fill="#DC382D"
              />
              <path
                d="M2.5 14l9.1 4.7a1 1 0 0 0 .8 0l9.1-4.7a1 1 0 0 0 0-1.8l-1.6-.8-7.9 4.1-7.9-4.1-1.6.8a1 1 0 0 0 0 1.8z"
                fill="#B82721"
              />
              <path
                d="M2.5 18.5l9.1 4.7a1 1 0 0 0 .8 0l9.1-4.7a1 1 0 0 0 0-1.8l-1.6-.8-7.9 4.1-7.9-4.1-1.6.8a1 1 0 0 0 0 1.8z"
                fill="#8C1C17"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Data Modeling & ORM",
      badge: "SCHEMA ABSTRACTION",
      icon: "🔗",
      summary: "Bridging application-level domain entities with relational tables via type-safe migrations and client generators.",
      items: [
        {
          name: "Prisma ORM",
          category: "Next-Gen TypeScript ORM",
          description: "Declarative schema definition, automated SQL migrations, auto-generated type-safe queries, and relation joins.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
              <path
                d="M12.6 1.8c-.4-.5-1-.8-1.7-.8s-1.3.3-1.7.8L1.6 14.7c-.5.8-.6 1.7-.2 2.5.4.8 1.1 1.3 2 1.3h3.5l1.8 4.2c.4.9 1.3 1.5 2.3 1.5s1.9-.6 2.3-1.5l8.9-20.9-9.6.0zM4 16.5l6.4-10.7 4.5 10.7H4zm8 4.2l-2-4.7h4l-2 4.7z"
                fill="#2D3748"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "DevOps, CI/CD & Delivery",
      badge: "INFRASTRUCTURE & OPS",
      icon: "🚀",
      summary: "Automated test suites, containerization, reproducible builds, and seamless production deployments.",
      items: [
        {
          name: "Docker",
          category: "Containerization",
          description: "Container packaging, multi-stage Dockerfiles, image minimization, and local dev parity with Docker Compose.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
              <path
                d="M13 8.5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6 6h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3-3h2v2H4zm0 3h2v2H4zm17.5 1.7c-.5-.4-1.4-.5-2.2-.2-.2-.9-.8-1.6-1.6-2.1l-.8-.4-.5.8c-.6 1.1-.4 2.4.4 3.3-1.1.7-2.6.9-4.8.9H2.5c-.3 1.2.1 2.5 1.1 3.5 1.7 1.7 4.6 2.4 8.4 2.4 7.6 0 11.2-3.8 11.8-8.7.1-.6-.2-1.1-.3-1.5z"
                fill="#2496ED"
              />
            </svg>
          ),
        },
        {
          name: "GitHub Actions",
          category: "Automated CI/CD",
          description: "Declarative YAML workflows, automated static analysis & testing pipelines, artifact build verification, and deployment webhooks.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
              <path
                fill="#2088FF"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
              />
            </svg>
          ),
        },
        {
          name: "Git & Version Control",
          category: "Source Management",
          description: "Feature branching, atomic commits, interactive rebasing, merge conflict resolution, and pull request audits.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
              <path
                d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3-.1 1.8.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.6-1.3-.4-1.8L12.4 11v5.1c.2.1.4.3.5.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.2-.2.4-.4.6-.5V11c-.2-.1-.4-.3-.6-.5-.5-.5-.6-1.3-.4-1.8L6.8 6 2.4 10.4c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.7-.6.7-1.5.1-2.1z"
                fill="#F05032"
              />
            </svg>
          ),
        },
        {
          name: "Linux & Bash",
          category: "Server Environment",
          description: "Ubuntu/Debian server provisioning, systemd services, SSH key governance, process monitoring, and shell scripting.",
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="none">
              <rect width="24" height="24" rx="4" fill="#E95420" />
              <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="900" fontFamily="monospace" fill="#fff">
                $_
              </text>
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section className="w-full flex-1 bg-[#fbf8f1] text-[#1a1a1a] font-serif pt-4 sm:pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 w-full">
        
        {/* Top Folio Rule Header */}
        <div className="relative border-y-2 border-[#1a1a1a] py-2 mb-8">
          <div className="absolute inset-x-0 top-[2px] border-t border-[#1a1a1a]/20"></div>
          <div className="absolute inset-x-0 bottom-[2px] border-b border-[#1a1a1a]/20"></div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-wider font-sans text-[#4a4336] px-1">
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-[#1a1a1a]">
              <span>SECTION IV · TECHNICAL REPERTORY</span>
              <span className="text-[#1a1a1a]/30">•</span>
              <span>SPECIAL BROADSHEET</span>
            </div>

            <div className="hidden md:block italic font-serif text-[#5c5446] normal-case text-xs sm:text-sm">
              &ldquo;Battle-tested tools, language runtimes, and distributed architectures&rdquo;
            </div>

            <div className="font-mono text-[11px] font-bold text-[#7a2020] bg-[#ede7d8] px-2 py-0.5 border border-[#1a1a1a]/20">
              AUDITED TECH STACK · 2026
            </div>
          </div>
        </div>

        {/* Lead Headline Banner */}
        <div className="border-b-2 border-[#1a1a1a] pb-8 mb-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] font-bold text-[#7a2020] bg-[#ede7d8] px-2.5 py-1 border border-[#1a1a1a]/25">
                ★ TECHNICAL COMPETENCIES &amp; ENGINES
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif text-[#1a1a1a] tracking-tight leading-[1.08] mb-4">
              ENGINEERING STACK &amp; PRODUCTION APPARATUS
            </h1>

            <p className="text-base sm:text-xl text-[#4a4336] font-serif italic leading-relaxed">
              A curated ledger of programming languages, server frameworks, user interface paradigms, persistent datastores, and automated deployment pipelines utilized in active software construction.
            </p>
          </div>
        </div>

        {/* Categories Stack Grid */}
        <div className="space-y-12">
          {categories.map((cat, idx) => (
            <div key={cat.title} className="space-y-4">
              
              {/* Category Header Rule */}
              <div className="border-b border-[#1a1a1a]/40 pb-2 flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl sm:text-2xl">{cat.icon}</span>
                  <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#1a1a1a] tracking-tight">
                    {cat.title}
                  </h2>
                </div>
                
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#7a2020] bg-[#ede7d8] px-2 py-0.5 border border-[#1a1a1a]/20">
                  {cat.badge}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5c5446] italic font-serif max-w-2xl">
                {cat.summary}
              </p>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-1">
                {cat.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-4 bg-[#f4efe2] border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[5px_5px_0px_#7a2020] hover:-translate-y-0.5 transition-all duration-150 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Top: Logo & Category Tag */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="p-2 bg-[#fbf8f1] border border-[#1a1a1a]/30 rounded-xs shadow-xs group-hover:scale-105 transition-transform">
                          {tech.icon}
                        </div>

                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7a2020] bg-[#fbf8f1] px-2 py-0.5 border border-[#1a1a1a]/20 truncate">
                          {tech.category}
                        </span>
                      </div>

                      {/* Card Name */}
                      <h3 className="text-lg font-black font-serif text-[#1a1a1a] tracking-tight group-hover:text-[#7a2020] transition-colors mb-1.5">
                        {tech.name}
                      </h3>

                      {/* Card Description */}
                      <p className="text-xs text-[#4a4336] leading-relaxed">
                        {tech.description}
                      </p>
                    </div>

                    {/* Card Footer Badge */}
                    <div className="mt-3.5 pt-2 border-t border-[#1a1a1a]/15 flex items-center justify-between text-[10px] font-mono text-[#696050]">
                      <span>VERIFIED ASSET</span>
                      <span className="text-emerald-700 font-bold">● ACTIVE</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Call to Action Footer Rule */}
        <div className="mt-16 pt-8 border-t-2 border-[#1a1a1a] flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-[#1a1a1a]">
              Looking to deploy these technologies into your stack?
            </h3>
            <p className="text-sm text-[#5c5446] italic font-serif">
              Available for full-time software engineering roles and targeted technical consulting.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-[#fbf8f1] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#7a2020] transition-colors border border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
            >
              <span>Explore Projects</span>
              <span>→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f4efe2] text-[#1a1a1a] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#ede3ce] hover:text-[#7a2020] transition-colors border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#7a2020]"
            >
              <span>Initiate Contact</span>
              <span>✉</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
