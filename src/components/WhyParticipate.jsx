import React, { useState } from "react";
import { sounds } from "./AudioEffects";
import {
  Lightbulb,
  Users,
  TrendingUp,
  CheckCircle,
  Trophy,
  ChevronRight,
} from "lucide-react";

export function WhyParticipate({ onOpenRegister }) {
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

  const handleStartJourney = (e) => {
    e.preventDefault();
    sounds.playClick();
    if (onOpenRegister) {
      onOpenRegister();
    } else {
      const journeyEl = document.getElementById("journey");
      if (journeyEl) {
        journeyEl.scrollIntoView({ behavior: "smooth" });
      }
    }
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
              viewBox="0 0 1200 620"
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

                <radialGradient id="cyanNebula" cx="30%" cy="80%" r="60%">
                  <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                </radialGradient>
                
                <radialGradient id="purpleNebula" cx="80%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#ec4899" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Sky Background */}
              <rect width="1200" height="620" fill="url(#skyGrad)" />
              <rect width="1200" height="620" fill="url(#cyanNebula)" />
              <rect width="1200" height="620" fill="url(#purpleNebula)" />

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
                d="M-20 440 L110 330 L220 380 L360 270 L510 340 L690 190 L820 280 L1010 90 L1140 180 L1240 130 L1240 640 L-20 640 Z"
                fill="url(#backMtnGrad)"
                opacity="0.7"
              />

              {/* Mid Mountain Layer with Ridge Lines */}
              <path
                d="M-20 490 L90 390 L240 430 L420 320 L580 390 L770 210 L940 110 L1070 240 L1240 210 L1240 640 L-20 640 Z"
                fill="url(#midMtnGrad)"
              />

              {/* Craggy Summit Peak Mountain Layer */}
              <path
                d="M-20 540 L120 480 L280 510 L480 430 L660 380 L840 270 L955 105 L1060 260 L1240 320 L1240 640 L-20 640 Z"
                fill="url(#summitMtnGrad)"
              />

              {/* Mountain Ridge Highlights / Slopes */}
              <path
                d="M955 105 L840 270 L720 360 L540 440 L350 490 L180 540"
                stroke="rgba(168, 85, 247, 0.25)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Glow Beneath the Ascending Trail */}
              <path
                d="M 220 535 Q 330 520 455 465 T 670 335 T 875 230 T 955 105"
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
                d="M 220 535 Q 330 520 455 465 T 670 335 T 875 230 T 955 105"
                stroke="url(#mountainTrailGrad)"
                strokeWidth="3.5"
                strokeDasharray="6,8"
                strokeLinecap="round"
                fill="none"
                className="animated-mountain-trail"
              />

              {/* Summit Flag & Pinnacle Light at Mountain Peak */}
              <g className="summit-flag-group" transform="translate(955, 105)">
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
                <circle cx="220" cy="535" r="9" fill="rgba(0, 240, 255, 0.2)" />
                <circle cx="220" cy="535" r="4.5" fill="#ffffff" stroke="#00f0ff" strokeWidth="2.5" />

                <circle cx="455" cy="465" r="9" fill="rgba(56, 189, 248, 0.2)" />
                <circle cx="455" cy="465" r="4.5" fill="#ffffff" stroke="#38bdf8" strokeWidth="2.5" />

                <circle cx="670" cy="335" r="9" fill="rgba(168, 85, 247, 0.2)" />
                <circle cx="670" cy="335" r="4.5" fill="#ffffff" stroke="#a855f7" strokeWidth="2.5" />

                <circle cx="875" cy="230" r="9" fill="rgba(192, 132, 252, 0.2)" />
                <circle cx="875" cy="230" r="4.5" fill="#ffffff" stroke="#c084fc" strokeWidth="2.5" />
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

            <button
              type="button"
              className="story-journey-btn"
              onClick={handleStartJourney}
              onMouseEnter={() => sounds.playHover()}
            >
              <span>Start Your Journey</span>
              <ChevronRight size={18} className="story-btn-arrow" />
            </button>
          </div>

          {/* Checkpoint Cards Positioned Along Path */}
          <div className="story-checkpoints-overlay">
            {/* Step 01 */}
            <div
              className={`story-step-node step-pos-1 ${activeStep === 0 ? "step-active" : ""}`}
              onMouseEnter={() => {
                sounds.playHover();
                setActiveStep(0);
              }}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="step-num-pill text-cyan">01</div>
              <div className="step-card-box border-cyan-box">
                <div className="step-icon-wrap">{steps[0].icon}</div>
              </div>
              <div className="step-label-group">
                <span className="step-title-text">{steps[0].title}</span>
                {activeStep === 0 && (
                  <p className="step-desc-tooltip">{steps[0].desc}</p>
                )}
              </div>
            </div>

            {/* Step 02 */}
            <div
              className={`story-step-node step-pos-2 ${activeStep === 1 ? "step-active" : ""}`}
              onMouseEnter={() => {
                sounds.playHover();
                setActiveStep(1);
              }}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="step-num-pill text-sky">02</div>
              <div className="step-card-box border-sky-box">
                <div className="step-icon-wrap">{steps[1].icon}</div>
              </div>
              <div className="step-label-group">
                <span className="step-title-text">{steps[1].title}</span>
                {activeStep === 1 && (
                  <p className="step-desc-tooltip">{steps[1].desc}</p>
                )}
              </div>
            </div>

            {/* Step 03 */}
            <div
              className={`story-step-node step-pos-3 ${activeStep === 2 ? "step-active" : ""}`}
              onMouseEnter={() => {
                sounds.playHover();
                setActiveStep(2);
              }}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="step-num-pill text-purple">03</div>
              <div className="step-card-box border-purple-box">
                <div className="step-icon-wrap">{steps[2].icon}</div>
              </div>
              <div className="step-label-group">
                <span className="step-title-text">{steps[2].title}</span>
                {activeStep === 2 && (
                  <p className="step-desc-tooltip">{steps[2].desc}</p>
                )}
              </div>
            </div>

            {/* Step 04 */}
            <div
              className={`story-step-node step-pos-4 ${activeStep === 3 ? "step-active" : ""}`}
              onMouseEnter={() => {
                sounds.playHover();
                setActiveStep(3);
              }}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="step-num-pill text-violet">04</div>
              <div className="step-card-box border-violet-box">
                <div className="step-icon-wrap">{steps[3].icon}</div>
              </div>
              <div className="step-label-group">
                <span className="step-title-text">{steps[3].title}</span>
                {activeStep === 3 && (
                  <p className="step-desc-tooltip">{steps[3].desc}</p>
                )}
              </div>
            </div>

            {/* Step 05 - Summit */}
            <div
              className={`story-step-node step-pos-5 ${activeStep === 4 ? "step-active" : ""}`}
              onMouseEnter={() => {
                sounds.playHover();
                setActiveStep(4);
              }}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="step-num-pill text-pink">05</div>
              <div className="step-card-box border-pink-box">
                <div className="step-icon-wrap">{steps[4].icon}</div>
              </div>
              <div className="step-label-group">
                <span className="step-title-text">{steps[4].title}</span>
                {activeStep === 4 && (
                  <p className="step-desc-tooltip">{steps[4].desc}</p>
                )}
              </div>
            </div>
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