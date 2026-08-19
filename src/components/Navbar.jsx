import React, { useState, useEffect } from "react";
import { AcmLogo } from "./AcmLogo";
import { sounds } from "./AudioEffects";
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export function Navbar({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sounds.muted);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMuteToggle = () => {
    const newMuted = sounds.toggleMute();
    setIsMuted(newMuted);
  };

  const navItems = [
    { href: "#about", label: "About", code: "01" },
    { href: "#why", label: "Why Join", code: "02" },
    { href: "#rules", label: "Rules", code: "05" },
    { href: "#leaderboard", label: "Leaderboard", code: "06" },
  ];

  const handleNavClick = (e, href) => {
    sounds.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand with ACM Banasthali Vidyapith Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onMouseEnter={() => sounds.playHover()}
          onClick={() => sounds.playClick()}
        >
          <AcmLogo />
          <div className="brand-divider" />
          <div className="event-pill">
            <span className="live-dot" />
            <span className="event-pill-text">TECHNOVERSE 2.0</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.code}
              href={item.href}
              className="nav-link"
              onMouseEnter={() => sounds.playHover()}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <span className="nav-code">{item.code}</span>
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Action Tools */}
        <div className="nav-actions">
          {/* Audio FX Synth Toggle */}
          <button
            type="button"
            className="sound-toggle-btn"
            onClick={handleMuteToggle}
            title={isMuted ? "Enable sound effects" : "Mute sound effects"}
            aria-label="Toggle sound effects"
          >
            {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} className="text-cyan animate-pulse" />}
          </button>

          {/* Registration CTA Button */}
          <button
            type="button"
            className="register-nav-btn"
            onClick={() => {
              sounds.playClick();
              onOpenRegister();
            }}
            onMouseEnter={() => sounds.playHover()}
          >
            <span>REGISTER</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
