# RIQOPOINT website
Next.js (App Router) + TypeScript, plain CSS. Run: `npm install && npm run dev`; check: `npm run build`.

## Deploy on Vercel
1. Push to GitHub. 2. Vercel: Add New Project, import the repo (framework auto-detected). 3. Set environment variables from `.env.example` (Resend API key, to/from addresses, site URL, contact email). 4. Deploy, then add your domain. Verify the sender domain in Resend; until then the form honestly reports that delivery is not configured.

## Before public launch
Founder names and biographies; contact email; registered company name, address and number; final domain (`NEXT_PUBLIC_SITE_URL`); Resend setup and a test enquiry; privacy notice page; approved case studies; favicon/OG image; confirm the Jindal Saw reference may be named publicly (currently not named on the site).
Known limits: no file upload (needs storage plus malware scanning); rate limiting is per server instance only (use Upstash or Vercel Firewall for production); stock imagery not included.
