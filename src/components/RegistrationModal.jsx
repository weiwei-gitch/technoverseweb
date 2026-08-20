import React, { useState } from "react";
import { sounds } from "./AudioEffects";
import { X, ArrowUpRight, Copy, Check, ShieldCheck, Sparkles, UserPlus, Users } from "lucide-react";

export function RegistrationModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const regUrl = import.meta.env.VITE_REGISTRATION_FORM_URL || "";

  if (!isOpen) return null;

  const handleCopyLink = () => {
    sounds.playClick();
    if (regUrl) {
      navigator.clipboard.writeText(regUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenLink = () => {
    sounds.playClick();
    if (regUrl) {
      window.open(regUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Official registration portal link will be announced soon by ACM Student Chapter, Banasthali Vidyapith.");
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-cyber-window" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="modal-badge-group">
            <span className="modal-dot" />
            <span className="modal-title-hud">PORTAL // REGISTRATION DISPATCH</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-hero-icon-box">
            <Sparkles size={32} className="text-cyan" />
          </div>

          <h3 className="modal-main-heading">
            REGISTER FOR <span className="text-gradient-cyan">TECHNOVERSE 2.O</span>
          </h3>

          <p className="modal-description">
            Organized by <strong>ACM Student Chapter, Banasthali Vidyapith</strong>. Open to all disciplines, departments, and academic years.
          </p>

          {/* Registration Options Grid */}
          <div className="modal-options-grid">
            <div className="modal-option-card">
              <div className="option-icon-box">
                <UserPlus size={20} className="text-cyan" />
              </div>
              <div className="option-content">
                <h4>Solo Innovator</h4>
                <p>Register as an individual. You will be matched into a 3-5 member squad during Stage 02 (Innovation Mixer).</p>
              </div>
            </div>

            <div className="modal-option-card">
              <div className="option-icon-box">
                <Users size={20} className="text-cyan" />
              </div>
              <div className="option-content">
                <h4>Formed Squad (3—5 Members)</h4>
                <p>Register your complete squad directly with a designated Team Leader across any Banasthali departments.</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="modal-cta-group">
            <button
              type="button"
              className="modal-primary-btn"
              onClick={handleOpenLink}
              onMouseEnter={() => sounds.playHover()}
            >
              <span>{regUrl ? "OPEN OFFICIAL PORTAL" : "PROCEED TO REGISTRATION"}</span>
              <ArrowUpRight size={18} />
            </button>

            <button
              type="button"
              className="modal-copy-btn"
              onClick={handleCopyLink}
              onMouseEnter={() => sounds.playHover()}
            >
              {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              <span>{copied ? "LINK COPIED!" : "SHARE PORTAL LINK"}</span>
            </button>
          </div>

          {/* Status Note */}
          <div className="modal-status-notice">
            <ShieldCheck size={16} className="text-cyan" />
            <span>Zero registration fee · ACM verified certification & national showcase</span>
          </div>
        </div>
      </div>
    </div>
  );
}
