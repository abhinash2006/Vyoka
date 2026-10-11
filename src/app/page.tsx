"use client";

import React from "react";
import AuthenticImage from "@/components/AuthenticImage";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { getProductCtaInfo } from "@/config/products";

export default function HomePage() {
  const prismCta = getProductCtaInfo("prism");
  const gravitasCta = getProductCtaInfo("gravitas");

  const engineeringStages = [
    {
      num: "01",
      stage: "Understand",
      desc: "Identifying physical friction points in microplastic detection and disaster aerial access.",
    },
    {
      num: "02",
      stage: "Design",
      desc: "Modeling optical photon paths, sensor signal-to-noise ratios, and multirotor aerodynamics.",
    },
    {
      num: "03",
      stage: "Build",
      desc: "Fabricating benchtop optical chambers, airframe structures, and companion edge computing.",
    },
    {
      num: "04",
      stage: "Test",
      desc: "Benchmarking fluorescence detection limits and flight endurance under operational stressors.",
    },
    {
      num: "05",
      stage: "Refine",
      desc: "Iterating computer vision models, payload mechanisms, and failsafe control routines.",
    },
  ];

  const principles = [
    {
      title: "Empirical Rigor Over Narrative",
      desc: "We validate systems against physical constraints, experimental sensors, and environmental telemetry before making performance claims.",
    },
    {
      title: "Physical Utility First",
      desc: "Our engineering targets high-friction bottlenecks in the tangible world — detecting contaminants in waterways and navigating logistics through disaster terrain.",
    },
    {
      title: "Modular & Extensible Systems",
      desc: "We build hardware and software architectures decoupled by clean interfaces, ensuring rapid iterative upgrades without systemic re-engineering.",
    },
    {
      title: "Responsible Deep-Tech Stewardship",
      desc: "Applied AI, autonomy, and optical sensing must advance ecological preservation, human life safety, and transparent scientific collaboration.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. EDITORIAL ASYMMETRIC HERO */}
      <section className="border-b border-[var(--border-primary)] bg-[var(--bg-primary)] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Typeset Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="editorial-tag">
                Vyoka Labs Private Limited
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.08]">
                Technology for a more measurable, more capable world.
              </h1>

              <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                Vyoka Labs develops practical technology across environmental sensing, optical analysis, and autonomous aerial systems.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="/products" className="btn-primary">
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link href="/about" className="btn-secondary">
                  <span>About Vyoka Labs</span>
                </Link>
              </div>

              {/* Credible Sub-dossier note */}
              <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-mono uppercase text-[10px] text-[var(--text-muted)] tracking-wider block">
                    Product Line 01
                  </span>
                  <Link href="/products/prism" className="font-semibold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors mt-0.5 inline-block">
                    PRISM &rarr;
                  </Link>
                  <p className="text-[var(--text-secondary)] text-[11px] mt-0.5">
                    Optical microplastic detection and edge AI
                  </p>
                </div>

                <div>
                  <span className="font-mono uppercase text-[10px] text-[var(--text-muted)] tracking-wider block">
                    Product Line 02
                  </span>
                  <Link href="/products/gravitas" className="font-semibold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors mt-0.5 inline-block">
                    GRAVITAS &rarr;
                  </Link>
                  <p className="text-[var(--text-secondary)] text-[11px] mt-0.5">
                    Modular heavy-lift UAV for freight & disaster relief
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Real Photography Column (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-lg overflow-hidden border border-[var(--border-primary)] shadow-sm bg-[var(--bg-surface)]">
                <AuthenticImage
                  src="/images/hero-engineering.jpg"
                  alt="Vyoka Labs precision engineering and hardware integration lab"
                  captionTitle="Precision Engineering Facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                  className="object-cover object-center"
                />
              </div>
              <p className="text-[11px] text-[var(--text-muted)] font-sans px-1">
                Hardware integration and optical instrument calibration environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT SHOWCASES — THE CORE CONTENT AREA */}
      <section className="py-20 lg:py-28 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <SectionHeader
            tag="Engineering Portfolio"
            title="Two distinct platforms. One empirical philosophy."
            description="Our current products address operational bottlenecks in aquatic environmental protection and remote aerial logistics."
          />

          {/* Product 1: PRISM (Scientific Editorial Composition) */}
          <div className="editorial-card p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Image Column */}
              <div className="lg:col-span-6 space-y-2">
                <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-surface)]">
                  <AuthenticImage
                    src="/images/prism-hero.jpg"
                    alt="PRISM optical laboratory detection setup"
                    captionTitle="PRISM Optical Prototype"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <p className="text-[11px] text-[var(--text-muted)]">
                  Optical excitation chamber prototype and fluorophore response capture.
                </p>
              </div>

              {/* Narrative Column */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="editorial-tag text-[var(--accent-primary)]">
                    PRISM &bull; Optical Environmental Sensing
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] tracking-tight mt-2">
                    See the problem at the particle level.
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed">
                    An optical and AI-assisted approach to identifying suspected microplastics in prepared water samples.
                  </p>
                </div>

                {/* Proposed 5-Step Workflow */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                    Proposed Detection Workflow
                  </span>
                  <ol className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[var(--accent-primary)] font-semibold shrink-0">1.</span>
                      <span>Sample preparation and fluorescent staining of aqueous grab samples.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[var(--accent-primary)] font-semibold shrink-0">2.</span>
                      <span>515–520 nm optical green laser excitation targeting fluorophore absorption.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[var(--accent-primary)] font-semibold shrink-0">3.</span>
                      <span>Stokes-shifted fluorescence emission capture through high-magnification optics.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[var(--accent-primary)] font-semibold shrink-0">4.</span>
                      <span>Optical bandpass filtering to isolate particulate emission signals.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[var(--accent-primary)] font-semibold shrink-0">5.</span>
                      <span>AI-assisted image segmentation and particulate quantification on NVIDIA Jetson edge AI.</span>
                    </li>
                  </ol>
                </div>

                {/* Technical Specs List */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-6 text-xs font-mono text-[var(--text-secondary)]">
                  <div>
                    <span className="text-[var(--text-muted)] uppercase block text-[10px]">Wavelength</span>
                    <span className="text-[var(--text-primary)] font-medium">515–520 nm Laser</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] uppercase block text-[10px]">Edge Compute</span>
                    <span className="text-[var(--text-primary)] font-medium">Jetson Orin Nano</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] uppercase block text-[10px]">Target</span>
                    <span className="text-[var(--text-primary)] font-medium">Aqueous Particles</span>
                  </div>
                </div>

                <div className="pt-2">
                  {prismCta.isExternal ? (
                    <a
                      href={prismCta.primaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>Visit PRISM Website</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link href="/products/prism" className="btn-primary">
                      <span>Discover PRISM</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Product 2: GRAVITAS (Cinematic Industrial Composition) */}
          <div className="editorial-card p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Narrative Column */}
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <div>
                  <span className="editorial-tag text-[var(--accent-secondary)]">
                    GRAVITAS &bull; Autonomous Aerial Robotics
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] tracking-tight mt-2">
                    One aerial platform. Multiple missions.
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed">
                    A modular heavy-lift UAV platform being developed for commercial logistics and flood-disaster response.
                  </p>
                </div>

                {/* Proposed Concept Highlights */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                    Core Platform Capabilities
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] mt-2 shrink-0" />
                      <span>Interchangeable cargo modules and emergency relief payload pods.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] mt-2 shrink-0" />
                      <span>Industrial heavy-lift multirotor architecture for high payload stability.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] mt-2 shrink-0" />
                      <span>Pixhawk flight core with onboard companion computing for autonomous routing.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] mt-2 shrink-0" />
                      <span>Cellular telemetry backhaul with redundant long-range RF failover links.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] mt-2 shrink-0" />
                      <span>Engineered for supply delivery over severed roads and monsoon flood terrain.</span>
                    </li>
                  </ul>
                </div>

                {/* Technical Specs List */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-6 text-xs font-mono text-[var(--text-secondary)]">
                  <div>
                    <span className="text-[var(--text-muted)] uppercase block text-[10px]">Architecture</span>
                    <span className="text-[var(--text-primary)] font-medium">Multirotor Airframe</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] uppercase block text-[10px]">Autopilot</span>
                    <span className="text-[var(--text-primary)] font-medium">Pixhawk Core</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] uppercase block text-[10px]">Deployment</span>
                    <span className="text-[var(--text-primary)] font-medium">Winch & Pod Delivery</span>
                  </div>
                </div>

                <div className="pt-2">
                  {gravitasCta.isExternal ? (
                    <a
                      href={gravitasCta.primaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>Visit GRAVITAS Website</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link href="/products/gravitas" className="btn-primary">
                      <span>Discover GRAVITAS</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-6 space-y-2 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-surface)]">
                  <AuthenticImage
                    src="/images/gravitas-hexacopter-hero.jpg"
                    alt="GRAVITAS heavy-lift industrial multirotor UAV in flight"
                    captionTitle="GRAVITAS Flight Evaluation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <p className="text-[11px] text-[var(--text-muted)]">
                  Heavy-lift multirotor test platform during autonomous flight evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY STORY ("Different disciplines. One engineering mindset.") */}
      <section className="py-20 lg:py-28 bg-[var(--bg-primary)] border-b border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="editorial-tag">
                Company Philosophy
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight leading-[1.15]">
                Different disciplines. One engineering mindset.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                <p>
                  At first glance, an optical device that identifies synthetic microplastics in water and a heavy-lift autonomous aircraft designed for monsoon relief appear unrelated.
                </p>
                <p>
                  At Vyoka Labs, both are driven by identical engineering values: bringing modern computation into direct contact with physical friction in the real world.
                </p>
                <p>
                  Rather than developing purely virtual platforms, our team focuses talent where traditional methods are either too expensive, too slow, or physically hazardous. We approach optics, avionics, and edge intelligence from first principles.
                </p>
              </div>

              <div className="pt-2">
                <Link href="/about" className="btn-secondary">
                  <span>Read About Our Engineering Culture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Principles Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative aspect-[16/9] rounded-md overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-surface)]">
                <AuthenticImage
                  src="/images/embedded-computing.jpg"
                  alt="Embedded companion computer hardware assembly"
                  captionTitle="Edge Computing Hardware"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="divide-y divide-[var(--border-subtle)] pt-2">
                {principles.map((p) => (
                  <div key={p.title} className="py-4 first:pt-0 last:pb-0">
                    <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                      {p.title}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL CREDIBILITY — DEVELOPMENT PROCESS */}
      <section className="py-20 lg:py-28 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Engineering Methodology"
            title="How we approach product development."
            description="Our process progresses systematically from empirical bottleneck identification through iterative hardware validation."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-4">
            {engineeringStages.map((stage) => (
              <div
                key={stage.num}
                className="p-6 rounded-md border border-[var(--border-primary)] bg-[var(--bg-primary)] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[var(--accent-primary)]">
                    {stage.num}
                  </span>
                  <h4 className="text-base font-bold text-[var(--text-primary)] mt-3">
                    {stage.stage}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT / COLLABORATION CTA */}
      <section className="py-20 lg:py-28 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="editorial-card p-10 sm:p-14 lg:p-16 max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
            <span className="editorial-tag">
              Engineering Dialogue
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight max-w-xl">
              Have a problem worth engineering for?
            </h2>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
              Whether you are evaluating PRISM for aquatic testing, exploring a GRAVITAS mission evaluation, or looking to structure an academic research collaboration, our engineering leads welcome technical dialogue.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link href="/products" className="btn-secondary">
                <span>View All Products</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
