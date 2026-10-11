"use client";

import React from "react";
import AuthenticImage from "@/components/AuthenticImage";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function AboutView() {
  const pillars = [
    {
      domain: "Optical & Environmental Sensing",
      focus: "Applied fluorophore excitation, spectral filtering, and particulate image analysis.",
      product: "PRISM",
      productLink: "/products/prism",
      desc: "Making environmental particulate analysis faster, portable, and accessible without the cost and footprint of lab-confined spectrometer setups.",
    },
    {
      domain: "Autonomous Aerial Robotics",
      focus: "Modular multirotor airframes, PX4/Pixhawk avionics, and companion edge computing.",
      product: "GRAVITAS",
      productLink: "/products/gravitas",
      desc: "Delivering dual-use heavy-lift aerial transport for commercial middle-mile logistics and flood-disaster humanitarian aid where roads are severed.",
    },
    {
      domain: "Physical Edge Intelligence",
      focus: "Quantized on-device neural inference and deterministic mission autonomy.",
      product: "Platform Core",
      productLink: "/products",
      desc: "Running AI models directly on local hardware without cloud latency or wireless dependencies, ensuring systems operate reliably in austere field conditions.",
    },
  ];

  const principles = [
    {
      title: "Physical Utility First",
      desc: "We focus our engineering on high-friction bottlenecks in the tangible world &mdash; detecting contaminants in municipal water supplies and delivering emergency provisions across inundated disaster zones.",
    },
    {
      title: "Empirical Rigor Over Narrative",
      desc: "We validate systems against physical constraints, experimental sensors, and benchtop datasets before making claims. We clearly separate current prototypes from future aspirations.",
    },
    {
      title: "Modular & Extensible Systems",
      desc: "Hardware and software architectures are decoupled by clean interfaces, ensuring components can be serviced, upgraded, and iterated rapidly without systemic rebuilds.",
    },
    {
      title: "Responsible Deep-Tech Stewardship",
      desc: "Applied AI, autonomy, and optical instrumentation must advance ecological preservation, human life safety, and transparent scientific collaboration.",
    },
  ];

  const processStages = [
    {
      phase: "01",
      name: "Understand",
      summary: "Interrogate the physical bottleneck &mdash; optical absorption limits or rotorcraft aerodynamic constraints.",
    },
    {
      phase: "02",
      name: "Design",
      summary: "Architect modular subsystems with clean mechanical, electrical, and data interfaces.",
    },
    {
      phase: "03",
      name: "Build",
      summary: "Construct precision functional benchtop assemblies and flyable airframe prototypes.",
    },
    {
      phase: "04",
      name: "Test",
      summary: "Execute rigorous benchtop stress trials, optical calibration, and tethered flight evaluations.",
    },
    {
      phase: "05",
      name: "Refine",
      summary: "Iterate firmware, optical filtration, and structural mechanics based on physical empirical feedback.",
    },
  ];

  return (
    <div className="flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 border-b border-[var(--border-subtle)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Mission Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="editorial-tag">
                  Corporate Overview
                </span>
                <span className="text-xs font-mono text-[var(--text-secondary)]">
                  Vyoka Labs Private Limited &bull; Bengaluru, India
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
                  Intelligence, engineered for the physical world.
                </h1>
                <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                  Vyoka Labs develops practical technology across environmental sensing, optical analysis, and autonomous aerial robotics &mdash; connecting intelligent algorithms directly with tangible hardware to solve high-friction real-world problems.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/products"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <span>Explore Engineering Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <span>Connect With Our Team</span>
                  <ChevronRight className="w-4 h-4 text-[var(--accent-primary)]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Lab Photography Spread */}
            <div className="lg:col-span-5">
              <div className="editorial-card overflow-hidden shadow-lg group">
                <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden bg-[var(--surface-elevated)]">
                  <AuthenticImage
                    src="/images/about-engineering.jpg"
                    alt="Vyoka Labs precision engineering workbench and electronics prototyping"
                    captionTitle="FIG 01 // Engineering Facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 sm:p-5 border-t border-[var(--border-subtle)] bg-[var(--surface-primary)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span className="font-mono">FIG 01 // Engineering Facility</span>
                  <span>Prototyping & hardware integration bench</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PARENT BRAND VISION & PHILOSOPHY */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--surface-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="editorial-tag">
                Our Purpose
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
                Quiet confidence. Serious engineering. Real-world impact.
              </h2>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                Vyoka Labs Private Limited was conceived with a deliberate mandate: to bridge the gap between advanced research algorithms and reliable, field-deployable physical machines.
              </p>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                We are not a single-product venture or a software agency. We are an engineering house building dedicated hardware and edge computational platforms to observe, measure, and navigate the physical world.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="editorial-card p-8 sm:p-10 space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  The Relationship Between Our Products
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  At first glance, an optical microplastic detection instrument (<strong>PRISM</strong>) and a heavy-lift disaster response drone (<strong>GRAVITAS</strong>) appear to occupy completely divergent markets.
                </p>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  Under the surface, they share identical engineering foundations:
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">Edge Computing Without Cloud Reliance</h4>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5">
                        Both platforms execute neural inference and mission-critical autonomy locally on embedded hardware, ensuring operation in remote field environments where networks do not exist.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">Modular Subsystem Architecture</h4>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5">
                        Both systems decouple critical subcomponents &mdash; optical filter stacks or aerial payload bays &mdash; with clean electrical and mechanical boundaries for rapid field maintenance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">Direct Tangible Utility</h4>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5">
                        Neither product is built for speculative novelty. PRISM protects water reservoirs; GRAVITAS delivers survival supplies to inundated communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENGINEERING PILLARS */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Core Engineering Disciplines"
            title="Different disciplines. One engineering mindset."
            description="Our technological initiatives span three tightly integrated domains, each focused on turning complex physical phenomena into reliable digital action."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.domain} className="editorial-card p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--accent-primary)] font-bold uppercase tracking-wider">
                      {p.product}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-secondary)]">Active Domain</span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {p.domain}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[var(--accent-secondary)]">
                    {p.focus}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    href={p.productLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[var(--accent-primary)] hover:underline"
                  >
                    <span>View {p.product} Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Photography Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="editorial-card overflow-hidden">
              <div className="relative aspect-[16/10] w-full bg-[var(--surface-elevated)]">
                <AuthenticImage
                  src="/images/about-lab.jpg"
                  alt="Precision laboratory environment with optical testing apparatus"
                  captionTitle="FIG 02 // Research Laboratory"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <span className="font-mono">FIG 02 // Research Laboratory</span>
                <span>Optical characterization & benchtop sensors</span>
              </div>
            </div>

            <div className="editorial-card overflow-hidden">
              <div className="relative aspect-[16/10] w-full bg-[var(--surface-elevated)]">
                <AuthenticImage
                  src="/images/gravitas-hexacopter-hardware.jpg"
                  alt="Heavy-lift multirotor brushless propulsion assembly and motor testing"
                  captionTitle="FIG 03 // Propulsion Workshop"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <span className="font-mono">FIG 03 // Propulsion Workshop</span>
                <span>Static thrust & motor telemetry evaluation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL PROCESS & CREDIBILITY */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--surface-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Development Methodology"
            title="How we build: from inquiry to physical validation."
            description="Our engineering process is iterative, transparent, and grounded in empirical verification rather than speculative milestones."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processStages.map((stage) => (
              <div
                key={stage.phase}
                className="editorial-card p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[var(--accent-primary)] block mb-3">
                    STAGE {stage.phase}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {stage.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {stage.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="editorial-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-l-4 border-l-[var(--accent-primary)]">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[var(--text-primary)]">
                Institutional Integrity & Transparency Policy
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                Vyoka Labs reports current development milestones accurately. We do not advertise speculative certifications, fabricated client rosters, or unvalidated flight/detection numbers. All product metrics are clearly qualified as benchtop targets or field-verified empirical data.
              </p>
            </div>
            <Link
              href="/privacy"
              className="text-xs font-mono font-bold text-[var(--accent-primary)] hover:underline shrink-0"
            >
              Data & Ethics Policy &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CORE PRINCIPLES */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Operating Ethos"
            title="Engineering principles we live by."
            description="Four fundamental commitments that govern how we prioritize research, evaluate trade-offs, and engineer physical machines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p, idx) => (
              <div key={p.title} className="editorial-card p-8 sm:p-10 space-y-4">
                <span className="text-xs font-mono text-[var(--accent-primary)] font-bold">
                  PRINCIPLE 0{idx + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COLLABORATION CTA */}
      <section className="py-20 lg:py-24 bg-[var(--surface-primary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="editorial-card p-8 sm:p-14 space-y-6">
            <span className="editorial-tag">
              Join Our Engineering Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Let&rsquo;s engineer solutions for the physical world together.
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              Whether you represent an environmental agency, a disaster relief organization, or an academic research lab, we welcome dialogue.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span>Initiate a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <span>View Products</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
