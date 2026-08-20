import React from "react";
import { sounds } from "./AudioEffects";
import {
  Lightbulb,
  Search,
  Code2,
  Target,
  ChevronRight,
} from "lucide-react";

export function About() {
  const steps = [
    {
      num: "01",
      color: "#00f0ff",
      icon: <Lightbulb size={24} className="text-[#00f0ff]" />,
      title: "IDEATE",
      desc1: "Find real problems.",
      desc2: "Spark bold ideas.",
    },
    {
      num: "02",
      color: "#38bdf8",
      icon: <Search size={24} className="text-[#38bdf8]" />,
      title: "VALIDATE",
      desc1: "Test. Refine.",
      desc2: "Prove it matters.",
    },
    {
      num: "03",
      color: "#38bdf8",
      icon: <Code2 size={24} className="text-[#38bdf8]" />,
      title: "BUILD",
      desc1: "Create solutions.",
      desc2: "Build with purpose.",
    },
    {
      num: "04",
      color: "#a855f7",
      icon: <Target size={24} className="text-[#a855f7]" />,
      title: "IMPACT",
      desc1: "Deliver value.",
      desc2: "Inspire change.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="section-container">

        {/* Top Premise Tag Header */}
        <div className="about-premise-header">
          <div className="premise-tag-badge">
            <span className="premise-num">01</span>
            <span className="premise-label">THE PREMISE</span>

            <div className="premise-line-accent">
              <span className="premise-line" />
              <span className="premise-dot" />
            </div>
          </div>

          {/* Matrix Dots Decorative Pattern */}
          <div
            className="cyber-dots-grid"
            aria-hidden="true"
          >
            {[...Array(24)].map((_, i) => (
              <span key={i} className="dot-node" />
            ))}
          </div>
        </div>

        {/* 2-Column Hero Header Row */}
        <div className="about-hero-row">

          {/* Left: Main Heading & Description */}
          <div className="about-title-block">
            <h2 className="about-main-title">
              INNOVATION
              <br />
              HAS{" "}
              <span className="text-gradient-cyan">
                MOMENTUM.
              </span>
            </h2>

            <div className="title-cyan-underline" />

            <p className="about-lead-para">
              <strong>TECHNOVERSE 2.O</strong> is a structured
              innovation journey by{" "}
              <strong>
                ACM Student Chapter, Banasthali Vidyapith
              </strong>{" "}
              to turn visionary ideas into meaningful,
              validated impact.
            </p>
          </div>

          {/* Right: Core Philosophy Callout */}
          <div className="about-philosophy-card">
            <div className="philosophy-accent-border">
              <span className="phil-dot-top" />
              <span className="phil-line" />
              <span className="phil-dot-bottom" />
            </div>

            <div className="philosophy-content">
              <span className="philosophy-tag">
                CORE PHILOSOPHY
              </span>

              <h3 className="philosophy-title">
                CLIMB. BUILD.
                <br />
                LEAVE YOUR MARK.
              </h3>

              <p className="philosophy-desc">
                Every checkpoint takes you one step{" "}
                <span className="text-cyan">
                  closer
                </span>{" "}
                to the summit.
              </p>
            </div>
          </div>
        </div>

        {/* Middle: 4-Step Linear Innovation Pipeline */}
        <div className="about-pipeline-flow">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>

              <div
                className="pipeline-step-item"
                onMouseEnter={() => sounds.playHover()}
              >
                <span
                  className="pipeline-step-num"
                  style={{ color: step.color }}
                >
                  {step.num}
                </span>

                <div
                  className="pipeline-icon-circle"
                  style={{
                    borderColor: step.color,
                    boxShadow: `0 0 20px ${step.color}40`,
                  }}
                >
                  {step.icon}
                </div>

                <h4 className="pipeline-step-title">
                  {step.title}
                </h4>

                <div className="pipeline-step-desc">
                  <span>{step.desc1}</span>
                  <span>{step.desc2}</span>
                </div>
              </div>

              {/* Connecting Curved Arc with Chevron */}
              {idx < steps.length - 1 && (
                <div
                  className="pipeline-connector-arc"
                  aria-hidden="true"
                >
                  <svg
                    className="connector-svg"
                    viewBox="0 0 100 40"
                    fill="none"
                  >
                    <path
                      d="M 5 36 Q 50 4 92 36"
                      stroke="url(#arcGrad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="92"
                      cy="36"
                      r="3"
                      fill="#00f0ff"
                    />

                    <defs>
                      <linearGradient
                        id={`arcGrad-${idx}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#00f0ff"
                        />
                        <stop
                          offset="100%"
                          stopColor="#38bdf8"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <ChevronRight
                    size={14}
                    className="connector-chevron"
                  />
                </div>
              )}

            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}