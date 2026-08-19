import React, { useState, useEffect } from "react";
import { Scene3D } from "./Scene3D";
import { sounds } from "./AudioEffects";
import { AcmLogo } from "./AcmLogo";
import { ArrowUpRight, ChevronDown, Sparkles, Terminal, Shield, Zap, Flame, Compass } from "lucide-react";

export function Hero({ onOpenRegister }) {
  // Live Countdown to Opening Ceremony (24 August 2026)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-08-24T09:00:00+05:30").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* 3D Interactive Spatial Canvas */}
      <Scene3D />

      {/* Cyber Grid HUD Overlay */}
      <div className="hero-hud-frame">
        <div className="hud-corner hud-top-left">
          <span>SYS.LAT // 26.40° N</span>
          <span>SYS.LON // 75.87° E</span>
        </div>
        <div className="hud-corner hud-top-right">
          <span>FREQ // 2.40 GHZ</span>
          <span className="text-cyan">LINK // STABLE</span>
        </div>
        <div className="hud-corner hud-bottom-left">
          <span>ORG // ACM BV</span>
          <span>PHASE // 01 REGISTRATION</span>
        </div>
        <div className="hud-corner hud-bottom-right">
          <span>EVENT // TECHNOVERSE 2.0</span>
          <span>CYCLE // 2026-2027</span>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="hero-content-wrapper">
        {/* Top Presenter Pill */}
        <div className="hero-presenter-badge animate-fade-in">
          <div className="presenter-glow" />
          <span className="presenter-icon">✦</span>
          <span className="presenter-text">
            PRESENTED BY <strong>ACM STUDENT CHAPTER</strong>, BANASTHALI VIDYAPITH
          </span>
        </div>

        {/* Massive Futuristic Title — single line */}
        <div className="hero-title-group">
          <h1 className="hero-main-title hero-main-title--oneline">
            <span className="title-inline-full">
              TECHNOVERSE<span className="title-accent-dot">.</span>
              &nbsp;<span className="title-version-badge">2.0</span>
            </span>
          </h1>
          <p className="hero-subtitle">
            The year-long continuous innovation pipeline where bold hypotheses become validated, market-ready real-world solutions.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <button
            type="button"
            className="hero-primary-btn"
            onClick={() => {
              sounds.playClick();
              onOpenRegister();
            }}
            onMouseEnter={() => sounds.playHover()}
          >
            <div className="btn-shine" />
            <span className="btn-text">REGISTER NOW</span>
            <span className="btn-icon-wrapper">
              <ArrowUpRight size={20} />
            </span>
          </button>

          <a
            href="#journey"
            className="hero-secondary-btn"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
          >
            <Compass size={18} className="btn-secondary-icon" />
            <span>EXPLORE ROADMAP</span>
          </a>
        </div>

        {/* Opening Ceremony Countdown Bar */}
        <div className="hero-countdown-panel">
          <div className="countdown-header">
            <div className="countdown-live-tag">
              <span className="pulse-dot" />
              <span>OPENING CEREMONY COUNTDOWN</span>
            </div>
            <span className="countdown-date">24 AUGUST 2026</span>
          </div>
          <div className="countdown-timer-grid">
            <div className="countdown-slot">
              <span className="countdown-num">{String(timeLeft.days).padStart(2, "0")}</span>
              <span className="countdown-unit">DAYS</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-slot">
              <span className="countdown-num">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="countdown-unit">HOURS</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-slot">
              <span className="countdown-num">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="countdown-unit">MINS</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-slot">
              <span className="countdown-num">{String(timeLeft.seconds).padStart(2, "0")}</span>
              <span className="countdown-unit">SECS</span>
            </div>
          </div>
        </div>

        {/* Bottom Telemetry HUD Metric Strip */}
        <div className="hero-telemetry-strip">
          <div className="telemetry-item">
            <div className="telemetry-icon-box">
              <Terminal size={18} />
            </div>
            <div>
              <span className="telemetry-val">08 STAGES</span>
              <span className="telemetry-lbl">Sequential Checkpoints</span>
            </div>
          </div>

          <div className="telemetry-item">
            <div className="telemetry-icon-box">
              <Shield size={18} />
            </div>
            <div>
              <span className="telemetry-val">3—5 MEMBERS</span>
              <span className="telemetry-lbl">Multidisciplinary Squads</span>
            </div>
          </div>

          <div className="telemetry-item">
            <div className="telemetry-icon-box">
              <Zap size={18} />
            </div>
            <div>
              <span className="telemetry-val">MARKET VALIDATION</span>
              <span className="telemetry-lbl">Real Feasibility Testing</span>
            </div>
          </div>

          <div className="telemetry-item">
            <div className="telemetry-icon-box">
              <Flame size={18} />
            </div>
            <div>
              <span className="telemetry-val">GRAND FINALE</span>
              <span className="telemetry-lbl">Showcase with Mayukh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="hero-scroll-indicator" onClick={() => sounds.playClick()}>
        <span className="scroll-text">SCROLL TO DISCOVER</span>
        <ChevronDown size={18} className="scroll-chevron animate-bounce" />
      </a>
    </section>
  );
}
