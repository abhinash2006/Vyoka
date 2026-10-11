# Vyoka Labs Private Limited — Corporate Website

> **Precision in Motion — Intelligence for the Physical World**

A high-performance, production-ready corporate website for **Vyoka Labs Private Limited**, an engineering-led deep-tech venture building intelligent technology products that bring advanced computing into the physical world.

---

## 1. Company & Product Portfolio

Vyoka Labs develops applied technology at the intersection of optical sensing, autonomous aerial robotics, and edge computing:

1. **PRISM — Plastic Recognition Using Integrated Scattered Monitoring**
   - **Category**: Environmental Technology / Optical Sensing / Applied AI
   - **Focus**: Portable optical detection of microplastics in aquatic samples utilizing targeted fluorescent staining, 515–520 nm green laser excitation, optical filtering, and edge computer vision inference running on the **NVIDIA Jetson Orin Nano** platform.
   - **Route**: [`/products/prism`](http://localhost:3000/products/prism)

2. **GRAVITAS — Modular Autonomous Heavy-Lift Drone for Flood Disaster Relief and Multi-Sector Freight**
   - **Category**: Autonomous Systems / Aerial Robotics / Intelligent Logistics
   - **Focus**: Modular heavy-lift UAV platform designed for middle-mile commercial freight and emergency humanitarian operations across inundated terrain. Features quick-release modular payload rails, motorized tethered winch delivery, Pixhawk flight management, companion edge computing running ROS2, and dual cellular LTE / 915 MHz RF telemetry.
   - **Route**: [`/products/gravitas`](http://localhost:3000/products/gravitas)

---

## 2. Technology Stack & Architecture

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components by default)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict type-checking)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with customized engineering tokens
- **Typography**: Google Fonts via `next/font/google` ([Manrope](https://fonts.google.com/specimen/Manrope) for display headings, [Inter](https://fonts.google.com/specimen/Inter) for body)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend API**: Next.js Route Handlers (`/api/contact`) with client & server-side validation, honeypot spam protection, and configurable email dispatch (Resend / SMTP).

---

## 3. Brand Identity & Design System

The visual design language is titled **"Precision in Motion — Intelligence for the Physical World"**:

| Token | Hex / Value | Usage |
|---|---|---|
| **Primary Background** | `#0B1220` (Midnight Navy) | Core dark surfaces, headers, hero sections |
| **Secondary Dark Surface** | `#111B2B` | Content cards, spec containers, alternating panels |
| **Light Section Background**| `#F5F4EF` (Warm Off-White) | Contrast editorial sections (Principles, Workflows) |
| **Primary Text (Dark)** | `#F5F7FA` | Headings and titles on dark backgrounds |
| **Primary Text (Light)** | `#172033` | Headings and titles on warm off-white sections |
| **Primary Accent** | `#46D6C4` (Muted Electric Teal) | Interactive states, PRISM tags, primary CTA highlights |
| **Secondary Accent** | `#7FA8FF` (Cool Blue) | GRAVITAS UAV tags, avionics highlights |
| **Borders** | `rgba(255, 255, 255, 0.08)` | Low-contrast hairline slate borders |

---

## 4. Website Architecture & Routes

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero section, 3 engineering principles, featured products, development pipeline, photographic application sectors, and contact CTA. |
| `/products` | **Products Overview** | Portfolio showcase, comparative mission profiles, shared edge computing and modularity foundations. |
| `/products/prism` | **PRISM Detailed** | Problem statement, 5-stage optical workflow, architecture diagram, Jetson Orin Nano edge pipeline, hardware modules, development status, and FAQs. |
| `/products/gravitas` | **GRAVITAS Detailed**| Problem statement, dual-use concept (freight + flood relief), winch delivery, Pixhawk avionics diagram, telemetry redundancy, roadmap, and FAQs. |
| `/about` | **About Us** | Mission, engineering philosophy, responsible technology governance, and extensible leadership slot. |
| `/contact` | **Contact** | Interactive contact form with honeypot, validation, verified corporate location, and response times. |
| `/privacy` | **Privacy Policy** | Transparent data processing terms, user rights, and corporate disclosure. |
| `/_not-found` | **Custom 404** | Accessible error state with navigation fallback links. |
| `/robots.txt` | **Robots Config** | Dynamic search engine indexing rules. |
| `/sitemap.xml` | **XML Sitemap** | Dynamic sitemap for production SEO indexing. |

---

## 5. Future Product Links Configuration

When the standalone deployed websites for **PRISM** and **GRAVITAS** are ready, configure their URLs in a single file:

```typescript
// src/config/products.ts

export const productConfig = {
  prism: {
    name: "PRISM",
    // Configure deployed URL here (e.g. "https://prism.vyokalabs.com")
    externalUrl: "", 
  },
  gravitas: {
    name: "GRAVITAS",
    // Configure deployed URL here (e.g. "https://gravitas.vyokalabs.com")
    externalUrl: "",
  },
};
```

### Dynamic CTA Behavior:
- **When `externalUrl` is empty (default)**: The primary product CTA navigates seamlessly to the internal product page (`/products/prism` or `/products/gravitas`).
- **When `externalUrl` is configured**: The primary CTA launches the external website in a secure new tab (`target="_blank" rel="noopener noreferrer"`), while the secondary link ("Learn About the Technology") continues to provide access to the internal engineering detail page.
- **No empty `#` links or inactive buttons exist anywhere in the application.**

---

## 6. Real Contact Endpoint & Email Dispatch

The contact form submits to `/api/contact` via `POST`.

### Features:
1. **Client & Server-Side Validation**: Field lengths, valid email format regex, enquiry classifications, and mandatory privacy consent.
2. **Spam Mitigation**: Invisible honeypot field (`hp_website`). Automated bots that fill this field receive a clean 200 response while the submission is safely discarded.
3. **Safe Development Mode**: When email provider API keys are not supplied in local environments, submissions are logged directly to the server terminal with full field serialization, returning an informative confirmation without discarding user input.
4. **Production Email Integration**: When configured with `RESEND_API_KEY`, emails are automatically formatted into structured HTML and dispatched to `CONTACT_NOTIFICATION_EMAIL`.

---

## 7. Environment Variables

Create `.env.local` based on `.env.example`:

```bash
# Site URL (for canonical URLs & Open Graph metadata)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Verified Company Contact Details
NEXT_PUBLIC_COMPANY_EMAIL=contact@vyokalabs.com
NEXT_PUBLIC_COMPANY_LOCATION="Bengaluru, Karnataka, India"

# Email Provider Configuration (Optional for production email dispatch)
RESEND_API_KEY=
CONTACT_NOTIFICATION_EMAIL=enquiries@vyokalabs.com
```

---

## 8. Local Development & Production Commands

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Run ESLint Verification
```bash
npm run lint
```

### Run Automated HTTP & Endpoint Test Suite
```bash
node scripts/test_suite.mjs
```

---

## 9. Photography & Image Licensing

All photographs are stored locally in `/public/images/` to prevent broken external hotlinks or layout shifts. Images are authentic photographs under the permissive [Unsplash License](https://unsplash.com/license) (free for commercial and non-commercial use).

See [`public/images/ATTRIBUTION.md`](./public/images/ATTRIBUTION.md) for complete file-by-file photographer attributions and categories.

---

## 10. Deployment Instructions

### Option 1: Vercel (Recommended)
1. Push repository to GitHub / GitLab.
2. Import project into Vercel.
3. Configure `RESEND_API_KEY` and `NEXT_PUBLIC_SITE_URL` in project Environment Variables.
4. Click **Deploy**.

### Option 2: Node.js Server / Docker / VPS
1. Run `npm run build`.
2. Start server via `node_modules/.bin/next start` or process manager (`pm2 start npm --name "vyoka-labs" -- start`).
3. Bind behind Nginx / Caddy reverse proxy with SSL termination.

---

© 2026 Vyoka Labs Private Limited. All rights reserved.
