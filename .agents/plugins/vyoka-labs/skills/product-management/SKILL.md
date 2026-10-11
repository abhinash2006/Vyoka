---
name: product-management
description: >-
  Provides procedures for updating, configuring, and expanding the PRISM and
  GRAVITAS product lines, including setting external URLs and adding new engineering products.
  Use when modifying product specifications or updating product links.
---

# Vyoka Labs — Product Management Skill

Use this skill when modifying product configurations, setting external deployed links, or expanding the Vyoka Labs product catalog.

## 1. Configuring External Product URLs

When the standalone production websites for **PRISM** or **GRAVITAS** are deployed:
1. Open [`src/config/products.ts`](file:///d:/Vyoka_labs/src/config/products.ts).
2. Set `externalUrl`:
   ```typescript
   export const productConfig = {
     prism: {
       name: "PRISM",
       externalUrl: "https://prism.vyokalabs.com", // Set deployed URL
     },
     gravitas: {
       name: "GRAVITAS",
       externalUrl: "https://gravitas.vyokalabs.com", // Set deployed URL
     },
   };
   ```
3. The application automatically adapts:
   - Primary CTAs launch the external link in a secure new tab (`target="_blank" rel="noopener noreferrer"`).
   - Secondary links ("Learn About the Technology") maintain internal navigation to `/products/prism` and `/products/gravitas`.
   - Never use empty string or `#` as an active external link.

## 2. Technical Claims Governance

When editing product descriptions:
- **PRISM**: Specify 515–520 nm green laser diode excitation, fluorescent staining, optical emission filtration, and NVIDIA Jetson Orin Nano edge inference. Avoid claiming unverified limits of detection (LoD) or polymer classification accuracy prior to formal publication.
- **GRAVITAS**: Specify heavy-lift multirotor architecture, Pixhawk autopilot flight management, ROS2 companion edge computing, dual LTE cellular + RF failsafe telemetry, and motorized winch delivery. Avoid claiming uncertified BVLOS clearance or verified 15 kg all-weather payload delivery without operational flight test data.
