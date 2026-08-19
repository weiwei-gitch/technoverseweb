import React from "react";
import { sounds } from "./AudioEffects";
import { GraduationCap, UserCheck, Users2, ShieldCheck, Check } from "lucide-react";

export function Eligibility() {
  const criteria = [
    {
      code: "CRIT-01",
      icon: <GraduationCap size={28} className="text-cyan" />,
      title: "ALL DISCIPLINES & YEARS",
      summary: "Open to all Banasthali Vidyapith students across every department, batch, and branch.",
      bullets: [
        "Engineering, Sciences, Design, Management & Humanities",
        "Open to 1st, 2nd, 3rd, 4th year & Postgraduate scholars",
        "School students & Unstop registrants eligible",
      ],
    },
    {
      code: "CRIT-02",
      icon: <UserCheck size={28} className="text-cyan" />,
      title: "INDIVIDUAL OR SQUAD REGISTRATION",
      summary: "Sign up independently as a solo innovator or register as a complete squad.",
      bullets: [
        "Solo applicants will get matched during the Innovation Mixer",
        "Collaborate and form multidisciplinary squads seamlessly",
        "Cross-department team combinations encouraged",
      ],
    },
    {
      code: "CRIT-03",
      icon: <Users2 size={28} className="text-cyan" />,
      title: "3 TO 5 MEMBERS PER TEAM",
      summary: "Optimal squad sizing engineered for balanced development velocity and cross-domain synergy.",
      bullets: [
        "Teams must designate one official Team Leader",
        "Members must belong to the same parent institution",
        "No single participant may be in multiple teams",
      ],
    },
  ];

  return (
    <section className="eligibility-section" id="eligibility">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-tag-box">
            <span className="tag-bracket">[</span>
            <span className="tag-num">04</span>
            <span className="tag-label">PARTICIPATION MATRIX</span>
            <span className="tag-bracket">]</span>
          </div>
          <h2 className="section-title">
            BUILT FOR EVERY KIND OF <span className="text-gradient-cyan">THINKER</span>.
          </h2>
          <p className="section-lead-text">
            TECHNOVERSE 2.0 welcomes innovators from all academic domains to engineer holistic, multi-faceted solutions.
          </p>
        </div>

        {/* 3 Cyber Panel Grid */}
        <div className="eligibility-cards-grid">
          {criteria.map((item, idx) => (
            <div
              key={item.code}
              className="eligibility-card"
              onMouseEnter={() => sounds.playHover()}
            >
              <div className="elig-card-hud-top">
                <span className="elig-code-badge">{item.code}</span>
                <span className="elig-tag">PROTOCOL 0{idx + 1}</span>
              </div>

              <div className="elig-icon-box">{item.icon}</div>

              <h3 className="elig-card-title">{item.title}</h3>
              <p className="elig-card-summary">{item.summary}</p>

              <div className="elig-divider" />

              <ul className="elig-bullet-list">
                {item.bullets.map((b, i) => (
                  <li key={i} className="elig-bullet-item">
                    <span className="bullet-check-icon">
                      <Check size={14} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="elig-corner-bracket" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
