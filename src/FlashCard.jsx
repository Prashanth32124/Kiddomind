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

/* ========== ANIMALS (BILINGUAL) ========== */
const animals = [
  { en: "Lion", id: "Singa", img: lion },
  { en: "Elephant", id: "Gajah", img: elephant },
  { en: "Dog", id: "Anjing", img: dog },
  { en: "Cat", id: "Kucing", img: cat },
  { en: "Tiger", id: "Harimau", img: tiger },
  { en: "Cow", id: "Sapi", img: cow },
  { en: "Horse", id: "Kuda", img: horse },
  { en: "Monkey", id: "Monyet", img: monkey },
  { en: "Rabbit", id: "Kelinci", img: rabbit },
  { en: "Bear", id: "Beruang", img: bear },
];

/* ========== TEXTS ========== */
const texts = {
  en: {
    title: "🐾 Animal Flash Cards",
    score: "Score",
    question: "What is this animal?",
    placeholder: "Type name",
    submit: "Submit",
    correct: "✅ Correct!",
    wrong: "❌ Try again!",
    next: "Next ▶",
    time: "Time left",
  },
  id: {
    title: "🐾 Kartu Flash Hewan",
    score: "Skor",
    question: "Hewan apakah ini?",
    placeholder: "Ketik nama",
    submit: "Kirim",
    correct: "✅ Benar!",
    wrong: "❌ Coba lagi!",
    next: "Lanjut ▶",
    time: "Sisa waktu",
  },
};

function FlashCard() {
  const TOTAL_TIME = 8;

  const [lang, setLang] = useState("id"); // default Indonesian
  const t = texts[lang];

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
    const correctName =
      lang === "id" ? animals[index].id : animals[index].en;

    if (input.trim().toLowerCase() === correctName.toLowerCase()) {
      setScore((prev) => prev + 10);
      setMsg(t.correct);
    } else {
      setMsg(t.wrong);
    }
  }

  function nextCard() {
    if (index < animals.length - 1) {
      setIndex((prev) => prev + 1);
    }
  }

  return (
    <div style={styles.page}>
      {/* ===== TOP LANGUAGE BAR ===== */}
      <div style={styles.topBar}>
        <button
          style={lang === "id" ? styles.langActive : styles.langBtn}
          onClick={() => setLang("id")}
        >
          ID
        </button>
        <button
          style={lang === "en" ? styles.langActive : styles.langBtn}
          onClick={() => setLang("en")}
        >
          EN
        </button>
      </div>

      <div style={styles.cardBox}>
        <h2 style={styles.title}>{t.title}</h2>
        <h3 style={styles.score}>⭐ {t.score}: {score}</h3>

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
              <h3>{t.question}</h3>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                style={styles.input}
              />
              <br />
              <button onClick={checkAnswer} style={styles.submitBtn}>
                {t.submit}
              </button>
            </div>
          )}
        </div>

        {/* TIMER */}
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
              ⏳ {t.time}: {timeLeft}s
            </p>
          </div>
        )}

        <p style={styles.feedback}>{msg}</p>

        {!showFront && (
          <button onClick={nextCard} style={styles.nextBtn}>
            {t.next}
          </button>
        )}
      </div>
    </div>
  );
}

/* ========== STYLES (FIXED) ========== */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    fontFamily: "'Poppins', 'Nunito', Arial, sans-serif", // ✅ CLEAN FONT
    position: "relative",
  },

  /* TOP BAR */
  topBar: {
    position: "absolute",
    top: 12,
    right: 12,
    display: "flex",
    gap: 6,
  },

  langBtn: {
    padding: "4px 8px",
    fontSize: 12,
    borderRadius: 8,
    border: "1px solid #ccc",
    background: "#fff",
    cursor: "pointer",
  },

  langActive: {
    padding: "4px 8px",
    fontSize: 12,
    borderRadius: 8,
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    fontWeight: 600,
    cursor: "pointer",
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
    fontSize: 15,
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
    fontSize: 15,
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
    fontSize: 17,
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
