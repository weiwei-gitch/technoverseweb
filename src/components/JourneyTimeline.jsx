import React, { useState } from "react";
import { sounds } from "./AudioEffects";
import { Calendar, CheckCircle2, ChevronRight, ChevronLeft, Flag, Sparkles, Terminal, Rocket, Target, Award } from "lucide-react";

export function JourneyTimeline({ events = [] }) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stageFocusAreas = [
    { deliverable: "Individual / Team Registration & Profile Setup", target: "Kickoff" },
    { deliverable: "Networking, Team Formation & Ideation Brainstorming", target: "Synergy" },
    { deliverable: "Feasibility Assessment & User Problem Alignment", target: "Validation" },
    { deliverable: "High-Intensity MVP & Prototype Development", target: "Build" },
    { deliverable: "Initial Working Prototype & Feedback Review", target: "Review" },
    { deliverable: "Advanced Architecture, Iteration & User Testing", target: "Iterate" },
    { deliverable: "Penultimate Competitive Evaluation & Pitch Deck", target: "Qualify" },
    { deliverable: "Final Showcase, Demo Day & Awards with Mayukh", target: "Trophy" },
  ];

  const currentEvent = events[activeStageIndex] || {
    id: 1,
    name: "Registration Opens",
    description: "Start your journey.",
    date: "To Be Announced",
    status: "To Be Announced",
  };

  const handleStageSelect = (index) => {
    sounds.playStage();
    setActiveStageIndex(index);
  };

  const handlePrev = () => {
    sounds.playClick();
    setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : events.length - 1));
  };

  const handleNext = () => {
    sounds.playClick();
    setActiveStageIndex((prev) => (prev < events.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="journey-section" id="journey">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-tag-box">
            <span className="tag-bracket">[</span>
            <span className="tag-num">03</span>
            <span className="tag-label">COMPETITION ROADMAP</span>
            <span className="tag-bracket">]</span>
          </div>
          <h2 className="section-title">
            THE JOURNEY IS THE <span className="text-gradient-cyan">EVENT</span>.
          </h2>
          <p className="section-lead-text">
            8 sequential checkpoints engineered to transition innovative thoughts from initial ideation to fully realized products.
          </p>
        </div>

        {/* 2-Column Spatial Stage Navigator */}
        <div className="journey-interactive-grid">
          {/* Left: Interactive Stage Selector List */}
          <div className="stage-selector-list">
            <div className="selector-header">
              <span>CHECKPOINT LIST</span>
              <span className="text-cyan">08 STAGES</span>
            </div>

            <div className="stage-buttons-wrapper">
              {events.map((evt, idx) => {
                const isActive = idx === activeStageIndex;
                return (
                  <button
                    key={evt.id}
                    type="button"
                    className={`stage-select-item ${isActive ? "stage-active" : ""}`}
                    onClick={() => handleStageSelect(idx)}
                    onMouseEnter={() => sounds.playHover()}
                  >
                    <div className="stage-item-left">
                      <span className="stage-num-badge">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="stage-item-info">
                        <h4 className="stage-item-name">{evt.name}</h4>
                        <span className="stage-item-date">{evt.date || "To Be Announced"}</span>
                      </div>
                    </div>

                    <div className="stage-item-right">
                      <span className={`stage-status-chip ${isActive ? "chip-active" : ""}`}>
                        {evt.status || "Upcoming"}
                      </span>
                      <ChevronRight size={16} className="stage-chevron" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Holographic Stage Inspector Card */}
          <div className="stage-inspector-card">
            <div className="inspector-hud-top">
              <div className="inspector-badge">
                <Terminal size={14} className="text-cyan" />
                <span>CHECKPOINT TELEMETRY</span>
              </div>
              <span className="inspector-counter">
                STAGE {String(activeStageIndex + 1).padStart(2, "0")} / {String(events.length).padStart(2, "0")}
              </span>
            </div>

            <div className="inspector-content">
              <div className="inspector-stage-tag">
                <span>CHECKPOINT {String(activeStageIndex + 1).padStart(2, "0")}</span>
                <span className="tag-dot" />
                <span className="text-cyan">{stageFocusAreas[activeStageIndex]?.target || "TARGET"}</span>
              </div>

              <h3 className="inspector-title">{currentEvent.name}</h3>
              <p className="inspector-desc">{currentEvent.description}</p>

              <div className="inspector-metrics-grid">
                <div className="inspector-metric-box">
                  <div className="metric-box-label">
                    <Calendar size={14} />
                    <span>TIMELINE SCHEDULE</span>
                  </div>
                  <strong className="metric-box-val">{currentEvent.date}</strong>
                </div>

                <div className="inspector-metric-box">
                  <div className="metric-box-label">
                    <Flag size={14} />
                    <span>CURRENT STATUS</span>
                  </div>
                  <strong className="metric-box-val text-cyan">{currentEvent.status}</strong>
                </div>
              </div>

              <div className="inspector-deliverable-panel">
                <div className="deliverable-label">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>KEY MILESTONE FOCUS</span>
                </div>
                <p className="deliverable-text">
                  {stageFocusAreas[activeStageIndex]?.deliverable}
                </p>
              </div>
            </div>

            <div className="inspector-hud-bottom">
              <button
                type="button"
                className="stage-nav-btn"
                onClick={handlePrev}
                title="Previous Checkpoint"
              >
                <ChevronLeft size={18} />
                <span>PREV</span>
              </button>

              <div className="stage-dots-indicator">
                {events.map((_, i) => (
                  <span
                    key={i}
                    className={`dot-indicator ${i === activeStageIndex ? "dot-active" : ""}`}
                    onClick={() => handleStageSelect(i)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="stage-nav-btn"
                onClick={handleNext}
                title="Next Checkpoint"
              >
                <span>NEXT</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
