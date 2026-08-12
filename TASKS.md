# TASKS

## 🚧 In Progress

_(none)_

## 📋 Planned

- **USER ACTION — DNS switch at GoDaddy** to activate GitHub Pages on s1nka.com (records in README below / chat)
- Optional: project thumbnails (webp + descriptive alt) on case-study pages
- Optional: LinkedIn/Dribbble in sameAs when available

## ✅ Done

- **2026-08-12 — Full IA upgrade (audit response, `cc20dbe`)**
  - Project case-study pages: `/projects` + 4 detail pages (Overview/Design/Build/Outcome, role/stack/status), data in `src/lib/projects.ts`
  - Real name "Kakhaber Sinauridze" on site + title (already public as App Store seller name)
  - ProfilePage+Person JSON-LD (homepage), SoftwareApplication JSON-LD (each project)
  - Skills regrouped: Design / Development / Other with · separators
  - og.png generated (README-style 1200×630) + og:image/twitter:image
  - sitemap.xml + llms.txt with all 6 URLs; CI prerenders all routes; deploy green
  - All 4 apps verified live via iTunes API (incl. Brain Snacks id 6773241217)

- **2026-08-12 — Auto-deploy pipeline (bypass Lovable publish)**
  - Repo made public; GitHub Pages enabled (workflow build type)
  - `.github/workflows/deploy.yml`: push to main → bun build (`NITRO_PRESET=node_server`) → prerender `/` + 404 → deploy Pages
  - Custom domain set to s1nka.com (CNAME); first deploy green, content verified on sinka48.github.io
  - Remaining: DNS at GoDaddy → GitHub Pages IPs

- **2026-08-12 — Readability & AI/HR polish pass**
  - Restructured homepage into semantic sections: About, Skills, Selected Projects, Contact (`src/routes/index.tsx`)
  - Added JSON-LD `Person` schema, canonical + full OG/Twitter meta
  - Added `public/llms.txt` (AI-crawler summary), `public/sitemap.xml`, Sitemap line in `robots.txt`
  - Removed Lovable default `twitter:site @Lovable` from root meta (`src/routes/__root.tsx`)
  - Verified: dev server render, SSR HTML contains full content + JSON-LD, eslint + tsc clean
