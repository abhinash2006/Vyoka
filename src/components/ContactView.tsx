"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactView() {
  const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "contact@vyokalabs.com";
  const companyLocation = process.env.NEXT_PUBLIC_COMPANY_LOCATION || "Bengaluru, Karnataka, India";

  const [copied, setCopied] = useState(false);
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setIstTime(formatted);
      } catch {
        setIstTime("09:00 AM IST");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(companyEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* 1. EDITORIAL HEADER */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--surface-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="editorial-tag">
              Direct Technical Dialogue
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
              Talk to our engineering team.
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
              Whether you are evaluating PRISM for optical water screening, discussing GRAVITAS flight specifications, or structuring an institutional research collaboration, we are ready to discuss your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN GRID: FORM + CONTACT DETAILS */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold block mb-1">
                  Enquiry Dispatch
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  Direct Technical Inquiry
                </h2>
              </div>

              <ContactForm />
            </div>

            {/* Office & Direct Details Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Corporate Office Card */}
              <div className="editorial-card p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    Corporate Office
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                    HQ
                  </span>
                </div>

                <div className="space-y-5 text-sm text-[var(--text-secondary)]">
                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[var(--text-primary)] block mb-0.5">
                        Physical Location
                      </span>
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        Vyoka Labs Private Limited
                      </span>
                      <span className="block text-xs text-[var(--text-secondary)] mt-0.5">
                        {companyLocation}
                      </span>
                    </div>
                  </div>

                  {/* Direct Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-bold text-[var(--text-primary)] block mb-0.5">
                        Direct Email Channel
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <a
                          href={`mailto:${companyEmail}`}
                          className="text-sm font-mono text-[var(--accent-primary)] hover:underline truncate"
                        >
                          {companyEmail}
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          title="Copy email address"
                          className="p-1 rounded hover:bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors shrink-0"
                        >
                          {copied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Office Hours & Time */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[var(--text-primary)] block mb-0.5">
                        Operational Timezone
                      </span>
                      <span className="block text-xs text-[var(--text-secondary)]">
                        Monday &ndash; Friday &bull; 09:30 &ndash; 18:30 IST
                      </span>
                      <span className="block text-xs font-mono text-[var(--accent-primary)] mt-1">
                        Current Time: {istTime || "UTC+05:30"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
                  <span>Typical enquiry response turnaround: 24 to 48 business hours.</span>
                </div>
              </div>

              {/* Research Collaboration Card */}
              <div className="editorial-card p-6 sm:p-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold block">
                  Institutional Collaborations
                </span>
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  Academic & Testing Alliances
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  We actively evaluate joint validation opportunities with accredited environmental science departments, civil aviation test centers, and water treatment utilities.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent-primary)] hover:underline"
                  >
                    <span>Read about our development ethos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
