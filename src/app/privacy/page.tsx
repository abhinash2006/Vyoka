import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Data Protection & Privacy Terms",
  description:
    "Privacy Policy for Vyoka Labs Private Limited describing how enquiry information, communications, and website interactions are handled.",
};

export default function PrivacyPolicyPage() {
  const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "contact@vyokalabs.com";

  return (
    <div className="flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* 1. EDITORIAL HEADER */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--surface-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="editorial-tag">
              Data Stewardship
            </span>
            <span className="text-xs font-mono text-[var(--text-secondary)]">
              Vyoka Labs Private Limited &bull; Bengaluru, India
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
            Privacy Policy & Data Handling
          </h1>

          <p className="text-sm font-mono text-[var(--text-secondary)]">
            Effective Date: October 2026 &bull; Version 2.0 &bull; Corporate Governance
          </p>
        </div>
      </section>

      {/* 2. MAIN POLICY CONTENT */}
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {/* Introductory Statement */}
            <div className="editorial-card p-6 sm:p-8 space-y-3">
              <h2 className="text-base font-bold text-[var(--text-primary)]">
                Our Commitment to Privacy
              </h2>
              <p>
                <strong>Vyoka Labs Private Limited</strong> is committed to operating with transparency, technical rigor, and respect for user privacy. This policy explains what information we collect when you browse our website or communicate with us, why we collect it, how it is secured, and your rights concerning your personal records.
              </p>
            </div>

            {/* Section 1 */}
            <div className="editorial-card p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-3">
                <span className="text-sm font-mono text-[var(--accent-primary)] px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                  01
                </span>
                <span>Information We Collect</span>
              </h2>
              <p>
                We do not collect personal data from passive visitors simply reading our site. We collect information only when you intentionally provide it through our contact forms or direct email correspondence:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-[var(--text-primary)]">
                <li>Your full name</li>
                <li>Your institutional or business email address</li>
                <li>Organization or academic institution name (if provided)</li>
                <li>Enquiry classification (General, PRISM, GRAVITAS, Pilot Trials, Research)</li>
                <li>Message content describing your operational requirements</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="editorial-card p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-3">
                <span className="text-sm font-mono text-[var(--accent-primary)] px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                  02
                </span>
                <span>Purpose of Data Processing</span>
              </h2>
              <p>
                Submitted information is utilized solely to facilitate genuine engineering dialogue:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Evaluating and responding to technical enquiries and product specifications.</li>
                <li>Structuring collaborative validation pilots for PRISM or flight trials for GRAVITAS.</li>
                <li>Drafting research agreements with university laboratories and public utilities.</li>
                <li>Maintaining administrative communication history necessary for professional correspondence.</li>
              </ul>
              <div className="p-4 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs text-[var(--accent-primary)] font-mono">
                ZERO MONETIZATION: We never sell, rent, monetize, or distribute your contact details to third-party advertisers or data brokers.
              </div>
            </div>

            {/* Section 3 */}
            <div className="editorial-card p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-3">
                <span className="text-sm font-mono text-[var(--accent-primary)] px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                  03
                </span>
                <span>Cookies and Tracking</span>
              </h2>
              <p>
                The Vyoka Labs corporate website does not employ invasive advertising tracking, behavior profiling cookies, or third-party marketing beacons. Minimal functional cookies may be used solely for session stability, theme preference persistence (light/dark mode), and basic security safeguards.
              </p>
            </div>

            {/* Section 4 */}
            <div className="editorial-card p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-3">
                <span className="text-sm font-mono text-[var(--accent-primary)] px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                  04
                </span>
                <span>Data Security & Retention</span>
              </h2>
              <p>
                All data transmission between your browser and our servers is encrypted using modern TLS protocols. Technical enquiry data is stored in access-controlled environments accessible only to authorized staff directly tasked with responding to inquiries. We retain correspondence records only for as long as necessary to support ongoing technical discussions or fulfill legal obligations.
              </p>
            </div>

            {/* Section 5 */}
            <div className="editorial-card p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-3">
                <span className="text-sm font-mono text-[var(--accent-primary)] px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                  05
                </span>
                <span>Your Data Rights & Contact</span>
              </h2>
              <p>
                You retain the right to request a copy of any personal data you have submitted to us, request corrections to inaccurate records, or request complete deletion of your contact information from our active records.
              </p>
              <p>
                To make any privacy inquiry or request data deletion, contact us directly at:
              </p>
              <div className="pt-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
                <a
                  href={`mailto:${companyEmail}`}
                  className="text-sm font-mono text-[var(--accent-primary)] underline underline-offset-2 hover:opacity-85"
                >
                  {companyEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
