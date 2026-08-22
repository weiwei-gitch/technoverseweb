import React from "react";
import "./querySection.css";

const QuerySection = () => {
  const handleQuery = () => {
    window.open("YOUR_GOOGLE_FORM_URL", "_blank");
  };

  return (
    <section className="query-section">
      <div className="query-content">
        <div className="query-top-label">
          WE'RE HERE TO HELP!
        </div>

        <h2>
          Have a <span>Query?</span>
        </h2>

        <p className="query-subtitle">
          We're here to assist you!
        </p>

        <button className="query-button" onClick={handleQuery}>
          <span className="query-icon">▤</span>
          <span>SUBMIT YOUR QUERY</span>
          <span className="query-arrow">→</span>
        </button>

        <div className="query-divider">
          <span></span>
          <b>✦</b>
          <span></span>
        </div>

        <div className="query-note">
          <span className="note-icon">▤</span>

          <p>
            All the queries will be answered on
            <br />
            our <span>Instagram handle.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuerySection;