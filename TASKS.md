# TASKS

## 🚧 In Progress

_(none)_

## 📋 Planned

- **USER ACTION — DNS switch at GoDaddy** to activate GitHub Pages on s1nka.com (records in README below / chat)
- Decide: real name on site for HR/ATS parsers (currently brand "s1nka" only)
- OG image (og:image) for social link previews
- Optional: per-project detail pages / case studies

## ✅ Done

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
