import React from "react";

export function CyberBackground() {
  return (
    <div className="cyber-bg-wrapper" aria-hidden="true">
      {/* Deep Ambient Glow Orbs */}
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />

      {/* Cyber Grid Lines */}
      <div className="cyber-grid" />

      {/* Subtle Scanline Overlay */}
      <div className="scanline-overlay" />
    </div>
  );
}
