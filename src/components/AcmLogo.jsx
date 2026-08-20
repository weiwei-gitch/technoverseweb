import React from "react";

export function AcmLogo({ className = "", compact = false }) {
  return (
    <div className={`acm-brand-badge ${className}`}>
      <img
        src="/acm-white.png"
        alt="Banasthali Vidyapith ACM Student Chapter"
        className="acm-logo-img"
      />
    </div>
  );
}

export function AcmLogoEmblem({ size = 48, className = "" }) {
  return (
    <div
      className={`acm-emblem-badge ${className}`}
      style={{
        width: size * 2.8,
        height: size,
      }}
    >
      <img
        src="/acm-white.png"
        alt="Banasthali Vidyapith ACM Student Chapter"
        className="acm-emblem-img"
      />
    </div>
  );
}