"use client";

import React, { useState } from "react";
import {
  Layers,
  Cpu,
  Radio,
  Camera,
  Anchor,
  Zap,
  Shield,
  Activity,
  ArrowRight,
} from "lucide-react";

interface TechArchitectureDiagramProps {
  type: "prism" | "gravitas";
}

export default function TechArchitectureDiagram({ type }: TechArchitectureDiagramProps) {
  const [activePrismStep, setActivePrismStep] = useState<number>(0);
  const [activeGravitasSubsystem, setActiveGravitasSubsystem] = useState<number>(1);

  if (type === "prism") {
    const prismSteps = [
      {
        id: 0,
        step: "01",
        title: "Sample Ingestion & Staining",
        tag: "Biochemical Preparation",
        desc: "Aqueous water samples are filtered to remove bulk organic sediment. A lipophilic fluorophore dye binds selectively to hydrophobic synthetic polymer surfaces.",
        metrics: [
          { label: "Sample Domain", val: "Aqueous Grab Samples" },
          { label: "Fluorophore Affinity", val: "Hydrophobic Polymers" },
          { label: "Staining Incubation", val: "5–15 Minutes" },
        ],
        icon: <Activity className="w-5 h-5 text-[var(--accent-primary)]" />,
      },
      {
        id: 1,
        step: "02",
        title: "515–520 nm Laser Excitation",
        tag: "Optical Excitation",
        desc: "A green laser diode projects collimated optical flux across the quartz viewing cell, exciting bound fluorophores into emission states.",
        metrics: [
          { label: "Laser Wavelength", val: "515–520 nm (Green)" },
          { label: "Optical Geometry", val: "Collimated Beam" },
          { label: "Drive Mode", val: "Constant-Current TEC" },
        ],
        icon: <Zap className="w-5 h-5 text-[var(--accent-primary)]" />,
      },
      {
        id: 2,
        step: "03",
        title: "Fluorescence Signal Filtration",
        tag: "Optical Signal Isolation",
        desc: "Precision optical interference bandpass filter attenuates excitation glare while passing Stokes-shifted fluorophore light to the digital sensor.",
        metrics: [
          { label: "Excitation Blocking", val: "High OD Attenuation" },
          { label: "Passband Range", val: "560–650 nm Stokes" },
          { label: "Objective", val: "Low-Distortion Macro" },
        ],
        icon: <Camera className="w-5 h-5 text-[var(--accent-primary)]" />,
      },
      {
        id: 3,
        step: "04",
        title: "NVIDIA Jetson Orin Nano AI",
        tag: "Embedded Edge Inference",
        desc: "Captured fluorescence frames are processed on-device by the NVIDIA Jetson Orin Nano. Computer vision models segment particulate contours and classify particle dimensions.",
        metrics: [
          { label: "Compute Hardware", val: "NVIDIA Jetson Orin" },
          { label: "Model Runtime", val: "TensorRT Optimized" },
          { label: "Processing Mode", val: "Air-Gapped On-Site" },
        ],
        icon: <Cpu className="w-5 h-5 text-[var(--accent-primary)]" />,
      },
    ];

    const current = prismSteps[activePrismStep];

    return (
      <div className="editorial-card p-6 sm:p-8 lg:p-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
          <div>
            <span className="editorial-tag">
              Optical Signal Flow
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">
              PRISM Architecture Breakdown
            </h4>
          </div>

          <span className="text-xs font-mono text-[var(--text-secondary)] px-3 py-1 rounded border border-[var(--border-primary)] bg-[var(--bg-primary)] w-fit">
            515–520 nm &rarr; Optical Filter &rarr; Jetson AI
          </span>
        </div>

        {/* Step Selector Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {prismSteps.map((step) => {
            const isSelected = activePrismStep === step.id;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActivePrismStep(step.id)}
                className={`p-4 rounded-md text-left transition-all border ${
                  isSelected
                    ? "bg-[var(--bg-surface)] border-[var(--accent-primary)] shadow-xs"
                    : "bg-[var(--bg-primary)] border-[var(--border-primary)] hover:border-[var(--border-strong)]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[var(--accent-primary)]">
                    {step.step}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />}
                </div>
                <h5 className="text-xs font-semibold text-[var(--text-primary)] line-clamp-1">
                  {step.title}
                </h5>
                <span className="text-[10px] text-[var(--text-muted)] block mt-0.5">
                  {step.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail View */}
        <div className="p-6 sm:p-8 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[var(--bg-surface)] border border-[var(--border-primary)] flex items-center justify-center">
                {current.icon}
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[var(--accent-primary)] font-semibold tracking-wider block">
                  Stage {current.step} &bull; {current.tag}
                </span>
                <h4 className="text-xl font-bold text-[var(--text-primary)]">
                  {current.title}
                </h4>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActivePrismStep((prev) => (prev + 1) % prismSteps.length)}
              className="btn-secondary text-xs w-fit"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            {current.desc}
          </p>

          {/* Subsystem Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {current.metrics.map((m) => (
              <div
                key={m.label}
                className="p-3.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
              >
                <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                  {m.label}
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)] mt-0.5 block">
                  {m.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // GRAVITAS ARCHITECTURE EXPLORER
  const gravitasTiers = [
    {
      id: 0,
      title: "Multirotor Airframe Core",
      tag: "Airframe & Propulsion",
      desc: "Industrial multirotor airframe configured for payload stability under dynamic center-of-gravity shifts. Features carbon composite spars and high-torque brushless powerplants.",
      metrics: [
        { label: "Configuration", val: "Heavy-Lift Multirotor" },
        { label: "Airframe Material", val: "Carbon Fiber Composite" },
        { label: "Structural Role", val: "Vibration Dampened Bus" },
      ],
      icon: <Layers className="w-5 h-5 text-[var(--accent-secondary)]" />,
    },
    {
      id: 1,
      title: "Pixhawk Autopilot & Redundant IMUs",
      tag: "Flight Control Core",
      desc: "Open-standards Pixhawk flight controller running deterministic state estimation with triple-redundant IMUs, barometric altitude hold, and GNSS RTK positioning.",
      metrics: [
        { label: "Firmware Stack", val: "PX4 / ArduPilot Core" },
        { label: "Sensor Fusion", val: "Triple-Redundant IMU" },
        { label: "Failsafes", val: "Auto Return-to-Launch" },
      ],
      icon: <Cpu className="w-5 h-5 text-[var(--accent-secondary)]" />,
    },
    {
      id: 2,
      title: "Onboard Companion Computing",
      tag: "Mission Autonomy Core",
      desc: "Ruggedized Linux companion computer executing high-level mission planning, obstacle sensing, and automated delivery waypoints over MAVLink protocol.",
      metrics: [
        { label: "OS Environment", val: "Ruggedized Linux / ROS2" },
        { label: "Telemetry Link", val: "MAVLink Inter-Module" },
        { label: "Autonomy Level", val: "Waypoint & Hoist Assist" },
      ],
      icon: <Shield className="w-5 h-5 text-[var(--accent-secondary)]" />,
    },
    {
      id: 3,
      title: "Modular Payload & Winch Mechanism",
      tag: "Delivery Systems",
      desc: "Quick-release payload mounting rails compatible with medical transport cases, emergency rations, and a precision winch cable for delivering supplies without landing.",
      metrics: [
        { label: "Attachment", val: "Modular Release Rail" },
        { label: "Delivery Mode", val: "Winch Hoist Cable" },
        { label: "Disaster Role", val: "Monsoon Flood Logistics" },
      ],
      icon: <Anchor className="w-5 h-5 text-[var(--accent-secondary)]" />,
    },
    {
      id: 4,
      title: "Communications & Fail-Safe Telemetry",
      tag: "Long-Range Telemetry",
      desc: "Dual-redundant communications architecture pairing 4G/LTE cellular telemetry with long-range 868/915 MHz RF radio failover to ensure operational control.",
      metrics: [
        { label: "Primary Comms", val: "Encrypted 4G / LTE" },
        { label: "Secondary Link", val: "Long-Range RF Radio" },
        { label: "Geofencing", val: "Hardware Failsafe Bound" },
      ],
      icon: <Radio className="w-5 h-5 text-[var(--accent-secondary)]" />,
    },
  ];

  const currentGravitas = gravitasTiers[activeGravitasSubsystem];

  return (
    <div className="editorial-card p-6 sm:p-8 lg:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
        <div>
          <span className="editorial-tag text-[var(--accent-secondary)]">
            Avionics & Payload Architecture
          </span>
          <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">
            GRAVITAS Platform Integration
          </h4>
        </div>

        <span className="text-xs font-mono text-[var(--text-secondary)] px-3 py-1 rounded border border-[var(--border-primary)] bg-[var(--bg-primary)] w-fit">
          Pixhawk Autopilot + Companion Computing
        </span>
      </div>

      {/* Subsystem Node Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {gravitasTiers.map((tier) => {
          const isSelected = activeGravitasSubsystem === tier.id;
          return (
            <button
              key={tier.title}
              type="button"
              onClick={() => setActiveGravitasSubsystem(tier.id)}
              className={`p-4 rounded-md text-left transition-all border ${
                isSelected
                  ? "bg-[var(--bg-surface)] border-[var(--accent-secondary)] shadow-xs"
                  : "bg-[var(--bg-primary)] border-[var(--border-primary)] hover:border-[var(--border-strong)]"
              }`}
            >
              <div className="w-8 h-8 rounded-md bg-[var(--bg-surface)] border border-[var(--border-primary)] flex items-center justify-center mb-3">
                {tier.icon}
              </div>
              <h5 className="text-xs font-semibold text-[var(--text-primary)] leading-snug line-clamp-2">
                {tier.title}
              </h5>
              <span className="text-[10px] text-[var(--text-muted)] block mt-1">
                {tier.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail Subsystem View */}
      <div className="p-6 sm:p-8 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-[var(--bg-surface)] border border-[var(--border-primary)] flex items-center justify-center">
              {currentGravitas.icon}
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[var(--accent-secondary)] font-semibold tracking-wider block">
                Subsystem 0{currentGravitas.id + 1} &bull; {currentGravitas.tag}
              </span>
              <h4 className="text-xl font-bold text-[var(--text-primary)]">
                {currentGravitas.title}
              </h4>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActiveGravitasSubsystem((prev) => (prev + 1) % gravitasTiers.length)}
            className="btn-secondary text-xs w-fit"
          >
            <span>Next Subsystem</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          {currentGravitas.desc}
        </p>

        {/* Subsystem Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {currentGravitas.metrics.map((m) => (
            <div
              key={m.label}
              className="p-3.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
            >
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                {m.label}
              </span>
              <span className="text-sm font-semibold text-[var(--text-primary)] mt-0.5 block">
                {m.val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
