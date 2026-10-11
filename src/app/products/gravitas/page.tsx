import React from "react";
import type { Metadata } from "next";
import AuthenticImage from "@/components/AuthenticImage";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Cpu,
  Radio,
  Anchor,
  CheckCircle2,
  Box,
  Truck,
  HeartPulse,
  ChevronRight,
  ShieldCheck,
  Layers,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import TechArchitectureDiagram from "@/components/TechArchitectureDiagram";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import { getProductCtaInfo } from "@/config/products";

export const metadata: Metadata = {
  title: "GRAVITAS — Modular Heavy-Lift Autonomous Drone Platform",
  description:
    "GRAVITAS is a modular autonomous heavy-lift UAV concept developed by Vyoka Labs for commercial middle-mile logistics and flood disaster relief operations.",
};

export default function GravitasProductPage() {
  const ctaInfo = getProductCtaInfo("gravitas");

  const gravitasFaqs: FaqItem[] = [
    {
      id: "payload-limits",
      question: "What are the targeted payload capacity and endurance specifications of GRAVITAS?",
      answer:
        "Preliminary engineering targets specify modular payload capacities up to 15 kg for short-to-medium radius operations. However, final verified endurance (hover and cruise time) and maximum operational payload are dependent on battery chemistry, ambient temperature, aerodynamic drag of the chosen cargo pod, and motor thermal limits. Vyoka Labs reports all flight envelope figures as project documentation targets subject to ongoing subsystem testing rather than unverified operational guarantees.",
    },
    {
      id: "winch-system",
      question: "How does the proposed motorized winch delivery mechanism operate?",
      answer:
        "In flood disaster zones and rugged terrain where safe landing zones do not exist, landing a heavy-lift multirotor presents extreme risk. GRAVITAS incorporates a tethered winch delivery subsystem that allows the drone to maintain a stable hover 15 to 30 meters above obstructions while lowering emergency supply pods via an auto-release tether, verifying touchdown before retracting.",
    },
    {
      id: "bvlos-approvals",
      question: "Is GRAVITAS certified for Beyond Visual Line of Sight (BVLOS) operations?",
      answer:
        "BVLOS flight capability is integrated architecturally through dual LTE cellular telemetry, companion computing, and redundant GPS failsafes. However, civil aviation regulatory authorization (such as DGCA guidelines in India) requires structured operational safety cases, geocaging compliance, and flight test data. Certified commercial BVLOS deployments remain contingent on aviation authority approvals.",
    },
    {
      id: "weather",
      question: "Can GRAVITAS operate in extreme monsoon weather and severe storm conditions?",
      answer:
        "The airframe is designed to achieve an IP-rated ingress protection standard for moisture and wind resistance. However, operational limits in heavy precipitation, wind gusts exceeding motor stability limits, or lightning environments remain constrained by basic rotorcraft physics. Flight envelope parameters are systematically determined during ongoing environmental wind-tunnel and field trials.",
    },
    {
      id: "flight-stack",
      question: "What flight control architecture powers GRAVITAS?",
      answer:
        "GRAVITAS utilizes an open-standards Pixhawk industrial autopilot running PX4/ArduPilot flight stacks for low-level motor mixing, triple-redundant IMU state estimation, and sensor fusion. High-level autonomy, obstacle perception, and dynamic waypoint re-routing are managed by an onboard companion edge computer communicating via MAVLink.",
    },
  ];

  return (
    <div className="flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* 1. EDITORIAL HERO */}
      <section className="relative py-20 lg:py-28 border-b border-[var(--border-subtle)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="editorial-tag">
                  Autonomous Aerial Systems
                </span>
                <span className="text-xs font-mono text-[var(--text-secondary)]">
                  Pixhawk Autopilot &bull; Companion Edge
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
                  One aerial platform. Multiple missions.
                </h1>
                <p className="text-base sm:text-lg font-mono text-[var(--accent-secondary)] font-semibold tracking-wide">
                  GRAVITAS &mdash; Modular Heavy-Lift UAV Platform
                </p>
              </div>

              <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                A modular heavy-lift UAV platform being developed for commercial logistics and flood-disaster response, featuring interchangeable cargo modules, companion computing, and redundant long-range communications.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {ctaInfo.isExternal ? (
                  <a
                    href={ctaInfo.primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <span>Launch GRAVITAS Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href="#operational-concept"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <span>Explore Dual-Use Concept</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}

                <Link
                  href="/contact?product=gravitas"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <span>Request UAV Dossier</span>
                  <ChevronRight className="w-4 h-4 text-[var(--accent-secondary)]" />
                </Link>
              </div>

              {/* Quick Spec Ribbon */}
              <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-4">
                <div>
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] uppercase block">
                    Target Payload Class
                  </span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    Up to 15 kg Modular
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] uppercase block">
                    Avionics Core
                  </span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    Pixhawk + Companion
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] uppercase block">
                    Development Stage
                  </span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    Airframe Prototyping
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Real Photography */}
            <div className="lg:col-span-5">
              <div className="editorial-card overflow-hidden shadow-lg group">
                <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden bg-[var(--surface-elevated)]">
                  <AuthenticImage
                    src="/images/gravitas-hexacopter-hero.jpg"
                    alt="GRAVITAS heavy-lift industrial multirotor drone platform in flight"
                    captionTitle="FIG 01 // Industrial Multi-Rotor"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 sm:p-5 border-t border-[var(--border-subtle)] bg-[var(--surface-primary)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span className="font-mono">FIG 01 // Industrial Multi-Rotor</span>
                  <span className="text-[11px]">Carbon-Fiber Prototype Airframe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OPERATIONAL BOTTLENECK */}
      <section className="py-20 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--surface-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Operational Context"
            title="The logistics and disaster-response bottleneck."
            description="When severe floods submerge road infrastructure or rugged geography cuts off access, conventional terrestrial supply chains abruptly collapse."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="editorial-card p-8 space-y-4">
              <span className="text-xs font-mono text-[var(--accent-secondary)] font-bold uppercase tracking-wider block">
                Bottleneck 01 // Submerged Roads
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Ground Severance in Floods
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                During monsoon floods, road links and culverts are washed out. Wheeled transport cannot traverse inundated regions, isolating populations from potable water, food packets, and life-critical medicines.
              </p>
            </div>

            <div className="editorial-card p-8 space-y-4">
              <span className="text-xs font-mono text-[var(--accent-secondary)] font-bold uppercase tracking-wider block">
                Bottleneck 02 // Aviation Overhead
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Manned Helicopter Costs
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Deploying manned rotorcraft for routine distribution is cost-prohibitive, constrained by pilot availability, and restricted in obstacle-dense urban flood corridors where landing clearings do not exist.
              </p>
            </div>

            <div className="editorial-card p-8 space-y-4">
              <span className="text-xs font-mono text-[var(--accent-secondary)] font-bold uppercase tracking-wider block">
                Bottleneck 03 // Middle-Mile Friction
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Middle-Mile Cargo Friction
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Island supply chains, offshore installations, and remote transit points face delays. Small commercial drones lack payload capacity, while fixed-wing aircraft require long paved runways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DUAL-USE OPERATING CONCEPT */}
      <section id="operational-concept" className="py-20 lg:py-28 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Dual-Use Operating Model"
            title="A single aerial platform. Two vital missions."
            description="Designed to operate continuously in commercial freight during normal conditions, with rapid redeployment capability for humanitarian emergency response during crises."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="editorial-card p-8 sm:p-10 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-secondary)]">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-secondary)] font-bold block mb-1">
                  Operational Mode A // Scheduled Transit
                </span>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                  Commercial Middle-Mile Freight
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Scheduled point-to-point cargo transit between regional distribution hubs, industrial worksites, and maritime facilities. Modular quick-lock pods permit fast turnaround without long battery swap delays.
              </p>
              <ul className="pt-2 space-y-2.5 text-xs font-mono text-[var(--text-primary)] border-t border-[var(--border-subtle)]">
                <li className="flex items-center gap-2 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)]" />
                  <span>Standardized quick-lock cargo pods</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)]" />
                  <span>Automated waypoint dispatch routines</span>
                </li>
              </ul>
            </div>

            <div className="editorial-card p-8 sm:p-10 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)]">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold block mb-1">
                  Operational Mode B // Crisis Response
                </span>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                  Flood Disaster Humanitarian Relief
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Rapid redeployment to inundated zones delivering water purification packets, emergency rations, satellite communicators, and vital medical supplies. Features tethered winch drop to deliver without landing in floodwater.
              </p>
              <ul className="pt-2 space-y-2.5 text-xs font-mono text-[var(--text-primary)] border-t border-[var(--border-subtle)]">
                <li className="flex items-center gap-2 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Tethered winch delivery in obstacle zones</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Dual cellular + RF long-range failsafe telemetry</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Complementary Dual Photo Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="editorial-card overflow-hidden">
              <div className="relative aspect-[16/10] w-full bg-[var(--surface-elevated)]">
                <AuthenticImage
                  src="/images/gravitas-flight.jpg"
                  alt="GRAVITAS heavy-lift multirotor UAV during field test flight"
                  captionTitle="FIG 02 // Flight Envelope Assessment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <span className="font-mono">FIG 02 // Flight Envelope Assessment</span>
                <span>Open-air hover stability & payload testing</span>
              </div>
            </div>

            <div className="editorial-card overflow-hidden">
              <div className="relative aspect-[16/10] w-full bg-[var(--surface-elevated)]">
                <AuthenticImage
                  src="/images/gravitas-hexacopter-hardware.jpg"
                  alt="High-torque brushless drone motor assembly and carbon arm architecture"
                  captionTitle="FIG 03 // Propulsion Subsystem"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <span className="font-mono">FIG 03 // Propulsion Subsystem</span>
                <span>Brushless motor mounts & composite structure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AVIONICS & ARCHITECTURE DIAGRAM */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--surface-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Avionics & Telemetry Architecture"
            title="Flight core and mission systems."
            description="Detailed schematic breakdown of Pixhawk flight controllers, companion edge computers, redundant telemetry, and fail-safe return protocols."
          />

          <TechArchitectureDiagram type="gravitas" />
        </div>
      </section>

      {/* 5. HARDWARE OVERVIEW (Subsystems) */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Subsystem Specification"
            title="Core hardware modules."
            description="Engineered around modular avionics and field-serviceable composite mechanics for maximum mission availability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="editorial-card p-7 space-y-3">
              <div className="flex items-center gap-3">
                <Box className="w-5 h-5 text-[var(--accent-secondary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Modular Payload Bay
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Standardized mechanical rail and electrical interconnect allowing hot-swap reconfiguration between cargo containers, sensor gimbals, and winch modules.
              </p>
            </div>

            <div className="editorial-card p-7 space-y-3">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-[var(--accent-secondary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Pixhawk Autopilot Stack
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Triple-redundant IMU architecture running open PX4/ArduPilot firmware for precision low-level motor mixing, attitude retention, and fail-safe GPS return.
              </p>
            </div>

            <div className="editorial-card p-7 space-y-3">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-[var(--accent-secondary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Companion Linux Core
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Onboard edge computer executing mission supervision, obstacle avoidance perception, geocaging rules, and encrypted communications relays.
              </p>
            </div>

            <div className="editorial-card p-7 space-y-3">
              <div className="flex items-center gap-3">
                <Anchor className="w-5 h-5 text-[var(--accent-secondary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Motorized Winch Hoist
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Precision auto-release tether system capable of delivering 10–15 kg packages into tree- or water-obstructed environments from safe hover altitudes.
              </p>
            </div>

            <div className="editorial-card p-7 space-y-3">
              <div className="flex items-center gap-3">
                <Radio className="w-5 h-5 text-[var(--accent-secondary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Dual-Link Telemetry
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Primary LTE cellular connectivity with seamless fallback to long-range 868/915 MHz RF radio link, ensuring continuous command oversight.
              </p>
            </div>

            <div className="editorial-card p-7 space-y-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--accent-secondary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Fail-Safe Flight Guard
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Autonomous geocage enforcement, motor loss compensation logic, automated return-to-launch (RTL), and emergency beacon activation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT STATUS & FUTURE ROADMAP */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--surface-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Current Status */}
            <div className="space-y-6">
              <span className="editorial-tag">
                Current Development Phase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Where GRAVITAS stands today.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                <p>
                  GRAVITAS is progressing through airframe structural prototyping and benchtop avionics integration. Active developmental work involves:
                </p>
                <ul className="space-y-3 font-mono text-xs sm:text-sm text-[var(--text-primary)]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)] shrink-0 mt-0.5" />
                    <span>Propulsion static thrust and motor thermal test bench runs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)] shrink-0 mt-0.5" />
                    <span>Tether tension sensing and winch auto-cutoff calibration</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)] shrink-0 mt-0.5" />
                    <span>MAVLink telemetry failover testing across cellular & radio links</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)] shrink-0 mt-0.5" />
                    <span>Flight-in-the-loop simulation of asymmetric payload releases</span>
                  </li>
                </ul>

                <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)] block mb-1">Aviation Compliance Disclosure:</strong>
                  Certified Beyond Visual Line of Sight (BVLOS) deployments remain subject to civil aviation approvals (e.g., DGCA in India). Flight endurance metrics reflect simulation and benchtop estimates.
                </div>
              </div>
            </div>

            {/* Future Roadmap */}
            <div className="space-y-6">
              <span className="editorial-tag">
                Engineering Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Planned flight iterations.
              </h2>
              <div className="space-y-4">
                {[
                  {
                    phase: "Phase 1: Hover & Airframe Rigidity Tests",
                    desc: "Tuning PID parameters, motor mixing matrices, and structural resonance dampening on carbon-fiber multirotor frames.",
                  },
                  {
                    phase: "Phase 2: Full Winch & Payload Drop Trials",
                    desc: "Testing auto-tensioned tether releases in outdoor windy conditions with 10–15 kg mock flood-relief supply containers.",
                  },
                  {
                    phase: "Phase 3: BVLOS Safety Case Submission",
                    desc: "Compiling fail-safe redundancy test records, cellular link uptime data, and geocage protocols for regulatory aviation evaluations.",
                  },
                ].map((item) => (
                  <div
                    key={item.phase}
                    className="editorial-card p-5"
                  >
                    <h3 className="text-sm font-bold text-[var(--text-primary)]">
                      {item.phase}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            align="center"
            tag="Technical Clarity"
            title="Frequently asked questions."
            description="Transparent details concerning GRAVITAS's aerial specifications, regulatory path, and operational constraints."
          />

          <FaqAccordion items={gravitasFaqs} theme="auto" />
        </div>
      </section>

      {/* 8. COLLABORATION CTA */}
      <section className="py-20 lg:py-24 bg-[var(--surface-primary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="editorial-card p-8 sm:p-14 space-y-6">
            <span className="editorial-tag">
              Disaster Response & Logistics Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Interested in collaborating on GRAVITAS flight trials?
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              We invite discussions with disaster management agencies, humanitarian logistics teams, and industrial flight operators to structure joint operational evaluations.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?product=gravitas"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span>Request UAV Technical Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <span>Explore All Products</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
