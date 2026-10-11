import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-lg w-full text-center space-y-8">
        <span className="editorial-tag">
          Page Not Found
        </span>

        <div className="space-y-3">
          <h1 className="text-7xl sm:text-8xl font-black font-mono tracking-tighter text-[var(--text-primary)]">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
            The requested page does not exist.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto">
            The URL you followed may be incorrect, or the page may have been moved. Return to the homepage or explore our engineering products.
          </p>
        </div>

        {/* Primary Navigation Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/products"
            className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>View All Products</span>
          </Link>
        </div>

        {/* Direct Product Dossier Links */}
        <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-4 text-left">
          <Link
            href="/products/prism"
            className="editorial-card p-4 hover:border-[var(--border-primary)] transition-colors group"
          >
            <span className="text-[11px] font-mono uppercase text-[var(--accent-primary)] font-bold block">
              PRISM
            </span>
            <span className="text-xs font-bold text-[var(--text-primary)] mt-1 flex items-center justify-between">
              <span>Optical Detection</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors" />
            </span>
          </Link>

          <Link
            href="/products/gravitas"
            className="editorial-card p-4 hover:border-[var(--border-primary)] transition-colors group"
          >
            <span className="text-[11px] font-mono uppercase text-[var(--accent-secondary)] font-bold block">
              GRAVITAS
            </span>
            <span className="text-xs font-bold text-[var(--text-primary)] mt-1 flex items-center justify-between">
              <span>Heavy-Lift UAV</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-[var(--accent-secondary)] transition-colors" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
