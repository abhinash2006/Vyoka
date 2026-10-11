---
name: vyoka-labs-ops
description: >-
  Operational guide, runbook, and verification procedures for the Vyoka Labs Private Limited
  corporate website and engineering products (PRISM and GRAVITAS).
  Use when maintaining, testing, updating product links, or extending the website.
---

# Vyoka Labs — Operational Skill

This workspace skill provides essential instructions for managing and extending the Vyoka Labs Private Limited platform.

## Key Resources & Paths

- **Products Configuration**: [`src/config/products.ts`](file:///d:/Vyoka_labs/src/config/products.ts)
  - Configure deployed standalone URLs for PRISM and GRAVITAS in `productConfig.prism.externalUrl` and `productConfig.gravitas.externalUrl`.
- **Contact API Endpoint**: [`src/app/api/contact/route.ts`](file:///d:/Vyoka_labs/src/app/api/contact/route.ts)
  - Server-side validation, honeypot protection, and Resend/SMTP dispatch.
- **Verification Suite**: [`scripts/test_suite.mjs`](file:///d:/Vyoka_labs/scripts/test_suite.mjs)
  - Run with `node scripts/test_suite.mjs` to verify all 10 routes and the contact API.
- **Image Attribution Records**: [`public/images/ATTRIBUTION.md`](file:///d:/Vyoka_labs/public/images/ATTRIBUTION.md)
  - Verified licensing for all authentic photography assets.

## Verification Runbook

```bash
# 1. Lint verification
npm run lint

# 2. Production build verification
npm run build

# 3. Automated endpoint tests
node scripts/test_suite.mjs
```
