import React, { useState } from "react";
import {
  Users,
  Landmark,
  User,
  Lock,
  Lightbulb,
  ShieldCheck,
  Target,
  Gavel,
  ArrowRight,
  Shield,
  X,
} from "lucide-react";

import { sounds } from "./AudioEffects";

const rules = [
  {
    num: "01",
    icon: <Users size={23} strokeWidth={1.3} />,
    title: "Team Structure & Leadership",
    description:
      "Teams must consist of 3–5 members with one designated Team Leader.",
    details:
      "Teams must consist of 3–5 members, with one designated Team Leader who will serve as the primary point of contact for all milestone submissions and communications. In a team, maximum of 2 students can be of technical branch (CS/AI/IT) and the rest of the members must be of another course or different branch.",
  },
  {
    num: "02",
    icon: <Landmark size={23} strokeWidth={1.3} />,
    title: "Institutional Affinity",
    description:
      "Team members may belong to different academic years, branches, and departments.",
    details:
      "Team members may be from different academic years, branches, and departments but must belong to the same institution. Cross-institution teams are not permitted.",
  },
  {
    num: "03",
    icon: <User size={23} strokeWidth={1.3} />,
    title: "Single Team Exclusivity",
    description:
      "A participant may be a member of only one team throughout the competition.",
    details:
      "A participant may be a member of only one team throughout the competition lifecycle. Dual memberships will result in disqualification.",
  },
  {
    num: "04",
    icon: <Lock size={23} strokeWidth={1.3} />,
    title: "Locked Team Rosters",
    description:
      "Team composition cannot change after the official registration deadline.",
    details:
      "Team composition cannot change after the official registration deadline except with prior organizing committee written approval under exceptional circumstances.",
  },
  {
    num: "05",
    icon: <Lightbulb size={23} strokeWidth={1.3} />,
    title: "Solo Matching at Innovation Mixer",
    description:
      "Individual registration is permitted and team formation will be facilitated.",
    details:
      "Individual registration is permitted. Team formation and partner matching will be facilitated during Stage 02 (Innovation Mixer).",
  },
  {
    num: "06",
    icon: <ShieldCheck size={23} strokeWidth={1.3} />,
    title: "Originality & Plagiarism Zero Tolerance",
    description:
      "Every team must present an original, unpublished idea.",
    details:
      "Every team must present an original, unpublished idea. Plagiarism, copied repositories, or pre-built commercial solutions will result in immediate disqualification.",
  },
  {
    num: "07",
    icon: <Target size={23} strokeWidth={1.3} />,
    title: "Mandatory Milestone Participation",
    description:
      "Teams must actively participate in all checkpoint rounds.",
    details:
      "Teams are expected to actively participate in all checkpoint rounds. Missing a mandatory evaluation without prior notice may result in elimination.",
  },
  {
    num: "08",
    icon: <Gavel size={23} strokeWidth={1.3} />,
    title: "Finality of Jury Decisions",
    description:
      "Evaluation decisions made by the judging panel are final and binding.",
    details:
      "The evaluation metrics, scoring framework, and decisions of the judging panel and ACM organizing committee are final and binding.",
  },
];

