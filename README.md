# A R S — Portfolio

Personal portfolio of **Arafat Rahman**, a full-stack software engineer. The site is designed like a vintage newspaper: each visitor gets their own "volume" number, a live ticker shows local weather, and pages flip like a broadsheet when you scroll past the edge.

## Pages

| Route | Content |
|---|---|
| `/` | Front page: introduction, profile, and highlights |
| `/experience` | Work experience timeline |
| `/projects` | Selected projects with screenshots, stack and links |
| `/skills` | Technologies grouped by category |
| `/contact` | Contact form that sends email through Resend |

## Features

- **Visitor counter**: unique visitors are counted in Redis (hashed IP + user agent) and turned into the newspaper's volume number, shown in Roman numerals
- **Weather ticker**: current weather for the visitor's city from WeatherAPI, cached for 5 minutes
- **Contact form**: a Server Action with validation, a honeypot field, and Redis rate limiting (3 messages per hour per IP)
- **Page flip navigation**: scroll or swipe past the top or bottom edge to move to the next or previous page
- **Resume**: [`public/resume.pdf`](public/resume.pdf), built from LaTeX source in [`resume/`](resume)

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) with React 19 and TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [Redis](https://redis.io) via `ioredis` for visitor counts and rate limiting
- [Resend](https://resend.com) for contact email
- [WeatherAPI](https://www.weatherapi.com) for the weather ticker

## Getting Started

### Requirements

- Node.js 20 or newer
- A Redis instance (local or hosted)

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
REDIS_URL=redis://localhost:6379
WEATHER_API_KEY=your_weatherapi_key

# Contact form (Resend)
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL="Portfolio <contact@yourdomain.com>"
CONTACT_TO_EMAIL=you@example.com
```

| Variable | Used for | If missing |
|---|---|---|
| `REDIS_URL` | Visitor counter, contact rate limiting | Falls back to `redis://localhost:6379` |
| `WEATHER_API_KEY` | Weather ticker | Shows a default (Dhaka, 26°C, clear) |
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
| `npm run lint` | Run ESLint |

## Editing the Resume

The resume is written in LaTeX at [`resume/resume.tex`](resume/resume.tex). Requires `pdflatex` (TeX Live).

```bash
./resume/watch.sh
```

This opens the PDF in a viewer and rebuilds it every time you save `resume.tex`. A successful build is copied to `public/resume.pdf`; a failed build leaves the published PDF untouched and prints the error.

## Project Structure

```
src/
├── app/
│   ├── (homepage)/      # Pages: home, experience, projects, skills, contact
│   └── api/
│       ├── visitors/    # Visitor counter (Redis)
│       └── weather/     # Weather proxy (WeatherAPI)
├── components/          # Navbar, PageFlip, Marquee, ContactForm, TechTile
├── lib/                 # Redis client, contact Server Action
└── utils/               # Site info, navigation, volume numbering
public/                  # Profile photo, project screenshots, skill logos, resume
resume/                  # LaTeX resume source and live-build script
```

## License

[MIT](LICENSE) © 2026 A R S Arafat
