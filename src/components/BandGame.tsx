import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const commands = ["Forward", "Left", "Right", "Backward"];

const BandGame: React.FC = () => {
  const [showRules, setShowRules] = useState(true);
  const [gameSequence, setGameSequence] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [currentRound, setCurrentRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [isPlayingSequence, setIsPlayingSequence] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [displayCommand, setDisplayCommand] = useState<string | null>(null);

  useEffect(() => {
    if (startGame && gameSequence.length === 0) {
      addCommandToSequence();
    }
  }, [startGame]);

  useEffect(() => {
    if (startGame && gameSequence.length > 0) {
      playSequence();
    }
  }, [gameSequence]);

  const addCommandToSequence = () => {
    const newCommand = commands[Math.floor(Math.random() * commands.length)];
    setGameSequence((prev) => [...prev, newCommand]);
  };

  const playSequence = () => {
    setIsPlayingSequence(true);
    let index = 0;
    const showCommand = () => {
      if (index < gameSequence.length) {
        setDisplayCommand(gameSequence[index]);
        setTimeout(() => {
          setDisplayCommand(null);
          setTimeout(() => {
            index++;
            showCommand();
          }, 300);
        }, 1000);
      } else {
        setTimeout(() => {
          setDisplayCommand(null);
          setIsPlayingSequence(false);
        }, 300);
      }
    };
    showCommand();
  };

  const handleArrowClick = (direction: string) => {
    if (gameOver || isPlayingSequence || gameWon) return;
    const newInput = [...userInput, direction];
    setUserInput(newInput);
    const index = newInput.length - 1;
    if (newInput[index] !== gameSequence[index]) {
      setGameOver(true);
    } else if (newInput.length === gameSequence.length) {
      if (currentRound === 10) {
        setGameWon(true);
      } else {
        setTimeout(() => {
          setCurrentRound((prev) => prev + 1);
          setUserInput([]);
          addCommandToSequence();
        }, 1000);
      }
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        color: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "200%",
        maxWidth: "1380px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ color: "#bb0000", textAlign: "center" }}>
        Marching Memory Challenge
      </h1>

      {showRules && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "25px 30px",
              borderRadius: "10px",
              maxWidth: "500px",
              width: "90%",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              color: "#000",
            }}
          >
            <h2>How to Play</h2>
            <p>
              You will be shown a sequence of marching commands, and will be
              asked to click the arrows in the same order. Each round, one more
              command will be added. Make a mistake and the game ends. Good
              luck!
            </p>
            <button
              onClick={() => setShowRules(false)}
              style={{
                marginTop: "20px",
                backgroundColor: "#bb0000",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {gameOver && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <h2 style={{ color: "#bb0000" }}>Game Over</h2>
          <p>
            Sorry, you made a mistake. The correct sequence was:
            <br />
            {gameSequence.join(" -> ")}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "20px",
              backgroundColor: "#bb0000",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      )}

      {gameWon && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <h2 style={{ color: "#008000" }}>Congratulations!</h2>
          <p>You made the band!</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "20px",
              backgroundColor: "#bb0000",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Try Again
          </button>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              backgroundColor: "#008000",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "6px",
              fontWeight: "bold",
            }}
          >
            Back to Main Page
          </Link>
        </div>
      )}

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h2>Round {currentRound}</h2>
        <p style={{ fontSize: "1.2rem", minHeight: "2rem" }}>
          {displayCommand ? (
            <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {displayCommand}
            </span>
          ) : startGame && !isPlayingSequence ? (
            "Now, it's your turn! Repeat the sequence!"
          ) : null}
        </p>
      </div>

      {!startGame && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={() => setStartGame(true)}
            style={{
              backgroundColor: "#bb0000",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Start Game
          </button>
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {commands.map((command) => (
          <button
            key={command}
            onClick={() => handleArrowClick(command)}
            disabled={isPlayingSequence || gameOver || gameWon}
            style={{
              width: "150px",
              height: "100px",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "10px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              cursor: isPlayingSequence ? "not-allowed" : "pointer",
              color: "#333",
            }}
          >
            {command}
          </button>
        ))}
      </div>

      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "30px",
          textDecoration: "none",
          color: "#fff",
          backgroundColor: "#bb0000",
          padding: "10px 20px",
          borderRadius: "6px",
          fontWeight: "bold",
        }}
      >
        Back to Band Info
      </Link>
    </div>
  );
};

export default BandGame;
