---
name: website-operations
description: >-
  Provides procedures and automated runbooks for building, testing, linting,
  and running the Vyoka Labs Private Limited Next.js web application.
  Use when developing, verifying, or deploying pages on the website.
---

# Vyoka Labs — Website Operations Skill

Use this skill when developing, testing, linting, or deploying the Vyoka Labs Private Limited corporate website.

## 1. Quick Commands Runbook

- **Development Server**: `npm run dev` (Runs on http://localhost:3000)
- **Production Build**: `npm run build` (Turbopack prerenders all static pages)
- **Production Run**: `npm run start -- -p 3000`
- **ESLint Linting**: `npm run lint` (Checks all TypeScript & React rules)
- **Automated Verification Suite**: `node scripts/test_suite.mjs`

## 2. Testing Guidelines

Before committing or completing any work on this website:
1. Run `npm run lint` to confirm 0 errors and 0 warnings.
2. Run `npm run build` to ensure static page prerendering succeeds without unstable dates or dynamic prerender errors.
3. Run `node scripts/test_suite.mjs` to execute the 26-test HTTP suite verifying:
   - All 10 page routes return HTTP 200 (or 404 for missing paths).
   - All 11 static photography assets in `/images/` resolve.
   - Contact API `/api/contact` rejects malformed data, traps honeypot bots, and accepts valid enquiries.

## 3. Styling & Color Tokens

Always maintain the brand palette defined in `src/app/globals.css`:
- Primary Background: `#0B1220` (Midnight Navy)
- Surface: `#111B2B`
- Warm Contrast Sections: `#F5F4EF` (Off-White)
- Primary Text: `#F5F7FA` (Dark surfaces), `#172033` (Light surfaces)
- Accents: `#46D6C4` (Muted Electric Teal), `#7FA8FF` (Cool Blue)
- Hairline Borders: `rgba(255, 255, 255, 0.08)`
