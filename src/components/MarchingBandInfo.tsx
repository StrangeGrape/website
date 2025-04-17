import React, { useState } from "react";
import { Link } from "react-router-dom";

const MarchingBandInfo: React.FC = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showTraditions, setShowTraditions] = useState(false);
  const [showFunFact, setShowFunFact] = useState(false);
  const [showRivalry, setShowRivalry] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const buttonStyle: React.CSSProperties = {
    margin: "10px 5px",
    padding: "10px 20px",
    backgroundColor: "#bb0000", // Ohio State red
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    width: "200px",
    maxWidth: "100%",
    transition: "background-color 0.3s ease",
  };

  const getButtonStyle = (buttonName: string): React.CSSProperties => ({
    ...buttonStyle,
    backgroundColor: hoveredButton === buttonName ? "#990000" : "#bb0000", // Darker red on hover
  });

  const sectionStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    marginTop: "15px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f4f4f4",
        color: "#333",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Top Right Link */}
      <a
        href="https://tbdbitl.osu.edu/how-join/summer-sessions"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          color: "#bb0000",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1rem",
          backgroundColor: "#fff",
          padding: "10px 15px",
          borderRadius: "6px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        Learn About Joining
      </a>

      <header
        style={{
          backgroundColor: "#bb0000",
          color: "#fff",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>
          The Ohio State Marching Band
        </h1>
      </header>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        Known as <strong>"The Best Damn Band in the Land" (TBDBITL)</strong>,
        the{" "}
        <a
          href="https://en.wikipedia.org/wiki/Ohio_State_University_Marching_Band"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#bb0000", textDecoration: "none" }}
        >
          Ohio State Marching Band
        </a>{" "}
        is one of the most celebrated collegiate marching bands in the world. It
        is famous for its precision marching, innovative halftime shows, and the
        iconic "Script Ohio."
      </p>

      {/* Buttons and Sections */}
      <div style={{ marginTop: "20px" }}>
        {/* History */}
        <div>
          <button
            onClick={() => setShowHistory(!showHistory)}
            onMouseEnter={() => setHoveredButton("history")}
            onMouseLeave={() => setHoveredButton(null)}
            style={getButtonStyle("history")}
          >
            {showHistory ? "Hide History" : "Show History"}
          </button>
          {showHistory && (
            <section style={sectionStyle}>
              <h2>History</h2>
              <p>
                The band was founded in 1878 and has grown into a symbol of
                pride for The Ohio State University. It is composed entirely of
                brass and percussion instruments, making it one of the largest
                all-brass and percussion bands in the world.
              </p>
            </section>
          )}
        </div>

        {/* Traditions */}
        <div>
          <button
            onClick={() => setShowTraditions(!showTraditions)}
            onMouseEnter={() => setHoveredButton("traditions")}
            onMouseLeave={() => setHoveredButton(null)}
            style={getButtonStyle("traditions")}
          >
            {showTraditions ? "Hide Traditions" : "Show Traditions"}
          </button>
          {showTraditions && (
            <section
              style={{
                ...sectionStyle,
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: "1", minWidth: "250px" }}>
                <h2>Traditions</h2>
                <ul>
                  <li>
                    <strong>Script Ohio:</strong> The band performs the iconic
                    Script Ohio formation, where a sousaphone player dots the
                    "i" in "Ohio."
                  </li>
                  <li>
                    <strong>Ramp Entrance:</strong> The band's entrance onto the
                    field is a highly anticipated moment at every game.
                  </li>
                  <li>
                    <strong>Skull Session:</strong> A pregame pep rally held at
                    St. John Arena where fans can watch the band rehearse.
                  </li>
                </ul>
                <img
                  src="/script-ohio.jpeg"
                  alt="Script Ohio formation"
                  style={{
                    width: "250px",
                    height: "auto",
                    borderRadius: "6px",
                    flexShrink: 0,
                  }}
                />
              </div>
            </section>
          )}
        </div>

        {/* Fun Fact */}
        <div>
          <button
            onClick={() => setShowFunFact(!showFunFact)}
            onMouseEnter={() => setHoveredButton("funFact")}
            onMouseLeave={() => setHoveredButton(null)}
            style={getButtonStyle("funFact")}
          >
            {showFunFact ? "Hide Fun Fact" : "Show Fun Fact"}
          </button>
          {showFunFact && (
            <section style={sectionStyle}>
              <h2>Fun Fact</h2>
              <p>
                The Ohio State Marching Band is often referred to as "The Pride
                of the Buckeyes" and has performed at numerous high-profile
                events, including presidential inaugurations and international
                performances.
              </p>
            </section>
          )}
        </div>

        {/* Rivalry */}
        <div>
          <button
            onClick={() => setShowRivalry(!showRivalry)}
            onMouseEnter={() => setHoveredButton("rivalry")}
            onMouseLeave={() => setHoveredButton(null)}
            style={getButtonStyle("rivalry")}
          >
            {showRivalry ? "Hide Rivalry" : "Show Rivalry"}
          </button>
          {showRivalry && (
            <section
              style={{
                ...sectionStyle,
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: "1", minWidth: "250px" }}>
                <h2>Rivalry</h2>
                <p>
                  The band has a long-standing rivalry with the Michigan
                  Marching Band, and their halftime performances during the Ohio
                  State vs. Michigan football game are legendary.
                </p>
              </div>
              <img
                src="/ohio-state-tbdbitl-gif.gif"
                alt="TBDBITL GIF"
                style={{
                  width: "250px",
                  height: "auto",
                  borderRadius: "6px",
                  flexShrink: 0,
                }}
              />
            </section>
          )}
        </div>
      </div>
      <Link
        to="/game"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "#fff",
          backgroundColor: "#bb0000",
          padding: "10px 15px",
          borderRadius: "6px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        🎮 Play Game
      </Link>
    </div>
  );
};

export default MarchingBandInfo;
