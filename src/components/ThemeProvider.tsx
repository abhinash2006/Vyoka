"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyThemeToDocument(resolved: ResolvedTheme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("data-theme", resolved);
  if (resolved === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    let stored: Theme = "light";
    try {
      stored = (localStorage.getItem("vyoka-theme") as Theme) || "light";
    } catch {
      // Fallback
    }

    const resolved = stored === "system" ? getSystemTheme() : stored;
    applyThemeToDocument(resolved);

    // Defer state update to next microtask/animation frame to avoid cascading render warning
    const id = requestAnimationFrame(() => {
      setThemeState(stored);
      setResolvedTheme(resolved);
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      try {
        const currentStored = (localStorage.getItem("vyoka-theme") as Theme) || "light";
        if (currentStored === "system") {
          const sys = mediaQuery.matches ? "dark" : "light";
          applyThemeToDocument(sys);
          setResolvedTheme(sys);
        }
      } catch {
        // Fallback
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      cancelAnimationFrame(id);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("vyoka-theme", newTheme);
    } catch {
      // Ignore localStorage errors
    }
    const resolved = newTheme === "system" ? getSystemTheme() : newTheme;
    setResolvedTheme(resolved);
    applyThemeToDocument(resolved);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
