import React from "react";
import type { Metadata } from "next";
import AboutView from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About Us — Engineering Intelligence for the Physical World",
  description:
    "Vyoka Labs Private Limited is an engineering-led deep-tech venture developing intelligent systems across optical environmental sensing, autonomous robotics, and edge computing.",
};

export default function AboutPage() {
  return <AboutView />;
}
