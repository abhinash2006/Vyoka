# Vyoka Labs Engineering & Design Rules

These rules apply across all modifications to the Vyoka Labs Private Limited codebase:

## 1. Brand & Design System
- Maintain the visual design language: *"Precision in Motion — Intelligence for the Physical World"*.
- Strictly preserve the color tokens:
  - Midnight Navy: `#0B1220`
  - Dark Surface: `#111B2B`
  - Warm Off-White: `#F5F4EF`
  - Muted Electric Teal: `#46D6C4`
  - Cool Blue: `#7FA8FF`
- Avoid generic startup aesthetics (no oversized glowing orbs, meaningless animated counters, or generic repetitive gradient cards).
- Use Manrope for display headings and Inter for body text.

## 2. Integrity & Honest Messaging
- Do not invent founding dates, fake funding rounds, fictitious customer logos, fake patents, or unverified performance statistics.
- All technical specifications must reflect genuine engineering realities and clearly state ongoing validation boundaries.

## 3. Code Standards & Architecture
- Next.js App Router (React Server Components by default, Client Components with `"use client"` only when interactive state is required).
- Semantic HTML landmarks (`<header>`, `<main id="main-content">`, `<footer>`, `<nav>`, `<article>`).
- Strict accessibility (WCAG 2.2 AA): Keyboard navigable menus, focus rings (`focus-visible:ring-2 focus-visible:ring-[#46D6C4]`), ARIA labels, and skip-to-content link.
- Never use `#` for links; keep all buttons functional.
