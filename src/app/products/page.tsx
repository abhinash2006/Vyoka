import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Layers, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products Portfolio — PRISM & GRAVITAS",
  description:
    "Explore Vyoka Labs' intelligent engineering products: PRISM optical microplastic detection and GRAVITAS modular autonomous heavy-lift UAV.",
};

export default function ProductsOverviewPage() {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="py-16 lg:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="editorial-tag">
              Product Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.12]">
              Intelligent systems built for physical reality.
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Vyoka Labs is developing two distinct technology platforms engineered around deep operational friction: high-fidelity environmental microplastic monitoring and heavy-lift autonomous aerial mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Showcases */}
      <section className="py-20 lg:py-24 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* PRISM Showcase */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-[var(--accent-primary)] font-semibold tracking-wider">
                  Platform 01 // Environmental Optics
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-1">
                  PRISM Detection System
                </h2>
              </div>
              <Link
                href="/products/prism"
                className="text-xs font-semibold text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1"
              >
                <span>Full Technical Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <ProductCard productKey="prism" reversed={false} />
          </div>

          {/* GRAVITAS Showcase */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-[var(--accent-secondary)] font-semibold tracking-wider">
                  Platform 02 // Autonomous Aerial Robotics
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-1">
                  GRAVITAS UAV Platform
                </h2>
              </div>
              <Link
                href="/products/gravitas"
                className="text-xs font-semibold text-[var(--accent-secondary)] hover:underline inline-flex items-center gap-1"
              >
                <span>Full Technical Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <ProductCard productKey="gravitas" reversed={true} />
          </div>
        </div>
      </section>

      {/* Core Engineering Synergy */}
      <section className="py-20 lg:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Architectural Convergence"
            title="Common engineering foundations."
            description="While PRISM and GRAVITAS address distinct end-user problems, both platforms share Vyoka Labs' core embedded computing, computer vision, and systems engineering foundations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="editorial-card p-8 space-y-3">
              <div className="w-10 h-10 rounded-md bg-[var(--bg-surface)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--accent-primary)]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Embedded Edge Intelligence
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Rather than relying on continuous cloud backhauls, both platforms perform critical vision inference and state determination locally using hardware accelerators (NVIDIA Jetson / onboard companion compute).
              </p>
            </div>

            <div className="editorial-card p-8 space-y-3">
              <div className="w-10 h-10 rounded-md bg-[var(--bg-surface)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--accent-secondary)]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Modular Subsystem Design
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Both architectures separate mechanical enclosures, optical/payload modules, and computation boards into serviceable, upgradeable subsystems that iterate independently.
              </p>
            </div>

            <div className="editorial-card p-8 space-y-3">
              <div className="w-10 h-10 rounded-md bg-[var(--bg-surface)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--accent-primary)]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Empirical Validation Standard
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We avoid unverified marketing claims. Subsystem performance figures are subjected to lab calibration and benchtop telemetry before operational qualification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Enquiry CTA */}
      <section className="py-20 lg:py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="editorial-card p-10 sm:p-14 max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              Interested in evaluating PRISM or GRAVITAS?
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
              We are actively coordinating pilot trials with municipal testing teams, water management bodies, and emergency logistics operators.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Request Technical Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/" className="btn-secondary">
                <span>Return to Overview</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
