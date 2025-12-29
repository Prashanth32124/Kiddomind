import React, { useState, useEffect } from "react";

// import animal images
import lion from "./animals/lion.png";
import elephant from "./animals/elephant.png";
import dog from "./animals/dog.png";
import cat from "./animals/cat.png";
import tiger from "./animals/tiger.png";
import cow from "./animals/cow.png";
import horse from "./animals/horse.png";
import monkey from "./animals/monkey.png";
import rabbit from "./animals/rabbit.png";
import bear from "./animals/bear.png";

function FlashCard() {
  const animals = [
    { name: "Lion", img: lion },
    { name: "Elephant", img: elephant },
    { name: "Dog", img: dog },
    { name: "Cat", img: cat },
    { name: "Tiger", img: tiger },
    { name: "Cow", img: cow },
    { name: "Horse", img: horse },
    { name: "Monkey", img: monkey },
    { name: "Rabbit", img: rabbit },
    { name: "Bear", img: bear },
  ];

  const TOTAL_TIME = 8;

  const [index, setIndex] = useState(0);
  const [showFront, setShowFront] = useState(true);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [msg, setMsg] = useState("");
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    setShowFront(true);
    setInput("");
    setMsg("");
    setTimeLeft(TOTAL_TIME);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setShowFront(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [index]);

  function checkAnswer() {
    if (
      input.trim().toLowerCase() ===
      animals[index].name.toLowerCase()
    ) {
      setScore((prev) => prev + 10);
      setMsg("✅ Correct!");
    } else {
      setMsg("❌ Try again!");
    }
  }

  function nextCard() {
    if (index < animals.length - 1) {
      setIndex((prev) => prev + 1);
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.cardBox}>
        <h2 style={styles.title}>🐾 Animal Flash Cards</h2>
        <h3 style={styles.score}>⭐ Score: {score}</h3>

        {/* CARD */}
        <div style={styles.card}>
          {showFront ? (
            <img
              src={animals[index].img}
              alt="animal"
              style={styles.image}
            />
          ) : (
            <div>
              <h3>What is this animal?</h3>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type name"
                style={styles.input}
              />
              <br />
              <button onClick={checkAnswer} style={styles.submitBtn}>
                Submit
              </button>
            </div>
          )}
        </div>

        {/* TIMELINE */}
        {showFront && (
          <div style={styles.timelineWrap}>
            <div style={styles.timelineBg}>
              <div
                style={{
                  ...styles.timelineFill,
                  width: `${(timeLeft / TOTAL_TIME) * 100}%`,
                  backgroundColor:
                    timeLeft <= 3 ? "#ff595e" : "#4CAF50",
                }}
              />
            </div>
            <p style={styles.timerText}>
              ⏳ Time left: {timeLeft}s
            </p>
          </div>
        )}

        <p style={styles.feedback}>{msg}</p>

        {!showFront && (
          <button onClick={nextCard} style={styles.nextBtn}>
            Next ▶
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    background:
      "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    fontFamily: "'Comic Sans MS', Arial, sans-serif",
  },
  cardBox: {
    background: "#fff",
    padding: 24,
    borderRadius: 25,
    width: "100%",
    maxWidth: 380,
    textAlign: "center",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
  },
  title: {
    marginBottom: 5,
    color: "#6a0572",
  },
  score: {
    marginBottom: 15,
    color: "#444",
  },
  card: {
    width: 260,
    height: 260,
    margin: "0 auto 15px",
    borderRadius: 20,
    background: "#f9f9f9",
    border: "2px dashed #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "85%",
    height: "85%",
    objectFit: "contain",
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    border: "1px solid #ccc",
    outline: "none",
    width: 180,
  },
  submitBtn: {
    marginTop: 12,
    padding: "8px 20px",
    borderRadius: 12,
    border: "none",
    backgroundColor: "#ff9f1c",
    color: "#fff",
    fontSize: 16,
    cursor: "pointer",
  },
  timelineWrap: {
    marginTop: 10,
  },
  timelineBg: {
    height: 18,
    background: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },
  timelineFill: {
    height: "100%",
    transition: "width 1s linear",
  },
  timerText: {
    marginTop: 6,
    fontSize: 14,
    color: "#333",
  },
  feedback: {
    fontSize: 18,
    marginTop: 10,
  },
  nextBtn: {
    marginTop: 15,
    padding: "10px 26px",
    fontSize: 16,
    borderRadius: 14,
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
};

export default FlashCard;
