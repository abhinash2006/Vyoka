"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setProductsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenus = () => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-[var(--bg-primary)]/95 backdrop-blur-md border-[var(--border-primary)] py-3 shadow-xs"
          : "bg-[var(--bg-primary)]/80 backdrop-blur-sm border-[var(--border-subtle)] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* 1. Left: Typographic Brand Wordmark */}
          <Link
            href="/"
            onClick={closeMenus}
            className="flex items-baseline gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-sm"
            aria-label="Vyoka Labs Private Limited — Home"
          >
            <span className="text-lg font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
              Vyoka Labs
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
              Private Limited
            </span>
          </Link>

          {/* 2. Centre: Balanced Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium" aria-label="Main Navigation">
            <Link
              href="/"
              onClick={closeMenus}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                isActive("/") && pathname === "/"
                  ? "text-[var(--text-primary)] font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProductsDropdownOpen((prev) => !prev)}
                aria-expanded={productsDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors ${
                  isActive("/products")
                    ? "text-[var(--text-primary)] font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsDropdownOpen ? "rotate-180 text-[var(--accent-primary)]" : "text-[var(--text-muted)]"
                  }`}
                />
              </button>

              {productsDropdownOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-72 p-2 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-secondary)] shadow-lg z-50 text-xs animate-in fade-in zoom-in-95 duration-150"
                >
                  <Link
                    href="/products/prism"
                    onClick={closeMenus}
                    role="menuitem"
                    className="block p-3 rounded-md hover:bg-[var(--bg-surface)] transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)]">
                        PRISM
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">Optical Sensing</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-1 leading-normal">
                      Optical and AI-assisted microplastic detection in water samples.
                    </p>
                  </Link>

                  <Link
                    href="/products/gravitas"
                    onClick={closeMenus}
                    role="menuitem"
                    className="block p-3 rounded-md hover:bg-[var(--bg-surface)] transition-colors group mt-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)]">
                        GRAVITAS
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">Autonomous UAV</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-1 leading-normal">
                      Modular heavy-lift drone for logistics and flood disaster relief.
                    </p>
                  </Link>

                  <div className="border-t border-[var(--border-subtle)] my-1 pt-1">
                    <Link
                      href="/products"
                      onClick={closeMenus}
                      role="menuitem"
                      className="flex items-center justify-between px-3 py-2 rounded-md text-[11px] font-medium text-[var(--accent-primary)] hover:bg-[var(--bg-surface)] transition-colors"
                    >
                      <span>All Products Overview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={closeMenus}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                isActive("/about")
                  ? "text-[var(--text-primary)] font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenus}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                isActive("/contact")
                  ? "text-[var(--text-primary)] font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* 3. Right: Theme Toggle & Understated CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Link
              href="/contact"
              onClick={closeMenus}
              className="btn-primary"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-md border border-[var(--border-primary)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-primary)] bg-[var(--bg-primary)] px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={closeMenus}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/"
                  ? "bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Home
            </Link>

            <div className="pt-2 pb-1 px-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                Products
              </span>
            </div>

            <Link
              href="/products/prism"
              onClick={closeMenus}
              className="px-4 py-2 rounded-md text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] flex items-center justify-between"
            >
              <span>PRISM (Optical Sensing)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </Link>

            <Link
              href="/products/gravitas"
              onClick={closeMenus}
              className="px-4 py-2 rounded-md text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] flex items-center justify-between"
            >
              <span>GRAVITAS (Heavy-Lift UAV)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </Link>

            <Link
              href="/products"
              onClick={closeMenus}
              className="px-4 py-1.5 text-xs text-[var(--accent-primary)] hover:underline"
            >
              View all products →
            </Link>

            <div className="border-t border-[var(--border-subtle)] my-2" />

            <Link
              href="/about"
              onClick={closeMenus}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname.startsWith("/about")
                  ? "bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenus}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname.startsWith("/contact")
                  ? "bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="pt-3 border-t border-[var(--border-primary)] flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={closeMenus}
              className="btn-primary w-full text-center"
            >
              Discuss a Collaboration
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
