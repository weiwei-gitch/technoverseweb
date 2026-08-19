import React from "react";
import { sounds } from "./AudioEffects";
import { Layers, Rocket, Target, Users, Zap, CheckCircle2, Award } from "lucide-react";

export function About() {
  const pillars = [
    {
      code: "01",
      icon: <Layers size={22} className="text-cyan" />,
      title: "Structured Pipeline",
      description: "Not a standalone weekend hackathon. A sustained, multi-checkpoint continuum carrying raw concepts all the way to deployed MVPs.",
    },
    {
      code: "02",
      icon: <Target size={22} className="text-cyan" />,
      title: "Market Validation",
      description: "Rigorous user testing and feasibility verification to guarantee solutions solve authentic pain points, not theoretical problems.",
    },
    {
      code: "03",
      icon: <Users size={22} className="text-cyan" />,
      title: "Cross-Disciplinary Teams",
      description: "Fusing technical coders, hardware builders, product designers, and domain specialists into high-impact problem-solving units.",
    },
    {
      code: "04",
      icon: <Zap size={22} className="text-cyan" />,
      title: "Active Mentorship & Sprints",
      description: "Direct feedback from industry veterans and academic mentors with tight milestone intervals to keep momentum razor-sharp.",
    },
  ];

  return (
    <section className="about-section" id="about">
      {/* Kinetic Glowing Marquee Ticker */}
      <div className="ticker-strip">
        <div className="ticker-track">
          {[...Array(3)].map((_, idx) => (
            <span key={idx} className="ticker-content">
              IDEATE ✦ MENTOR ✦ VALIDATE ✦ IMPLEMENT ✦ PITCH ✦ SCALE ✦ SHOWCASE ✦
            </span>
          ))}
        </div>
      </div>

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-tag-box">
            <span className="tag-bracket">[</span>
            <span className="tag-num">01</span>
            <span className="tag-label">THE PREMISE</span>
            <span className="tag-bracket">]</span>
          </div>
          <h2 className="section-title">
            INNOVATION HAS <span className="text-gradient-cyan">MOMENTUM</span>.
          </h2>
          <p className="section-lead-text">
            TECHNOVERSE 2.0 is a structured, continuous innovation journey built by <strong>ACM Student Chapter, Banasthali Vidyapith</strong> to turn visionary ideas into meaningful, validated impact.
          </p>
        </div>

        {/* Asymmetrical Content Grid */}
        <div className="about-asym-grid">
          {/* Main Context Card */}
          <div className="about-hero-card">
            <div className="card-hud-label">
              <span>MANIFESTO // CORE PHILOSOPHY</span>
              <span className="hud-dot" />
            </div>
            <h3 className="about-manifesto-heading">
              Moving beyond traditional hackathons.
            </h3>
            <p className="about-manifesto-para">
              Building upon the success of its inaugural edition, <strong>TECHNOVERSE 2.0</strong> brings students together across disciplines for end-to-end realization: from initial sparks at the Innovation Mixer, through deep Market Validation, iterative Milestone Reviews, to the prestigious <strong>Grand-Finale with Mayukh</strong>.
            </p>
            <div className="about-stats-row">
              <div className="stat-pill">
                <span className="stat-val">365</span>
                <span className="stat-lbl">Days of Innovation</span>
              </div>
              <div className="stat-pill">
                <span className="stat-val">8</span>
                <span className="stat-lbl">Rigorous Stages</span>
              </div>
              <div className="stat-pill">
                <span className="stat-val">100%</span>
                <span className="stat-lbl">Real Impact</span>
              </div>
            </div>
          </div>

          {/* 4 Tech Pillars */}
          <div className="about-pillars-grid">
            {pillars.map((item) => (
              <div
                key={item.code}
                className="about-pillar-card"
                onMouseEnter={() => sounds.playHover()}
              >
                <div className="pillar-top-row">
                  <div className="pillar-icon-box">{item.icon}</div>
                  <span className="pillar-code">PHASE // {item.code}</span>
                </div>
                <h4 className="pillar-title">{item.title}</h4>
                <p className="pillar-desc">{item.description}</p>
                <div className="pillar-corner-decor" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
