# TASKS

## 🚧 In Progress

_(none)_

## 📋 Planned

- Decide: real name on site for HR/ATS parsers (currently brand "s1nka" only)
- OG image (og:image) for social link previews
- Optional: per-project detail pages / case studies

## ✅ Done

- **2026-08-12 — Readability & AI/HR polish pass**
  - Restructured homepage into semantic sections: About, Skills, Selected Projects, Contact (`src/routes/index.tsx`)
  - Added JSON-LD `Person` schema, canonical + full OG/Twitter meta
  - Added `public/llms.txt` (AI-crawler summary), `public/sitemap.xml`, Sitemap line in `robots.txt`
  - Removed Lovable default `twitter:site @Lovable` from root meta (`src/routes/__root.tsx`)
  - Verified: dev server render, SSR HTML contains full content + JSON-LD, eslint + tsc clean
