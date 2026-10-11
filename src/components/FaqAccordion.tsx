"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  theme?: "dark" | "light" | "auto";
}

export default function FaqAccordion({ items, theme = "auto" }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3.5">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              theme === "light"
                ? isOpen
                  ? "bg-white border-[#DAD8D1] shadow-sm"
                  : "bg-white/80 border-[#DAD8D1]/70 hover:border-[#DAD8D1]"
                : theme === "dark"
                ? isOpen
                  ? "bg-[#191D20] border-[#343A3E] shadow-sm"
                  : "bg-[#191D20]/60 border-[#343A3E]/70 hover:border-[#343A3E]"
                : isOpen
                ? "bg-[var(--surface-elevated)] border-[var(--border-primary)] shadow-sm"
                : "bg-[var(--surface-primary)] border-[var(--border-subtle)] hover:border-[var(--border-primary)]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-btn-${item.id}`}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] text-[var(--text-primary)]"
            >
              <span className="text-base sm:text-lg font-bold pr-4 leading-snug">
                {item.question}
              </span>
              <span
                className={`p-2 rounded-lg shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 bg-[var(--accent-primary)] text-white"
                    : "bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)]">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
