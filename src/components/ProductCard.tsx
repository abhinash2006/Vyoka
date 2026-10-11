"use client";

import React, { useState } from "react";
import AuthenticImage from "@/components/AuthenticImage";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { productConfig, getProductCtaInfo } from "@/config/products";

interface ProductCardProps {
  productKey: "prism" | "gravitas";
  reversed?: boolean;
}

export default function ProductCard({
  productKey,
  reversed = false,
}: ProductCardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "specs">("overview");
  const product = productConfig[productKey];
  const ctaInfo = getProductCtaInfo(productKey);
  const isPrism = productKey === "prism";

  const specs = isPrism
    ? [
        { label: "Target Domain", value: "Aqueous Microplastic Screening" },
        { label: "Excitation Source", value: "515–520 nm Green Laser Diode" },
        { label: "Emission Capture", value: "Stokes-Shift Fluorescence Optical Filter" },
        { label: "Compute Platform", value: "NVIDIA Jetson Orin Nano Edge Module" },
        { label: "Analysis Method", value: "Computer Vision Particulate Segmentation" },
        { label: "Intended Portability", value: "Benchtop / Field Deployable Chassis" },
      ]
    : [
        { label: "Vehicle Class", value: "Industrial Heavy-Lift Multirotor UAV" },
        { label: "Flight Controller", value: "Pixhawk Autopilot (Triple-Redundant IMU)" },
        { label: "Companion Compute", value: "Ruggedized Linux / ROS2 Companion Core" },
        { label: "Payload Architecture", value: "Interchangeable Pod & Winch Hoist" },
        { label: "Primary Operations", value: "Severed Road Freight & Flood Relief Delivery" },
        { label: "Telemetry Backhaul", value: "Dual Cellular + Long-Range RF Telemetry" },
      ];

  return (
    <article
      id={productKey}
      className={`editorial-card p-6 sm:p-10 lg:p-12 ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex flex-col lg:flex-row gap-10 lg:gap-14 items-center`}
    >
      {/* Visual / Photographic Panel */}
      <div className="lg:w-1/2 w-full space-y-2">
        <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-surface)]">
          <AuthenticImage
            src={product.heroImage}
            alt={`${product.name} — ${product.fullName}`}
            captionTitle={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
        <p className="text-[11px] text-[var(--text-muted)] font-sans px-1">
          {isPrism
            ? "Optical chamber integration and sample fluorophore response."
            : "Industrial multirotor airframe undergoing flight evaluation."}
        </p>
      </div>

      {/* Editorial Content Panel */}
      <div className="lg:w-1/2 w-full space-y-6">
        {/* Category & Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
          <span className="editorial-tag">
            {isPrism ? "Optical Sensing" : "Heavy-Lift Flight"}
          </span>

          {/* Clean Segmented Tab Switcher */}
          <div className="inline-flex rounded-md border border-[var(--border-primary)] bg-[var(--bg-primary)] p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`px-3 py-1 rounded-sm transition-colors ${
                activeTab === "overview"
                  ? "bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold shadow-xs"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("specs")}
              className={`px-3 py-1 rounded-sm transition-colors ${
                activeTab === "specs"
                  ? "bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold shadow-xs"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Specifications
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
            {product.name}
          </h3>
          <p className="text-xs font-mono text-[var(--text-muted)] mt-1">
            {product.fullName}
          </p>
        </div>

        {activeTab === "overview" ? (
          <div className="space-y-4">
            <p className="text-base font-medium text-[var(--text-primary)] italic leading-relaxed">
              &ldquo;{product.headline}&rdquo;
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {product.description}
            </p>

            {/* Feature points */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Key Engineering Focus
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                {product.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
              Preliminary Subsystem Specifications
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specs.map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)]"
                >
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">
                    {item.label}
                  </span>
                  <span className="text-xs font-semibold text-[var(--text-primary)] mt-0.5 block">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[var(--text-muted)] pt-1">
              * Note: Parameters subject to ongoing experimental validation and hardware iteration.
            </p>
          </div>
        )}

        {/* Action CTAs */}
        <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-3">
          {ctaInfo.isExternal ? (
            <a
              href={ctaInfo.primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>{ctaInfo.primaryLabel}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <Link href={ctaInfo.primaryHref} className="btn-primary">
              <span>{ctaInfo.primaryLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}

          <Link href={ctaInfo.internalHref} className="btn-secondary">
            <span>{ctaInfo.secondaryLabel}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