export function Rules() {
  const [selectedRule, setSelectedRule] = useState(null);

  const openRule = (rule) => {
    sounds.playClick();
    setSelectedRule(rule);
  };

  const closeRule = () => {
    sounds.playClick();
    setSelectedRule(null);
  };

  return (
    <>
      {/* =========================================================
          RULES SECTION
      ========================================================= */}

      <section
        id="rules"
        style={{
          width: "100%",
          padding: "90px 0 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "min(1100px, calc(100% - 60px))",
            margin: "0 auto",
          }}
        >
          {/* HEADER */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "30px",
              marginBottom: "28px",
            }}
          >
            <div style={{ maxWidth: "720px" }}>
              {/* Section label */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginBottom: "12px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  fontWeight: "700",
                  letterSpacing: "0.12em",
                  color: "#64748b",
                }}
              >
                <span>[</span>

                <span style={{ color: "#00e5ff" }}>05</span>

                <span>COMPLIANCE PROTOCOLS</span>

                <span>]</span>
              </div>

              {/* Heading */}

              <h2
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(38px, 5vw, 58px)",
                  fontWeight: "900",
                  lineHeight: "0.98",
                  letterSpacing: "-0.035em",
                  color: "#f8fafc",
                }}
              >
                RULES &{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #60a5fa, #00e5ff, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  REGULATIONS
                </span>
                .
              </h2>

              {/* Underline */}

              <div
                style={{
                  width: "58px",
                  height: "3px",
                  marginTop: "12px",
                  background: "#00e5ff",
                  boxShadow: "0 0 12px rgba(0,229,255,0.5)",
                }}
              />

              {/* Description */}

              <p
                style={{
                  margin: "10px 0 0",
                  maxWidth: "650px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  lineHeight: "1.55",
                  color: "#94a3b8",
                }}
              >
                Know the operational standards, evaluation integrity
                guidelines, and team conduct before entering{" "}
                <strong style={{ color: "#38bdf8" }}>
                  TECHNOVERSE 2.0.
                </strong>
              </p>
            </div>

            {/* Shield */}

            <div
              style={{
                width: "110px",
                height: "110px",
                flexShrink: 0,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#64748b",
                opacity: 0.7,
              }}
            >
              <Shield size={100} strokeWidth={0.8} />

              <div
                style={{
                  position: "absolute",
                  right: "2px",
                  bottom: "8px",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  border: "1px solid #38bdf8",
                  background: "#020817",
                  color: "#38bdf8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                }}
              >
                ✓
              </div>
            </div>
          </div>

          {/* =====================================================
              TWO COLUMN GRID
          ===================================================== */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "10px 14px",
              width: "100%",
            }}
          >
            {/* LEFT */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {rules.slice(0, 4).map((rule) => (
                <RuleCard
                  key={rule.num}
                  rule={rule}
                  onClick={() => openRule(rule)}
                />
              ))}
            </div>

            {/* RIGHT */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {rules.slice(4, 8).map((rule) => (
                <RuleCard
                  key={rule.num}
                  rule={rule}
                  onClick={() => openRule(rule)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROTOCOL DETAILS MODAL
      ========================================================= */}

      {selectedRule && (
        <div className="modal-backdrop" onClick={closeRule}>
          <div
            className="modal-cyber-window"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "500px",
            }}
          >
            {/* MODAL HEADER */}

            <div className="modal-header">
              <div className="modal-badge-group">
                <span
                  style={{
                    color: "#00f0ff",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    fontWeight: "800",
                  }}
                >
                  {selectedRule.num}
                </span>

                <span className="modal-title-hud">
                  PROTOCOL DETAILS
                </span>
              </div>

              <button
                type="button"
                className="modal-close-btn"
                onClick={closeRule}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* MODAL BODY */}

            <div
              className="modal-body"
              style={{
                textAlign: "left",
                padding: "28px 24px 24px",
              }}
            >
              {/* ICON + TITLE */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    flexShrink: 0,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00e5ff",
                    border: "1px solid rgba(0,240,255,0.45)",
                    background: "rgba(0,240,255,0.08)",
                    boxShadow: "0 0 20px rgba(0,240,255,0.15)",
                  }}
                >
                  {React.cloneElement(selectedRule.icon, {
                    size: 23,
                  })}
                </div>

                <h3
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    lineHeight: "1.3",
                    fontWeight: "800",
                  }}
                >
                  {selectedRule.title}
                </h3>
              </div>

              {/* INFORMATION BOX */}

              <div
                style={{
                  padding: "16px",
                  border: "1px solid rgba(148,163,184,0.18)",
                  borderRadius: "10px",
                  background: "rgba(2,10,28,0.45)",
                  color: "#cbd5e1",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  lineHeight: "1.7",
                  marginBottom: "24px",
                }}
              >
                {selectedRule.details}
              </div>

              {/* CLOSE BUTTON */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  type="button"
                  onClick={closeRule}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 20px",
                    borderRadius: "999px",
                    border: "1px solid #00e5ff",
                    background:
                      "linear-gradient(135deg, #0066ff, #00bfff)",
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.68rem",
                    fontWeight: "800",
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    boxShadow: "0 0 20px rgba(0,210,255,0.3)",
                  }}
                >
                  ACKNOWLEDGE & CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ============================================================
   RULE CARD
============================================================ */

function RuleCard({ rule, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => sounds.playHover()}
      style={{
        width: "100%",
        minHeight: "76px",

        display: "flex",
        alignItems: "center",

        gap: "12px",
        padding: "10px 12px",

        boxSizing: "border-box",

        textAlign: "left",

        background:
          "linear-gradient(110deg, rgba(10,25,45,0.95), rgba(5,17,32,0.95))",

        border: "1px solid rgba(96,165,250,0.20)",

        borderRadius: "7px",

        cursor: "pointer",

        transition:
          "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "rgba(56,189,248,0.6)";
        e.currentTarget.style.boxShadow =
          "0 8px 25px rgba(0,150,255,0.08)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor =
          "rgba(96,165,250,0.20)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* NUMBER */}

      <div
        style={{
          width: "30px",
          flexShrink: 0,
          paddingRight: "10px",
          borderRight: "1px solid rgba(148,163,184,0.12)",
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          fontWeight: "600",
          color: "#60a5fa",
          textAlign: "center",
        }}
      >
        {rule.num}
      </div>

      {/* ICON */}

      <div
        style={{
          width: "42px",
          height: "42px",
          flexShrink: 0,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          border: "1px solid rgba(148,163,184,0.30)",

          borderRadius: "50%",

          color: "#7dd3fc",

          background:
            "radial-gradient(circle, rgba(56,189,248,0.08), transparent 70%)",
        }}
      >
        {rule.icon}
      </div>

      {/* TEXT */}

      <div
        style={{
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <h3
          style={{
            margin: "0 0 4px",
            fontFamily: "var(--font-display)",
            fontSize: "12px",
            fontWeight: "700",
            lineHeight: "1.25",
            color: "#f1f5f9",
          }}
        >
          {rule.title}
        </h3>

        <p
          style={{
            margin: 0,
            maxWidth: "280px",
            fontFamily: "var(--font-sans)",
            fontSize: "9px",
            lineHeight: "1.4",
            color: "#94a3b8",
          }}
        >
          {rule.description}
        </p>
      </div>

      {/* ARROW */}

      <ArrowRight
        size={20}
        strokeWidth={1.5}
        style={{
          flexShrink: 0,
          color: "#60a5fa",
        }}
      />
    </button>
  );
}