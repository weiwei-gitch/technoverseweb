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
      backgroundColor: '#020712',
      color: '#ffffff',
      padding: '50px 0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(6, 182, 212, 0.2)',
      borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
      boxSizing: 'border-box'
    }}>
      {/* Dynamic CSS Keyframes & Hover Effects */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Share+Tech+Mono&display=swap');

        @keyframes scrollReel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .reel-track-anim {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: scrollReel 35s linear infinite;
        }

        .reel-track-anim:hover {
          animation-play-state: paused;
        }

        .film-card {
          width: 280px;
          height: 175px;
          flex-shrink: 0;
          border-radius: 6px;
          overflow: hidden;
          border: 1.5px solid rgba(34, 211, 238, 0.35);
          background-color: #000;
          transition: all 0.3s ease;
        }

        .film-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(125%) brightness(85%);
          transition: filter 0.4s ease, transform 0.4s ease;
        }

        .film-card:hover {
          border-color: #22d3ee;
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
        }

        .film-card:hover img {
          filter: grayscale(0%) contrast(100%) brightness(100%);
          transform: scale(1.05);
        }
      `}</style>

      {/* Title Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 25px auto', padding: '0 24px' }}>
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

      {/* Film Reel Frame */}
      <div style={{ 
        width: '100%', 
        backgroundColor: '#01040a', 
        padding: '18px 0', 
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
          gap: '10px', 
          padding: '0 8px', 
          overflow: 'hidden', 
          opacity: 0.35, 
          marginBottom: '14px' 
        }}>
          {Array.from({ length: 70 }).map((_, i) => (
            <div key={i} style={{ width: '16px', height: '10px', backgroundColor: '#22d3ee', borderRadius: '2px', flexShrink: 0 }} />
          ))}
        </div>

        {/* Moving Reel Track */}
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <div className="reel-track-anim">
            {extendedImages.map((src, index) => (
              <div key={index} className="film-card">
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
          gap: '10px', 
          padding: '0 8px', 
          overflow: 'hidden', 
          opacity: 0.35, 
          marginTop: '14px' 
        }}>
          {Array.from({ length: 70 }).map((_, i) => (
            <div key={i} style={{ width: '16px', height: '10px', backgroundColor: '#22d3ee', borderRadius: '2px', flexShrink: 0 }} />
          ))}
        </div>
      </div>
    </section>
  );
}