"use client";

import React from "react";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center flex flex-col items-center" : "text-left"
      } ${className}`}
    >
      {tag && (
        <span className="editorial-tag mb-3 block">
          {tag}
        </span>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.18]">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-3.5 text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
