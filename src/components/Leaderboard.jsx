import React, { useState } from "react";
import { sounds } from "./AudioEffects";
import { Trophy, Medal, Search, Activity, Sparkles, Shield, AlertCircle } from "lucide-react";

export function Leaderboard({ list = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = list.filter((item) =>
    item.teamName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.currentStage?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const top3 = list.slice(0, 3);

  return (
    <section className="leaderboard-section" id="leaderboard">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-tag-box">
            <span className="tag-bracket">[</span>
            <span className="tag-num">06</span>
            <span className="tag-label">LIVE COMPETITION ARENA</span>
            <span className="tag-bracket">]</span>
          </div>
          <h2 className="section-title">
            STANDINGS & <span className="text-gradient-cyan">LEADERBOARD</span>.
          </h2>
          <p className="section-lead-text">
            Track real-time squad evaluations, checkpoint scores, and stage progressions as teams advance toward the Grand Finale.
          </p>
        </div>

        {list.length > 0 ? (
          <div className="leaderboard-content-wrapper">
            {/* Top 3 Podium Visualizer */}
            {top3.length > 0 && (
              <div className="podium-grid">
                {/* 2nd Place */}
                {top3[1] && (
                  <div className="podium-card podium-silver">
                    <div className="podium-medal">
                      <Medal size={28} className="text-slate-300" />
                      <span className="rank-num">#2</span>
                    </div>
                    <h3 className="podium-team-name">{top3[1].teamName}</h3>
                    <span className="podium-stage-tag">{top3[1].currentStage}</span>
                    <div className="podium-score-badge">
                      <span>SCORE: {top3[1].score} PTS</span>
                    </div>
                  </div>
                )}

                {/* 1st Place */}
                {top3[0] && (
                  <div className="podium-card podium-gold">
                    <div className="podium-crown">👑</div>
                    <div className="podium-medal">
                      <Trophy size={34} className="text-yellow-400" />
                      <span className="rank-num">#1</span>
                    </div>
                    <h3 className="podium-team-name">{top3[0].teamName}</h3>
                    <span className="podium-stage-tag">{top3[0].currentStage}</span>
                    <div className="podium-score-badge gold-badge">
                      <span>SCORE: {top3[0].score} PTS</span>
                    </div>
                  </div>
                )}

                {/* 3rd Place */}
                {top3[2] && (
                  <div className="podium-card podium-bronze">
                    <div className="podium-medal">
                      <Medal size={28} className="text-amber-600" />
                      <span className="rank-num">#3</span>
                    </div>
                    <h3 className="podium-team-name">{top3[2].teamName}</h3>
                    <span className="podium-stage-tag">{top3[2].currentStage}</span>
                    <div className="podium-score-badge">
                      <span>SCORE: {top3[2].score} PTS</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Search & Filter Bar */}
            <div className="leaderboard-filter-row">
              <div className="search-input-box">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search team name or stage..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="live-sync-indicator">
                <span className="live-dot" />
                <span>API SYNCED // LIVE</span>
              </div>
            </div>

            {/* Table Standings */}
            <div className="leaderboard-table-card">
              <div className="table-responsive">
                <table className="leaderboard-table">
                  <thead>
                    <tr>
                      <th>RANK</th>
                      <th>TEAM NAME</th>
                      <th>CURRENT CHECKPOINT</th>
                      <th className="text-right">TOTAL SCORE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredList.map((team, idx) => (
                      <tr key={team.id || idx} onMouseEnter={() => sounds.playHover()}>
                        <td className="rank-cell">
                          <span className={`rank-pill ${team.rank <= 3 ? "top-rank-pill" : ""}`}>
                            #{team.rank || idx + 1}
                          </span>
                        </td>
                        <td className="team-name-cell">
                          <strong>{team.teamName}</strong>
                        </td>
                        <td className="stage-cell">
                          <span className="table-stage-badge">{team.currentStage}</span>
                        </td>
                        <td className="score-cell text-right">
                          <span className="score-number">{team.score}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          /* High-Tech Empty State Hologram */
          <div className="leaderboard-empty-card">
            <div className="empty-hologram-beacon">
              <Activity size={36} className="text-cyan animate-pulse" />
            </div>
            <h3 className="empty-title">LEADERBOARD STANDINGS PENDING</h3>
            <p className="empty-subtitle">
              Live scoreboards and squad progressions will activate immediately following the evaluation round of <strong>Milestone I</strong>.
            </p>
            <div className="empty-telemetry-badge">
              <Sparkles size={15} className="text-cyan" />
              <span>STAGE EVALUATION ENGINE ARMED & READY</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
