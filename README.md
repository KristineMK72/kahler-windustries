# Kahler Windustries

Professional marketing site for **Kahler Windustries** — owner-operated wind turbine field services (installation, inspection, mechanical, electrical) serving rural Minnesota and the Upper Midwest.

## Stack

- Next.js 14 (App Router)
- React 18
- Custom CSS design system (no Tailwind required)

## Pages

- `/` — Hero, capabilities, about Tom, CTA
- `/services` — Full service list
- `/contact` — Phone, email, message form

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Connect the repo to Vercel (or similar). Production build:

```bash
npm run build
npm start
```

## Before launch

- Replace placeholder phone `(555) 218-9044` with the real number
- Confirm `info@kahlerwindustries.com` (or update)
- Optionally swap the mailto form for Formspree / Resend / API route
