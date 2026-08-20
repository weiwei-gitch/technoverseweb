import React from "react";

export function AcmLogo({ className = "", compact = false }) {
  return (
    <div className={`acm-brand-badge ${className}`}>
      <div className="acm-logo-img-wrapper">
        <img
          src="/acmbvlogo.jpeg"
          alt="ACM Student Chapter Banasthali Vidyapith"
          className="acm-logo-img"
        />
      </div>
      {!compact && (
        <div className="acm-text-group">
          <span className="acm-title">ACM STUDENT CHAPTER</span>
          <span className="acm-sub">BANASTHALI VIDYAPITH</span>
        </div>
      )}
    </div>
  );
}

export function AcmLogoEmblem({ size = 48, className = "" }) {
  return (
    <div className={`acm-emblem-badge ${className}`} style={{ width: size, height: size }}>
      <img
        src="/acmbvlogo.jpeg"
        alt="ACM Student Chapter Banasthali Vidyapith"
        className="acm-emblem-img"
      />
    </div>
  );
}
