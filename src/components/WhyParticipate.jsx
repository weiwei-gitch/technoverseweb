import React from "react";
import { sounds } from "./AudioEffects";
import { Lightbulb, Network, TrendingUp, CheckCircle, Trophy, ArrowUpRight, Cpu } from "lucide-react";

export function WhyParticipate() {
  const perks = [
    {
      num: "01",
      icon: <Lightbulb size={24} className="text-cyan" />,
      title: "Transform Ideas into Reality",
      desc: "Move beyond ideation decks into production-grade functional software and hardware MVPs solving real-world challenges.",
      tag: "EXECUTION",
    },
    {
      num: "02",
      icon: <Network size={24} className="text-cyan" />,
      title: "Collaborate Across Disciplines",
      desc: "Network with developers, researchers, and creators across different years and departments to engineer robust solutions.",
      tag: "SYNERGY",
    },
    {
      num: "03",
      icon: <TrendingUp size={24} className="text-cyan" />,
      title: "Supercharge Your Skillset",
      desc: "Master system architecture, pitching, rapid prototyping, and market-fit analysis through continuous feedback loops.",
      tag: "GROWTH",
    },
    {
      num: "04",
      icon: <CheckCircle size={24} className="text-cyan" />,
      title: "Validate Your Market Traction",
      desc: "Work directly with industry mentors to test feasibility, pricing dynamics, and real-world adoption hurdles.",
      tag: "VALIDATION",
    },
    {
      num: "05",
      icon: <Trophy size={24} className="text-cyan" />,
      title: "Gain Recognition & Prizes",
      desc: "Compete for awards, official certificates, funding opportunities, and career networking at the Grand Finale with Mayukh.",
      tag: "RECOGNITION",
    },
  ];

  return (
    <section className="why-section" id="why">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-tag-box">
            <span className="tag-bracket">[</span>
            <span className="tag-num">02</span>
            <span className="tag-label">VALUE PROPOSITION</span>
            <span className="tag-bracket">]</span>
          </div>
          <h2 className="section-title">
            WHY ENTER THE <span className="text-gradient-cyan">ARENA</span>?
          </h2>
          <p className="section-lead-text">
            Gain unmatched hands-on engineering, commercial validation, and institutional backing throughout TECHNOVERSE 2.0.
          </p>
        </div>

        {/* 5 Card Holographic Grid */}
        <div className="why-cards-grid">
          {perks.map((perk, index) => (
            <div
              key={perk.num}
              className={`why-holo-card ${index === 0 ? "card-highlight" : ""}`}
              onMouseEnter={() => sounds.playHover()}
            >
              <div className="card-top-hud">
                <span className="card-hud-code">STAGE PERK // {perk.num}</span>
                <span className="card-tag-pill">{perk.tag}</span>
              </div>

              <div className="card-icon-bubble">{perk.icon}</div>

              <h3 className="why-card-title">{perk.title}</h3>
              <p className="why-card-desc">{perk.desc}</p>

              <div className="card-bottom-row">
                <span className="card-index-indicator">0{index + 1}</span>
                <div className="card-hover-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Glowing Corner Accents */}
              <div className="holo-corner-tl" />
              <div className="holo-corner-br" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
