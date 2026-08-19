import React from "react";
import { AcmLogo } from "./AcmLogo";
import { sounds } from "./AudioEffects";
import { ArrowUpRight, Globe, Mail, MapPin, Sparkles, Terminal } from "lucide-react";

export function Footer({ onOpenRegister }) {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" id="register">
      {/* High-Impact Pre-Footer Call to Action Banner */}
      <div className="footer-cta-banner">
        <div className="section-container">
          <div className="cta-box-glass">
            <div className="cta-hud-tag">
              <Sparkles size={16} className="text-cyan" />
              <span>THE ARENA IS CALLING</span>
            </div>

            <h2 className="cta-massive-title">
              MAKE THE <span className="text-gradient-cyan">FIRST MOVE</span>.
            </h2>

            <p className="cta-subtitle">
              Step into <strong>TECHNOVERSE 2.0</strong> — join hundreds of innovators turning bold ideas into validated, market-ready real-world products.
            </p>

            <div className="cta-button-group">
              <button
                type="button"
                className="cta-huge-btn"
                onClick={() => {
                  sounds.playClick();
                  onOpenRegister();
                }}
                onMouseEnter={() => sounds.playHover()}
              >
                <span>REGISTER FOR TECHNOVERSE 2.0</span>
                <ArrowUpRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="footer-main-body">
        <div className="section-container">
          <div className="footer-grid">
            {/* Column 1: Brand & ACM Identity */}
            <div className="footer-brand-col">
              <AcmLogo />
              <p className="footer-brand-desc">
                The premier student chapter driving technical excellence, computational research, competitive hackathons, and innovation incubation at Banasthali Vidyapith.
              </p>
              <div className="footer-location-tag">
                <MapPin size={16} className="text-cyan" />
                <span>Banasthali Vidyapith, Rajasthan — 304022</span>
              </div>
            </div>

            {/* Column 2: Navigation Map */}
            <div className="footer-links-col">
              <h4 className="footer-heading">NAVIGATION</h4>
              <ul className="footer-link-list">
                <li><a href="#home" onClick={() => sounds.playClick()}>Home</a></li>
                <li><a href="#about" onClick={() => sounds.playClick()}>About Event</a></li>
                <li><a href="#why" onClick={() => sounds.playClick()}>Why Participate</a></li>
                <li><a href="#journey" onClick={() => sounds.playClick()}>Competition Roadmap</a></li>
                <li><a href="#eligibility" onClick={() => sounds.playClick()}>Eligibility Matrix</a></li>
                <li><a href="#rules" onClick={() => sounds.playClick()}>Rules & Regulations</a></li>
                <li><a href="#leaderboard" onClick={() => sounds.playClick()}>Live Leaderboard</a></li>
              </ul>
            </div>

            {/* Column 3: Event Checkpoints */}
            <div className="footer-links-col">
              <h4 className="footer-heading">EVENT CYCLES</h4>
              <ul className="footer-link-list">
                <li><span>01. Registration Opens</span></li>
                <li><span>02. Innovation Mixer</span></li>
                <li><span>03. Market Validation Round</span></li>
                <li><span>04. Innovation Sprint</span></li>
                <li><span>05. Milestone I Review</span></li>
                <li><span>06. Milestone II Review</span></li>
                <li><span>07. Semi-Finals</span></li>
                <li><span>08. Grand-Finale with Mayukh</span></li>
              </ul>
            </div>

            {/* Column 4: System Telemetry & Back to Top */}
            <div className="footer-meta-col">
              <h4 className="footer-heading">SYSTEM TELEMETRY</h4>
              <div className="system-telemetry-box">
                <div className="sys-row">
                  <span>EDITION:</span>
                  <strong className="text-cyan">TECHNOVERSE 2.0</strong>
                </div>
                <div className="sys-row">
                  <span>STATUS:</span>
                  <strong className="text-emerald-400">PORTAL ACTIVE</strong>
                </div>
                <div className="sys-row">
                  <span>PROTOCOL:</span>
                  <span>UNSTOP INTEGRATED</span>
                </div>
              </div>

              <button
                type="button"
                className="back-to-top-btn"
                onClick={scrollToTop}
                onMouseEnter={() => sounds.playHover()}
              >
                <span>BACK TO TOP ↑</span>
              </button>
            </div>
          </div>

          {/* Bottom Copyright Strip */}
          <div className="footer-bottom-strip">
            <div className="footer-copy-text">
              © 2026-2027 <strong>TECHNOVERSE 2.0</strong>. Presented by <strong>ACM Student Chapter, Banasthali Vidyapith</strong>. All rights reserved.
            </div>
            <div className="footer-badge-strip">
              <span className="badge-terminal">ACM BV // INNOVATION PIPELINE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
