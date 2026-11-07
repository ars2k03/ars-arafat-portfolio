# A R S — Portfolio of Md Arafat Rahman Sohan (ars2k03)

Personal portfolio of **Md Arafat Rahman Sohan** — known as **ARS** / **ars2k03** ([ars2k03.tech](https://ars2k03.tech)), a full-stack software engineer from Rajshahi, Bangladesh. Founding engineer at Chakri AI and JoldiMart and BSc CSE student at RUET. The site is designed like a vintage newspaper: each visitor gets their own "volume" number, a live ticker shows local weather, and pages flip like a broadsheet when you scroll past the edge.

## Pages

| Route | Content |
|---|---|
| `/` | Front page: introduction, profile, and highlights |

## Features

- **Contact form**: a Server Action with validation and a honeypot field
- **Page flip navigation**: scroll or swipe past the top or bottom edge to move to the next or previous page
- **Resume**: [`public/resume.pdf`](public/resume.pdf), built from LaTeX source in [`resume/`](resume)

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) with React 19 and TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [Resend](https://resend.com) for contact email

## Getting Started

### Requirements

- Node.js 20 or newer

### Setup

```bash
git clone https://github.com/ars2k03/ars-arafat-portfolio.git
cd ars-arafat-portfolio
npm install
```

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

```env
# Contact form (Resend)
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL="Portfolio <contact@yourdomain.com>"
CONTACT_TO_EMAIL=you@example.com
```

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

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run oxlint |

## Editing the Resume

The resume is written in LaTeX at [`resume/resume.tex`](resume/resume.tex). Requires `pdflatex` (TeX Live).

```bash
./resume/watch.sh
```

This opens the PDF in a viewer and rebuilds it every time you save `resume.tex`. A successful build is copied to `public/resume.pdf`; a failed build leaves the published PDF untouched and prints the error.

## Project Structure

```
src/
├── actions/             # Server Actions
├── app/
│   └── (homepage)/      # Home page
├── components/
│   ├── homepage/        # Navbar and page sections
│   └── ui/              # Shared UI
├── lib/                 # Server-only email sending
├── types/               # Shared types
└── utils/               # Site info, navigation, page content
public/                  # Profile photo, project screenshots, skill logos, resume
resume/                  # LaTeX resume source and live-build script
```

## License

[MIT](LICENSE) © 2026 A R S Arafat
