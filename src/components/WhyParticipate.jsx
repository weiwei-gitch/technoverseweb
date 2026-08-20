import React, { useState } from "react";
import { sounds } from "./AudioEffects";
import {
  Lightbulb,
  Users,
  TrendingUp,
  CheckCircle,
  Trophy,
  X,
} from "lucide-react";

export function WhyParticipate() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      num: "01",
      color: "#00f0ff",
      icon: <Lightbulb size={22} className="text-cyan" />,
      title: "Transform Ideas into Reality",
      desc: "Move beyond ideation decks into production-grade functional software and hardware MVPs solving real-world challenges.",
      tag: "EXECUTION",
    },
    {
      num: "02",
      color: "#38bdf8",
      icon: <Users size={22} className="text-sky-blue" />,
      title: "Collaborate Across Disciplines",
      desc: "Network with developers, researchers, and creators across different years and departments to engineer robust solutions.",
      tag: "SYNERGY",
    },
    {
      num: "03",
      color: "#a855f7",
      icon: <TrendingUp size={22} style={{ color: "#c084fc" }} />,
      title: "Supercharge Your Skillset",
      desc: "Master system architecture, pitching, rapid prototyping, and market-fit analysis through continuous feedback loops.",
      tag: "GROWTH",
    },
    {
      num: "04",
      color: "#c084fc",
      icon: <CheckCircle size={22} style={{ color: "#d946ef" }} />,
      title: "Validate Your Market",
      desc: "Work directly with industry mentors to test feasibility, pricing dynamics, and real-world adoption hurdles.",
      tag: "VALIDATION",
    },
    {
      num: "05",
      color: "#ec4899",
      icon: <Trophy size={22} style={{ color: "#f43f5e" }} />,
      title: "Gain Recognition & Prizes",
      desc: "Compete for awards, official certificates, funding opportunities, and career networking at the Grand Finale with Mayukh.",
      tag: "RECOGNITION",
      isSummit: true,
    },
  ];

  const tips = [
    { text: "Short lines", color: "#00f0ff" },
    { text: "Strong verbs", color: "#38bdf8" },
    { text: "Benefits over features", color: "#a855f7" },
    { text: "Visual hierarchy", color: "#ec4899" },
  ];

  const handleStepToggle = (idx) => {
    sounds.playClick();
    setActiveStep((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="why-section storytelling-section" id="why">
      <div className="section-container">
        {/* Main Mountain Odyssey Canvas Container */}
        <div className="story-mountain-container">
          
          {/* Ambient Cosmic Mountain Background SVG */}
          <div className="story-canvas-bg" aria-hidden="true">
            <svg
              className="mountain-vector-art"
              viewBox="0 0 1200 680"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#040614" />
                  <stop offset="40%" stopColor="#080e28" />
                  <stop offset="80%" stopColor="#100b2b" />
                  <stop offset="100%" stopColor="#050818" />
                </linearGradient>

                <linearGradient id="backMtnGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#1c1f4a" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#070a1c" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="midMtnGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#151b3d" />
                  <stop offset="100%" stopColor="#050816" />
                </linearGradient>

                <linearGradient id="summitMtnGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#1e1848" />
                  <stop offset="60%" stopColor="#0b0f2a" />
                  <stop offset="100%" stopColor="#030612" />
                </linearGradient>

                <linearGradient id="mountainTrailGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="25%" stopColor="#38bdf8" />
                  <stop offset="55%" stopColor="#818cf8" />
                  <stop offset="80%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#f43f5e" />
                </linearGradient>

                <filter id="neonTrailGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur1" />
                  <feGaussianBlur stdDeviation="12" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <radialGradient id="summitBeaconGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#ec4899" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                </radialGradient>

                <radialGradient id="cyanNebula" cx="25%" cy="75%" r="60%">
                  <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                </radialGradient>
                
                <radialGradient id="purpleNebula" cx="80%" cy="25%" r="60%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#ec4899" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Sky Background */}
              <rect width="1200" height="680" fill="url(#skyGrad)" />
              <rect width="1200" height="680" fill="url(#cyanNebula)" />
              <rect width="1200" height="680" fill="url(#purpleNebula)" />

              {/* Cosmic Stars */}
              <g className="stars-cluster" opacity="0.8">
                <circle cx="80" cy="90" r="1.2" fill="#ffffff" />
                <circle cx="150" cy="50" r="1" fill="#38bdf8" />
                <circle cx="230" cy="110" r="1.5" fill="#ffffff" />
                <circle cx="340" cy="70" r="1" fill="#ffffff" />
                <circle cx="480" cy="45" r="1.8" fill="#a855f7" />
                <circle cx="560" cy="120" r="1" fill="#ffffff" />
                <circle cx="680" cy="60" r="1.4" fill="#00f0ff" />
                <circle cx="750" cy="95" r="1" fill="#ffffff" />
                <circle cx="840" cy="40" r="1.6" fill="#f43f5e" />
                <circle cx="920" cy="80" r="1" fill="#ffffff" />
                <circle cx="1040" cy="50" r="1.4" fill="#ffffff" />
                <circle cx="1130" cy="100" r="1" fill="#38bdf8" />
                <circle cx="990" cy="140" r="1.2" fill="#ffffff" />
                <circle cx="60" cy="220" r="1" fill="#ffffff" />
                <circle cx="1120" cy="230" r="1.5" fill="#ffffff" />
              </g>

              {/* Distant Mountain Layer */}
              <path
                d="M-20 480 L110 370 L220 420 L360 300 L510 380 L690 220 L820 310 L1010 110 L1140 200 L1240 150 L1240 700 L-20 700 Z"
                fill="url(#backMtnGrad)"
                opacity="0.7"
              />

              {/* Mid Mountain Layer with Ridge Lines */}
              <path
                d="M-20 530 L90 430 L240 470 L420 360 L580 430 L770 240 L940 130 L1070 270 L1240 230 L1240 700 L-20 700 Z"
                fill="url(#midMtnGrad)"
              />

              {/* Craggy Summit Peak Mountain Layer */}
              <path
                d="M-20 580 L120 520 L280 550 L480 470 L660 410 L840 290 L955 115 L1060 280 L1240 340 L1240 700 L-20 700 Z"
                fill="url(#summitMtnGrad)"
              />

              {/* Mountain Ridge Highlights / Slopes */}
              <path
                d="M955 115 L840 290 L720 390 L540 480 L350 530 L180 580"
                stroke="rgba(168, 85, 247, 0.25)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Glow Beneath the Ascending Trail */}
              <path
                d="M 120 560 Q 280 530 430 440 T 660 310 T 850 200 T 955 115"
                stroke="url(#mountainTrailGrad)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
                opacity="0.3"
                filter="url(#neonTrailGlow)"
              />

              {/* Winding Glowing Dashed Trail Climbing the Mountain */}
              <path
                id="mountainMainPath"
                d="M 120 560 Q 280 530 430 440 T 660 310 T 850 200 T 955 115"
                stroke="url(#mountainTrailGrad)"
                strokeWidth="3.5"
                strokeDasharray="6,8"
                strokeLinecap="round"
                fill="none"
                className="animated-mountain-trail"
              />

              {/* Summit Flag & Pinnacle Light at Mountain Peak */}
              <g className="summit-flag-group" transform="translate(955, 115)">
                <circle cx="0" cy="0" r="32" fill="url(#summitBeaconGlow)" />
                <circle cx="0" cy="0" r="14" fill="#f43f5e" opacity="0.35" className="beacon-ping" />
                
                {/* Flag Pole */}
                <line x1="0" y1="0" x2="0" y2="-52" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Waving Red/Pink Summit Flag */}
                <path
                  d="M 0 -52 C 14 -56, 22 -44, 36 -50 C 26 -38, 14 -42, 0 -34 Z"
                  fill="url(#mountainTrailGrad)"
                  stroke="#ffffff"
                  strokeWidth="0.8"
                  className="flag-waving"
                />

                {/* Summit Base Glowing Node */}
                <circle cx="0" cy="0" r="6" fill="#ffffff" stroke="#f43f5e" strokeWidth="3" />
              </g>

              {/* Milestone Connection Dots on Path */}
              <g className="trail-nodes">
                <circle cx="160" cy="550" r="8" fill="rgba(0, 240, 255, 0.2)" />
                <circle cx="160" cy="550" r="4.5" fill="#ffffff" stroke="#00f0ff" strokeWidth="2.5" />

                <circle cx="430" cy="440" r="8" fill="rgba(56, 189, 248, 0.2)" />
                <circle cx="430" cy="440" r="4.5" fill="#ffffff" stroke="#38bdf8" strokeWidth="2.5" />

                <circle cx="660" cy="310" r="8" fill="rgba(168, 85, 247, 0.2)" />
                <circle cx="660" cy="310" r="4.5" fill="#ffffff" stroke="#a855f7" strokeWidth="2.5" />

                <circle cx="850" cy="200" r="8" fill="rgba(192, 132, 252, 0.2)" />
                <circle cx="850" cy="200" r="4.5" fill="#ffffff" stroke="#c084fc" strokeWidth="2.5" />
              </g>
            </svg>
          </div>

          {/* Top Left Hero Content */}
          <div className="story-hero-content">
            <div className="story-category-tag">
              <span className="tag-cyan-text">F. STORYTELLING STYLE</span>
            </div>

            <h2 className="story-main-heading">
              This isn’t just a hackathon.
              <br />
              It’s your <span className="story-cyan-glow">origin story.</span>
            </h2>

            <p className="story-lead-description">
              A year-long adventure of building, breaking, learning, and finally – leaving your mark.
            </p>
          </div>

          {/* Checkpoint Cards Positioned Along Path */}
          <div className="story-checkpoints-overlay">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const posClass = `step-pos-${idx + 1}`;
              const borderClass = `border-${step.num === "01" ? "cyan" : step.num === "02" ? "sky" : step.num === "03" ? "purple" : step.num === "04" ? "violet" : "pink"}-box`;
              const textClass = `text-${step.num === "01" ? "cyan" : step.num === "02" ? "sky" : step.num === "03" ? "purple" : step.num === "04" ? "violet" : "pink"}`;

              return (
                <div
                  key={step.num}
                  className={`story-step-node ${posClass} ${isActive ? "step-active" : ""}`}
                  onClick={() => handleStepToggle(idx)}
                  onMouseEnter={() => sounds.playHover()}
                >
                  <div className="step-icon-col">
                    <span className={`step-num-pill ${textClass}`}>{step.num}</span>
                    <div className={`step-card-box ${borderClass} ${isActive ? "box-selected" : ""}`}>
                      {step.icon}
                    </div>
                  </div>

                  <div className="step-info-col">
                    <h4 className="step-title-text">{step.title}</h4>
                    
                    {/* Detail Description is shown ONLY when clicked */}
                    {isActive && (
                      <div
                        className="step-detail-card-pop"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="pop-header">
                          <span className="pop-tag" style={{ color: step.color }}>
                            {step.tag}
                          </span>
                          <button
                            type="button"
                            className="pop-close-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              sounds.playClick();
                              setActiveStep(null);
                            }}
                            title="Close"
                          >
                            <X size={12} />
                          </button>
                        </div>
                        <p className="pop-desc-text">{step.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Tips Bar */}
          <div className="story-tips-bar">
            <div className="tips-label-item">
              <span className="tips-title">Tips:</span>
            </div>
            <div className="tips-list-items">
              {tips.map((tip, idx) => (
                <div key={idx} className="tip-badge-item">
                  <span className="tip-check-circle" style={{ borderColor: tip.color }}>
                    <CheckCircle size={14} style={{ color: tip.color }} />
                  </span>
                  <span className="tip-text-label">{tip.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}