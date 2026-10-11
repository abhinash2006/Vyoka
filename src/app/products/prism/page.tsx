import React from "react";
import type { Metadata } from "next";
import AuthenticImage from "@/components/AuthenticImage";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Cpu,
  CheckCircle2,
  Lightbulb,
  Microscope,
  Database,
  ShieldCheck,
  ChevronRight,
  Filter,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import TechArchitectureDiagram from "@/components/TechArchitectureDiagram";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import { getProductCtaInfo } from "@/config/products";

export const metadata: Metadata = {
  title: "PRISM — Optical Microplastic Detection System",
  description:
    "PRISM (Plastic Recognition Using Integrated Scattered Monitoring) is an optical and AI-assisted detection system combining fluorescent staining, 515–520 nm laser excitation, and edge computing on NVIDIA Jetson Orin Nano.",
};

export default function PrismProductPage() {
  const ctaInfo = getProductCtaInfo("prism");

  const prismFaqs: FaqItem[] = [
    {
      id: "lod",
      question: "What are PRISM's verified detection limits and particle size thresholds?",
      answer:
        "The quantitative limit of detection (LoD) and minimum identifiable particle diameter are currently subject to ongoing empirical benchtop calibration. Fluorescent excitation varies substantially across polymer chemistries (e.g., PE, PP, PS, PET), sample turbidity, and fluorophore binding kinetics. Vyoka Labs does not make unverified claims regarding sub-micron resolution or absolute precision until experimental datasets are peer-reviewed and published.",
    },
    {
      id: "optical-choice",
      question: "Why does PRISM utilize 515–520 nm laser excitation?",
      answer:
        "The 515–520 nm green laser diode wavelength aligns with the absorption peaks of lipophilic fluorescent dyes (such as Nile Red) when bound to hydrophobic synthetic polymers. This wavelength range generates a strong Stokes-shifted fluorescence emission while allowing precision optical bandpass or longpass filters to suppress direct excitation scatter.",
    },
    {
      id: "processing-platform",
      question: "Why run inference on an NVIDIA Jetson Orin Nano rather than cloud servers?",
      answer:
        "Field water sampling often takes place in remote wetlands, treatment reservoirs, or industrial outflow channels with minimal cellular connectivity. Embedding an NVIDIA Jetson Orin Nano edge module provides local GPU tensor acceleration, enabling immediate particle segmentation without high-bandwidth cloud image transmission.",
    },
    {
      id: "comparison",
      question: "How does PRISM relate to gold-standard FTIR or Raman spectroscopy?",
      answer:
        "PRISM is conceived as an accessible, rapid screening and particulate quantification instrument rather than a direct replacement for benchtop confocal Raman or FTIR spectroscopy. While spectroscopic methods provide definitive chemical fingerprinting, they are cost-intensive, slow, and lab-bound. PRISM aims to bring fast, field-capable screening to water utilities and ecological researchers.",
    },
    {
      id: "regulatory",
      question: "Is PRISM certified for official regulatory water compliance testing?",
      answer:
        "PRISM is currently an active engineering development project. It has not received formal regulatory certification or ISO/EPA equivalence. Collaborative pilots with academic and municipal institutions are structured to generate the empirical validation data necessary for future standards alignment.",
    },
  ];

  return (
    <div className="flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* 1. EDITORIAL HERO */}
      <section className="relative py-20 lg:py-28 border-b border-[var(--border-subtle)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Product Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="editorial-tag">
                  Environmental Optical Sensing
                </span>
                <span className="text-xs font-mono text-[var(--text-secondary)]">
                  NVIDIA Jetson Edge Inference
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
                  See the problem at the particle level.
                </h1>
                <p className="text-base sm:text-lg font-mono text-[var(--accent-primary)] font-semibold tracking-wide">
                  PRISM &mdash; Plastic Recognition Using Integrated Scattered Monitoring
                </p>
              </div>

              <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                An optical and AI-assisted approach to identifying and quantifying suspected microplastics in prepared water samples using targeted fluorophore excitation, spectral filtration, and on-device neural segmentation.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {ctaInfo.isExternal ? (
                  <a
                    href={ctaInfo.primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <span>Launch PRISM Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href="#optical-workflow"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <span>Explore Optical Workflow</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}

                <Link
                  href="/contact?product=prism"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <span>Request Research Brief</span>
                  <ChevronRight className="w-4 h-4 text-[var(--accent-primary)]" />
                </Link>
              </div>

              {/* Quick Spec Ribbon */}
              <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-4">
                <div>
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] uppercase block">
                    Excitation Wavelength
                  </span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    515&ndash;520 nm Laser
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] uppercase block">
                    Edge Compute Core
                  </span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    Jetson Orin Nano
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] uppercase block">
                    Development Stage
                  </span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    Benchtop Prototype
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Real Photography */}
            <div className="lg:col-span-5">
              <div className="editorial-card overflow-hidden shadow-lg group">
                <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden bg-[var(--surface-elevated)]">
                  <AuthenticImage
                    src="/images/prism-hero.jpg"
                    alt="PRISM optical laboratory benchtop instrumentation"
                    captionTitle="FIG 01 // Optical Test Bench"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 sm:p-5 border-t border-[var(--border-subtle)] bg-[var(--surface-primary)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span className="font-mono">FIG 01 // Optical Test Bench</span>
                  <span className="text-[11px]">Laboratory Sensor Prototype</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM: ENVIRONMENTAL BOTTLENECK */}
      <section className="py-20 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--surface-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="The Environmental Challenge"
            title="Why microplastic quantification remains bottlenecked."
            description="Microplastic particulates (<5 mm down to micron scales) represent pervasive contaminants in aquatic ecosystems, municipal reservoirs, and industrial wastewater streams."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="editorial-card p-8 space-y-4">
              <span className="text-xs font-mono text-[var(--accent-primary)] font-bold uppercase tracking-wider block">
                Bottleneck 01 // Capital Expense
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Prohibitive Equipment Costs
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Conventional microplastic identification relies heavily on micro-FTIR and confocal Raman microscopy systems costing tens of thousands of dollars, restricting surveillance to centralized academic facilities.
              </p>
            </div>

            <div className="editorial-card p-8 space-y-4">
              <span className="text-xs font-mono text-[var(--accent-primary)] font-bold uppercase tracking-wider block">
                Bottleneck 02 // Turnaround Latency
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Turnaround Time & Delays
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Collecting water grab samples, shipping them off-site, and waiting for technician time introduces weeks of latency before actionable pollution or intake-filtration data is generated.
              </p>
            </div>

            <div className="editorial-card p-8 space-y-4">
              <span className="text-xs font-mono text-[var(--accent-primary)] font-bold uppercase tracking-wider block">
                Bottleneck 03 // Classification Variance
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Operator Error & Bias
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Manual visual inspection of filtered residues under magnification suffers from high inter-operator variability and documented error rates when discriminating translucent synthetic polymers from organic debris.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW THE SYSTEM WORKS (5-Stage Operational Pipeline) */}
      <section id="optical-workflow" className="py-20 lg:py-28 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="5-Stage Operational Pipeline"
            title="The PRISM workflow."
            description="A coordinated physical process combining selective fluorophore binding, monochromatic optical excitation, spectral filtering, and embedded computer vision."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Sample Prep & Staining",
                desc: "Aqueous water samples are pre-filtered to remove coarse organic debris. A lipophilic fluorophore dye binds selectively to hydrophobic polymer surfaces.",
              },
              {
                step: "02",
                title: "Optical Excitation",
                desc: "A calibrated 515–520 nm green laser diode projects collimated optical flux across the chamber, driving bound fluorophores into emission states.",
              },
              {
                step: "03",
                title: "Fluorescence Capture",
                desc: "Optical emissions from excited particulates are gathered through high-aperture macro optics focused onto a sensitive digital CMOS sensor.",
              },
              {
                step: "04",
                title: "Optical Filtration",
                desc: "A precision optical bandpass filter selectively attenuates direct laser backscatter, isolating only the Stoke-shifted fluorescent emission.",
              },
              {
                step: "05",
                title: "AI Image Analysis",
                desc: "Onboard neural networks executed on the NVIDIA Jetson Orin Nano segment glowing particulates, estimate count, and assess morphological profiles.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="editorial-card p-6 flex flex-col justify-between hover:border-[var(--border-primary)] transition-colors"
              >
                <div>
                  <span className="w-8 h-8 rounded-lg bg-[var(--surface-elevated)] text-[var(--accent-primary)] font-mono text-xs font-bold flex items-center justify-center mb-4 border border-[var(--border-subtle)]">
                    {s.step}
                  </span>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Complementary Dual Photo Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="editorial-card overflow-hidden">
              <div className="relative aspect-[16/10] w-full bg-[var(--surface-elevated)]">
                <AuthenticImage
                  src="/images/prism-lab.jpg"
                  alt="Scientific water filtration and fluorophore staining laboratory workflow"
                  captionTitle="FIG 02 // Sample Preparation"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <span className="font-mono">FIG 02 // Sample Preparation</span>
                <span>Pre-filtration & chemical incubation bench</span>
              </div>
            </div>

            <div className="editorial-card overflow-hidden">
              <div className="relative aspect-[16/10] w-full bg-[var(--surface-elevated)]">
                <AuthenticImage
                  src="/images/prism-optics.jpg"
                  alt="Optical laser path alignment and filter assembly"
                  captionTitle="FIG 03 // Optical Emission Alignment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <span className="font-mono">FIG 03 // Optical Emission Alignment</span>
                <span>Laser collimation & sensor aperture setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OPTICAL & AI ARCHITECTURE DIAGRAM */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--surface-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Engineering Architecture"
            title="Optical and computing architecture."
            description="Detailed schematic breakdown of excitation optical paths, wavelength thresholds, sensor interfaces, and the planned NVIDIA Jetson Orin Nano edge platform."
          />

          <TechArchitectureDiagram type="prism" />
        </div>
      </section>

      {/* 5. HARDWARE OVERVIEW (Benchtop Subsystems) */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Subsystem Specification"
            title="Core hardware modules."
            description="Engineered around modular principles to accommodate continuous optical refinement and sensor hardware upgrades."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="editorial-card p-7 space-y-3">
              <div className="flex items-center gap-3">
                <Microscope className="w-5 h-5 text-[var(--accent-primary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Optical Chamber
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Light-tight anodized chassis shielding against ambient photon contamination. Features precision cuvette and slide holders with anti-reflective internal coatings.
              </p>
            </div>

            <div className="editorial-card p-7 space-y-3">
              <div className="flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--accent-primary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Excitation Laser Module
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                515–520 nm diode laser source with integrated constant-current driver, thermal heatsink, and collimating lenses for uniform cross-cell photon distribution.
              </p>
            </div>

            <div className="editorial-card p-7 space-y-3">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-[var(--accent-primary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Jetson Orin Nano Compute
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                NVIDIA Ampere architecture GPU with Tensor Cores and dedicated ARM CPU cluster executing quantized neural segmentation models in real time on-site.
              </p>
            </div>

            <div className="editorial-card p-7 space-y-3">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-[var(--accent-primary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Emission Filter Stack
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Hard-coated optical bandpass filter designed to attenuate excitation scatter while transmitting Stokes-shifted fluorophore light with minimal insertion loss.
              </p>
            </div>

            <div className="editorial-card p-7 space-y-3">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-[var(--accent-primary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Imaging Sensor Assembly
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Low-noise digital CMOS sensor configured for quantum efficiency across the 550–650 nm spectrum, paired with a precision low-distortion optical macro lens.
              </p>
            </div>

            <div className="editorial-card p-7 space-y-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--accent-primary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Local Telemetry & I/O
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Local structured data logging, USB 3.2 dataset export, and optional Ethernet integration for laboratory information systems (LIMS) and field notebooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT STATUS & FUTURE ROADMAP */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--surface-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Current Status */}
            <div className="space-y-6">
              <span className="editorial-tag">
                Current Development Phase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Where PRISM stands today.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                <p>
                  PRISM is currently progressing through active benchtop prototyping and optical characterization. Current laboratory efforts focus on:
                </p>
                <ul className="space-y-3 font-mono text-xs sm:text-sm text-[var(--text-primary)]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>Calibrating 515–520 nm laser diode excitation uniformity</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>Evaluating fluorophore binding kinetics on polyethylene & polystyrene</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>Compiling synthetic training datasets for edge segmentation models</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>Validating optical filter cut-off performance against direct backscatter</span>
                  </li>
                </ul>

                <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)] block mb-1">Empirical Disclosure:</strong>
                  Vyoka Labs does not publish finalized detection accuracy percentages or polymer differentiation tables prior to formal peer calibration and field trials.
                </div>
              </div>
            </div>

            {/* Future Roadmap */}
            <div className="space-y-6">
              <span className="editorial-tag">
                Engineering Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Planned system iterations.
              </h2>
              <div className="space-y-4">
                {[
                  {
                    phase: "Phase 1: Benchtop Qualification",
                    desc: "Rigorous synthetic particulate trials across controlled size grades (100 µm to 1 mm) to quantify optical signal-to-noise ratios.",
                  },
                  {
                    phase: "Phase 2: Edge Model Optimization",
                    desc: "TensorRT model deployment on NVIDIA Jetson Orin Nano with real-time particle bounding and morphological feature classification.",
                  },
                  {
                    phase: "Phase 3: Automated Fluidics Module",
                    desc: "Designing an integrated microfluidic / flow-cell attachment to automate sample staining and cuvette clearing.",
                  },
                ].map((item) => (
                  <div
                    key={item.phase}
                    className="editorial-card p-5"
                  >
                    <h3 className="text-sm font-bold text-[var(--text-primary)]">
                      {item.phase}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            align="center"
            tag="Technical Clarity"
            title="Frequently asked questions."
            description="Transparent answers regarding PRISM's technical methodology, physical constraints, and current scope."
          />

          <FaqAccordion items={prismFaqs} theme="auto" />
        </div>
      </section>

      {/* 8. COLLABORATION CTA */}
      <section className="py-20 lg:py-24 bg-[var(--surface-primary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="editorial-card p-8 sm:p-14 space-y-6">
            <span className="editorial-tag">
              Academic & Industrial Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Interested in participating in PRISM validation trials?
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              We welcome collaborative dialogues with environmental researchers, municipal water agencies, and analytical instrumentation specialists.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?product=prism"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span>Request Technical Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <span>Explore All Products</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
