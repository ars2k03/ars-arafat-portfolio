<p align="center">
  <a href="https://ars2k03.tech">
    <img src="public/logo.svg" width="120" height="120" alt="A R S logo" />
  </a>
</p>

<h1 align="center">A R S</h1>

<p align="center"><strong>Portfolio of Md Arafat Rahman Sohan, full-stack software engineer</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-7-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 7" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

<p align="center">
  <a href="https://ars2k03.tech"><strong>Live site</strong></a> ·
  <a href="public/resume.pdf"><strong>Resume</strong></a> ·
  <a href="https://github.com/ars2k03"><strong>GitHub</strong></a> ·
  <a href="https://www.linkedin.com/in/ars2k05"><strong>LinkedIn</strong></a>
</p>

[ars2k03.tech](https://ars2k03.tech) is the single-page portfolio of **Md Arafat Rahman Sohan** (ARS / ars2k03), a full-stack software engineer from Rajshahi, Bangladesh, and founding engineer at Chakri AI and JoldiMart.

---

## Sections

| Section | Link | Content |
|---|---|---|
| **Home** | [`/`](https://ars2k03.tech) | Introduction, profile photo and social links |
| **Projects** | [`/#projects`](https://ars2k03.tech/#projects) | Selected work with screenshots, stack and live links |
| **Experience** | [`/#experience`](https://ars2k03.tech/#experience) | Work experience timeline |
| **Skills** | [`/#skills`](https://ars2k03.tech/#skills) | Technologies grouped by category |
| **Contact** | [`/#contact`](https://ars2k03.tech/#contact) | Contact channels and message form |

## Features

- **Single-page layout**: sticky navbar with smooth scrolling and active section tracking
- **Server-first rendering**: Server Components by default, with client code only for interactive parts
- **Contact form**: Server Action with validation and a honeypot field, delivered through Resend
- **SEO**: metadata, JSON-LD, sitemap, robots rules, Open Graph image and `llms.txt`
- **Security headers**: set for every route in [`next.config.ts`](next.config.ts)
- **Resume**: [`public/resume.pdf`](public/resume.pdf), built from LaTeX source in [`resume/`](resume)

## Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript 7 |
| Styling | Tailwind CSS 4, Playfair Display via `next/font` |
| Email | Resend |
| Linting | oxlint |
| Resume | LaTeX (`pdflatex`) |

## Getting Started

### Prerequisites

- Node.js 20 or newer
- A [Resend](https://resend.com) API key, to send contact messages

### Setup

```bash
git clone https://github.com/ars2k03/ars-arafat-portfolio.git
cd ars-arafat-portfolio
npm install
cp .env.example .env
```

### Environment Variables

| Variable | Used for | If missing |
|---|---|---|
| `RESEND_API_KEY` | Sending contact emails | Contact form shows an error |
| `CONTACT_FROM_EMAIL` | Sender address (must be a verified Resend domain) | Contact form shows an error |
| `CONTACT_TO_EMAIL` | Where contact messages are delivered | Contact form shows an error |

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run oxlint |

## Editing the Resume

The resume source is [`resume/resume.tex`](resume/resume.tex). Building it requires `pdflatex` (TeX Live).

```bash
pdflatex -output-directory=resume resume/resume.tex
cp resume/resume.pdf public/resume.pdf
```

## Project Structure

```
src/
├── actions/             # Server Actions
├── app/
│   └── (homepage)/      # Single-page home route
├── components/
│   ├── homepage/        # Navbar and page sections
│   └── ui/              # Shared UI
├── lib/                 # Server-only email sending
├── types/               # Shared types
└── utils/               # Site info, navigation, fonts, page content
public/                  # Logo, profile photo, screenshots, skill logos, resume
resume/                  # LaTeX resume source
```

## Author

**Md Arafat Rahman Sohan** · [ars2k03.tech](https://ars2k03.tech) · [GitHub](https://github.com/ars2k03) · [LinkedIn](https://www.linkedin.com/in/ars2k05) · [X](https://x.com/ars_2k03)

## License

[MIT](LICENSE) © 2026 A R S Arafat
