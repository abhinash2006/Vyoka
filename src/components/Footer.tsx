import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;
  const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "contact@vyokalabs.com";
  const companyLocation = process.env.NEXT_PUBLIC_COMPANY_LOCATION || "Bengaluru, Karnataka, India";

  return (
    <footer className="border-t border-[var(--border-primary)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[var(--border-subtle)]">
          {/* Brand & Purpose Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-baseline gap-2 group"
              aria-label="Vyoka Labs Private Limited"
            >
              <span className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
                Vyoka Labs
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
                Private Limited
              </span>
            </Link>

            <p className="text-sm text-[var(--text-secondary)] max-w-sm leading-relaxed">
              Developing practical technology across environmental sensing, optical analysis, and autonomous aerial systems.
            </p>

            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Parent venture for the PRISM optical microplastic detection system and the GRAVITAS modular heavy-lift UAV platform.
            </p>
          </div>

          {/* Products Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products/prism"
                  className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>PRISM</span>
                  <span className="text-[11px] text-[var(--text-muted)]">Optical Sensing</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/gravitas"
                  className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>GRAVITAS</span>
                  <span className="text-[11px] text-[var(--text-muted)]">Heavy-Lift UAV</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-xs text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <span>Portfolio Overview</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[var(--text-primary)] transition-colors">
                  About Vyoka Labs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--text-primary)] transition-colors">
                  Technical Enquiries
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">
                  Privacy & Data Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Office
            </h3>
            <div className="text-sm space-y-1.5 leading-relaxed">
              <p className="text-[var(--text-primary)] font-medium">Vyoka Labs Private Limited</p>
              <p className="text-xs text-[var(--text-secondary)]">{companyLocation}</p>
              <p className="pt-1">
                <a
                  href={`mailto:${companyEmail}`}
                  className="text-xs font-mono text-[var(--accent-primary)] hover:underline"
                >
                  {companyEmail}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-sans">
          <p>
            &copy; {currentYear} Vyoka Labs Private Limited. All rights reserved.
          </p>
          <p className="text-[11px]">
            Intelligence, engineered for the physical world.
          </p>
        </div>
      </div>
    </footer>
  );
}
