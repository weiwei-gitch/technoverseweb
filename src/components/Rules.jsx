import React, { useState } from "react";
import { sounds } from "./AudioEffects";
import { ChevronDown, ShieldAlert, FileText, CheckCircle } from "lucide-react";

export function Rules() {
  const [openIndex, setOpenIndex] = useState(0);

  const rulesList = [
    {
      title: "Team Structure & Leadership",
      detail: "Teams must consist of 3–5 members, with one designated Team Leader who will serve as the primary point of contact for all milestone submissions and communications. In a team maximum of 2 students can be of a technical branch(CS/AI/IT) and the rest of the members must be of another course or different branch. ",
    },
    {
      title: "Institutional Affinity",
      detail: "Team members may be from different academic years, branches, and departments, but must belong to the same institution. Cross-institution teams are not permitted.",
    },
    {
      title: "Single Team Exclusivity",
      detail: "A participant may be a member of only one team throughout the competition lifecycle. Dual memberships will result in disqualification.",
    },
    {
      title: "Locked Team Rosters",
      detail: "Team composition cannot change after the official registration deadline except with prior organizing committee written approval under exceptional circumstances.",
    },
    {
      title: "Solo Matching at Innovation Mixer",
      detail: "Individual registration is permitted. Team formation and partner matching will be facilitated during Stage 02 (Innovation Mixer).",
    },
    {
      title: "Originality & Plagiarism Zero Tolerance",
      detail: "Every team must present an original, unpublished idea. Plagiarism, copied repositories, or pre-built commercial solutions will result in immediate disqualification.",
    },
    {
      title: "Mandatory Milestone Participation",
      detail: "Teams are expected to actively participate in all checkpoint rounds. Missing a mandatory evaluation without prior notice may result in elimination.",
    },
    {
      title: "Finality of Jury Decisions",
      detail: "The evaluation metrics, scoring framework, and decisions of the judging panel and ACM organizing committee are final and binding.",
    },
  ];

  const toggleAccordion = (idx) => {
    sounds.playClick();
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="rules-section" id="rules">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-tag-box">
            <span className="tag-bracket">[</span>
            <span className="tag-num">05</span>
            <span className="tag-label">COMPLIANCE PROTOCOLS</span>
            <span className="tag-bracket">]</span>
          </div>
          <h2 className="section-title">
            RULES & <span className="text-gradient-cyan">REGULATIONS</span>.
          </h2>
          <p className="section-lead-text">
            Know the operational standards, evaluation integrity guidelines, and team conduct before entering TECHNOVERSE 2.0.
          </p>
        </div>

        {/* Cyber Accordion Stack */}
        <div className="rules-accordion-stack">
          {rulesList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rule-accordion-card ${isOpen ? "card-expanded" : ""}`}
                onMouseEnter={() => sounds.playHover()}
              >
                <button
                  type="button"
                  className="rule-accordion-header"
                  onClick={() => toggleAccordion(idx)}
                >
                  <div className="rule-header-left">
                    <span className="rule-num-tag">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="rule-title-text">{item.title}</span>
                  </div>

                  <div className="rule-header-right">
                    <span className="rule-status-badge">
                      {isOpen ? "ACTIVE" : "EXPAND"}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`rule-chevron ${isOpen ? "chevron-rotated" : ""}`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="rule-accordion-body">
                    <p className="rule-body-text">{item.detail}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
