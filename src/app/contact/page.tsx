import React from "react";
import type { Metadata } from "next";
import ContactView from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact & Technical Enquiries",
  description:
    "Get in touch with Vyoka Labs Private Limited regarding PRISM optical microplastic detection, GRAVITAS heavy-lift UAV systems, pilot trials, or engineering collaboration.",
};

export default function ContactPage() {
  return <ContactView />;
}
