"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  organization: string;
  enquiryType: string;
  productOfInterest: string;
  message: string;
  consent: boolean;
  hp_website: string; // Honeypot
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    enquiryType: "general",
    productOfInterest: "general",
    message: "",
    consent: false,
    hp_website: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
    isDevMode?: boolean;
  } | null>(null);

  const validateClient = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please provide your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid institutional or business email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please enter a message of at least 10 characters.";
    }

    if (!formData.consent) {
      errs.consent = "You must acknowledge the privacy consent terms to proceed.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateClient()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus({
          success: true,
          message: data.message,
          isDevMode: data.isDevMode,
        });
        setFormData({
          name: "",
          email: "",
          organization: "",
          enquiryType: "general",
          productOfInterest: "general",
          message: "",
          consent: false,
          hp_website: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message:
            data.error ||
            "Unable to submit enquiry at this time. Please contact us directly via email.",
        });
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: "A network error occurred. Please verify your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="editorial-card p-6 sm:p-8 lg:p-10 space-y-8">
      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="alert"
            className={`p-5 rounded-xl flex items-start gap-3.5 border ${
              submitStatus.success
                ? "bg-[var(--accent-primary)]/10 border-[var(--accent-primary)]/30 text-[var(--text-primary)]"
                : "bg-red-500/10 border-red-500/30 text-[var(--text-primary)]"
            }`}
          >
            {submitStatus.success ? (
              <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-[var(--text-primary)]">
                {submitStatus.success ? "Enquiry Received" : "Enquiry Submission Notice"}
              </h4>
              <p className="text-sm text-[var(--text-secondary)]">{submitStatus.message}</p>
              {submitStatus.isDevMode && (
                <p className="text-xs font-mono text-[var(--accent-primary)] mt-1">
                  Local Dev Notice: Message written safely to development console / log.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Honeypot field (hidden from genuine users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="hp_website">Leave this field empty</label>
          <input
            type="text"
            id="hp_website"
            name="hp_website"
            value={formData.hp_website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-2"
            >
              Full Name <span className="text-[var(--accent-primary)]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="e.g. Dr. Rajesh Kumar"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-all ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[var(--border-primary)]"
              }`}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-red-500 mt-1.5 font-mono">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-2"
            >
              Institutional / Work Email <span className="text-[var(--accent-primary)]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="e.g. rajesh@organization.org"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-all ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[var(--border-primary)]"
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-500 mt-1.5 font-mono">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Organization */}
        <div>
          <label
            htmlFor="organization"
            className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-2"
          >
            Organization / Institution <span className="text-[var(--text-secondary)] text-[10px] lowercase font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="e.g. National Water Authority or Aerial Logistics Group"
            className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-all"
          />
        </div>

        {/* Row 3: Enquiry Type & Product Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="enquiryType"
              className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-2"
            >
              Enquiry Classification <span className="text-[var(--accent-primary)]">*</span>
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-all"
            >
              <option value="general">General Inquiry</option>
              <option value="prism">PRISM Technical Inquiry</option>
              <option value="gravitas">GRAVITAS UAV Inquiry</option>
              <option value="pilot">Pilot Trial or Demonstration</option>
              <option value="research">Academic Research Collaboration</option>
              <option value="partnership">Commercial Partnership</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="productOfInterest"
              className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-2"
            >
              Product of Interest <span className="text-[var(--accent-primary)]">*</span>
            </label>
            <select
              id="productOfInterest"
              name="productOfInterest"
              value={formData.productOfInterest}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-all"
            >
              <option value="general">Vyoka Labs (Parent Portfolio)</option>
              <option value="prism">PRISM (Optical Microplastics)</option>
              <option value="gravitas">GRAVITAS (Heavy-Lift Drone)</option>
              <option value="both">Both Platforms</option>
            </select>
          </div>
        </div>

        {/* Message with live character counter */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="message"
              className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold"
            >
              Operational Requirements or Message <span className="text-[var(--accent-primary)]">*</span>
            </label>
            <span className="text-[11px] font-mono text-[var(--text-secondary)]">
              {formData.message.length} / 4000
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Please describe your operational parameters, water testing volume, or flight payload targets..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-all ${
              errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-[var(--border-primary)]"
            }`}
          />
          {errors.message && (
            <p id="message-error" className="text-xs text-red-500 mt-1.5 font-mono">
              {errors.message}
            </p>
          )}
        </div>

        {/* Privacy Consent Checkbox */}
        <div className="space-y-1">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.consent)}
              className="mt-1 w-4 h-4 rounded border-[var(--border-primary)] text-[var(--accent-primary)] focus:ring-[var(--accent-primary)]"
            />
            <span className="text-xs text-[var(--text-secondary)] leading-relaxed">
              I consent to Vyoka Labs Private Limited processing this information solely to review and respond to this technical enquiry in accordance with the{" "}
              <a href="/privacy" className="text-[var(--accent-primary)] underline underline-offset-2 hover:opacity-80">
                Privacy Policy
              </a>
              . No spam or third-party sharing.
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-red-500 font-mono pl-7">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Technical Enquiry</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
