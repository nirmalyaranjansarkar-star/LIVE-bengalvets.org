# LIVE-bengalvets.org — 54th Veterinary Reunion website

Website of **The 54th Reunion of Past & Present Students** of Bengal Veterinary College (C.U.) & Faculty of Veterinary & Animal Sciences (BCKV & WBUAFS) — Sunday, 10th January 2027, WBUAFS Campus, Belgachia, Kolkata.

Live: https://bengalvets.org

## How to change text
All words, names, fees, links live in **`src/content.ts`**. Edit it on GitHub (pencil icon) → Commit. Cloudflare Pages rebuilds and publishes in about 1 minute.

- Registration link: `registrationUrl` (empty = "opens shortly" pop-up with WhatsApp help)
- Theme song / jingle: `themeSongUrl`, `jingleUrl` (mp3 links)
- Programme times: `programme` list
- Sponsors: `sponsors` list (put logo files in `public/sponsors/`)

## Tech
React 18 + TypeScript + Vite 5 + Tailwind CSS 3 + framer-motion. Static site, no backend, no API keys.

## Hosting (Cloudflare Pages)
- Build command: `npm run build`
- Output folder: `dist`
- Custom domain: bengalvets.org (SSL by Cloudflare, auto-renew)

## Local
```
npm install
npm run dev
```
