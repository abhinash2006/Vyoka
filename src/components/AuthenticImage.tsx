"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Camera } from "lucide-react";

interface AuthenticImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  captionTitle?: string;
}

/**
 * AuthenticImage wraps Next.js Image with:
 * 1. Graceful fallback recovery if an asset is missing or fails to load.
 * 2. Visual layout preservation (prevents blank black rectangles or broken image icons).
 * 3. Smooth fade-in on load to prevent jarring layout shift.
 * 4. Transparent development diagnostics logging.
 */
export default function AuthenticImage({
  src,
  alt,
  fallbackSrc = "/images/hero-engineering.jpg",
  captionTitle,
  className = "",
  ...props
}: AuthenticImageProps) {
  const [prevSrc, setPrevSrc] = useState(src);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fallbackFailed, setFallbackFailed] = useState(false);

  if (prevSrc !== src) {
    setPrevSrc(src);
    setCurrentSrc(src);
    setFallbackFailed(false);
    setIsLoaded(false);
  }

  const handleError = () => {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[AuthenticImage] Asset failed to load: ${currentSrc}`);
    }

    if (currentSrc !== fallbackSrc && !fallbackFailed) {
      setCurrentSrc(fallbackSrc);
    } else {
      setFallbackFailed(true);
    }
  };

  if (fallbackFailed) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] select-none ${className}`}
        role="img"
        aria-label={alt || "Image unavailable"}
      >
        <div className="w-10 h-10 rounded-lg bg-[var(--surface-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] mb-2">
          <Camera className="w-5 h-5 opacity-60" />
        </div>
        <p className="text-xs font-mono font-bold text-[var(--text-primary)]">
          {captionTitle || "ARCHIVAL PHOTOGRAPH"}
        </p>
        <p className="text-[11px] text-[var(--text-secondary)] mt-1 max-w-xs leading-snug">
          {alt || "Engineering reference photograph being calibrated."}
        </p>
        {process.env.NODE_ENV !== "production" && (
          <span className="text-[10px] font-mono text-[var(--accent-primary)] mt-2 opacity-70">
            Path: {typeof src === "string" ? src : "dynamic-src"}
          </span>
        )}
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
      className={`${className} transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      {...props}
    />
  );
}
