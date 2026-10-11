export interface ProductItemConfig {
  name: string;
  fullName: string;
  category: string;
  headline: string;
  description: string;
  internalUrl: string;
  externalUrl: string;
  tags: string[];
  heroImage: string;
}

export interface ProductsConfig {
  prism: ProductItemConfig;
  gravitas: ProductItemConfig;
}

/**
 * Product configuration for Vyoka Labs Private Limited.
 * 
 * NOTE: The externalUrl properties are intentionally empty placeholders.
 * When the final deployed standalone websites for PRISM and GRAVITAS are ready,
 * configure their URLs here.
 * If externalUrl is empty, product CTAs will seamlessly guide visitors to the
 * internal engineering pages (/products/prism or /products/gravitas).
 */
export const productConfig: ProductsConfig = {
  prism: {
    name: "PRISM",
    fullName: "Plastic Recognition Using Integrated Scattered Monitoring",
    category: "Environmental Technology / Optical Sensing / Applied AI",
    headline: "Making microplastic analysis more accessible.",
    description:
      "PRISM is a portable optical detection system being developed to identify microplastics in water samples through fluorescent staining, optical excitation, fluorescence detection, and AI-assisted image analysis.",
    internalUrl: "/products/prism",
    externalUrl: "", // Intentionally empty placeholder for final deployed website
    tags: ["Optical sensing", "Fluorescence imaging", "Edge AI"],
    heroImage: "/images/prism-hero.jpg",
  },
  gravitas: {
    name: "GRAVITAS",
    fullName: "Modular Autonomous Heavy-Lift Drone for Flood Disaster Relief and Multi-Sector Freight",
    category: "Autonomous Systems / Aerial Robotics / Intelligent Logistics",
    headline: "One aerial platform. Multiple missions.",
    description:
      "GRAVITAS is a modular heavy-lift UAV concept designed to support commercial freight and disaster-response operations through interchangeable payloads, autonomous flight capabilities, and resilient communications.",
    internalUrl: "/products/gravitas",
    externalUrl: "", // Intentionally empty placeholder for final deployed website
    tags: ["Modular payloads", "Autonomous systems", "Resilient communications"],
    heroImage: "/images/gravitas-hexacopter-hero.jpg",
  },
};

/**
 * Helper to determine CTA destination and behavior:
 * - If externalUrl is non-empty, points to external website with external link attributes
 * - If externalUrl is empty, points to internal detailed engineering page
 */
export function getProductCtaInfo(productKey: "prism" | "gravitas") {
  const prod = productConfig[productKey];
  const hasExternal = Boolean(prod.externalUrl && prod.externalUrl.trim().length > 0);
  
  return {
    hasExternal,
    primaryHref: hasExternal ? prod.externalUrl : prod.internalUrl,
    primaryLabel: hasExternal ? `Visit ${prod.name} Platform` : `Explore ${prod.name}`,
    isExternal: hasExternal,
    internalHref: prod.internalUrl,
    secondaryLabel: "Learn About the Technology",
  };
}
