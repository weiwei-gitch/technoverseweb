import React from 'react';

const memoriesImages = [
  '/memories/1.jpg',
  '/memories/2.jpg',
  '/memories/3.jpg',
  '/memories/4.jpg',
  '/memories/5.jpg',
  '/memories/6.jpg',
  '/memories/7.jpg',
  '/memories/8.jpg',
  '/memories/9.jpg',
  '/memories/10.jpg',
  '/memories/11.jpg',
  '/memories/12.jpg',
  '/memories/13.jpg',
  '/memories/14.jpg',
  '/memories/15.jpg',
];

export default function MemoriesSection() {
  const extendedImages = [
    ...memoriesImages,
    ...memoriesImages,
    ...memoriesImages,
  ];

  return (
    <section style={{
      width: '100%',
      backgroundColor: '#030712', // Video wala exact dark background
      color: '#ffffff',
      padding: '60px 0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(34, 211, 238, 0.2)',
      borderBottom: '1px solid rgba(34, 211, 238, 0.2)',
      position: 'relative',
      zIndex: 10
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Share+Tech+Mono&display=swap');

        @keyframes scrollReelAnim {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .memories-reel-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollReelAnim 30s linear infinite;
        }

        .memories-reel-track:hover {
          animation-play-state: paused;
        }

        .memories-card {
          width: 320px;
          height: 195px;
          flex-shrink: 0;
          border-radius: 8px;
          overflow: hidden;
          border: 1.5px solid rgba(34, 211, 238, 0.35);
          background-color: #000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          cursor: pointer;
        }

        .memories-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(120%) brightness(80%);
          transition: filter 0.4s ease, transform 0.4s ease;
        }

        .memories-card:hover {
          border-color: #22d3ee;
          box-shadow: 0 0 25px rgba(34, 211, 238, 0.6);
          transform: translateY(-4px);
        }

        .memories-card:hover img {
          filter: grayscale(0%) contrast(105%) brightness(100%);
          transform: scale(1.08);
        }
      `}</style>

      {/* Header Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 30px auto', padding: '0 24px' }}>
        <span style={{ 
          fontFamily: "'Share Tech Mono', monospace", 
          fontSize: '14px', 
          color: '#22d3ee', 
          letterSpacing: '2.5px', 
          textTransform: 'uppercase', 
          display: 'block' 
        }}>
          ACM-BV // ARCHIVE
        </span>
        <h2 style={{ 
          fontFamily: "'Orbitron', sans-serif", 
          fontSize: '44px', 
          fontWeight: '900', 
          color: '#ffffff', 
          letterSpacing: '4px', 
          margin: '8px 0', 
          textTransform: 'uppercase' 
        }}>
          OUR MEMORIES
        </h2>
        <p style={{ 
          fontFamily: "'Share Tech Mono', monospace", 
          fontSize: '15px', 
          color: 'rgba(34, 211, 238, 0.85)', 
          letterSpacing: '2px', 
          margin: 0 
        }}>
          THE PAST BECOMES THE JOURNEY.
        </p>
      </div>

      {/* Film Reel Container */}
      <div style={{ 
        width: '100%', 
        backgroundColor: '#020611', 
        padding: '22px 0', 
        borderTop: '1px solid rgba(34, 211, 238, 0.25)', 
        borderBottom: '1px solid rgba(34, 211, 238, 0.25)', 
        position: 'relative' 
      }}>
        
        {/* Top Sprockets */}
        <div style={{ 
          width: '100%', 
          height: '10px', 
          display: 'flex', 
          justify: 'space-between', 
          gap: '12px', 
          padding: '0 8px', 
          overflow: 'hidden', 
          opacity: 0.4, 
          marginBottom: '16px' 
        }}>
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} style={{ width: '18px', height: '10px', backgroundColor: '#22d3ee', borderRadius: '2px', flexShrink: 0 }} />
          ))}
        </div>

        {/* Moving Reel Track */}
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <div className="memories-reel-track">
            {extendedImages.map((src, index) => (
              <div key={index} className="memories-card">
                <img src={src} alt={`Memory ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Sprockets */}
        <div style={{ 
          width: '100%', 
          height: '10px', 
          display: 'flex', 
          justify: 'space-between', 
          gap: '12px', 
          padding: '0 8px', 
          overflow: 'hidden', 
          opacity: 0.4, 
          marginTop: '16px' 
        }}>
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} style={{ width: '18px', height: '10px', backgroundColor: '#22d3ee', borderRadius: '2px', flexShrink: 0 }} />
          ))}
        </div>
      </div>
    </section>
  );
}