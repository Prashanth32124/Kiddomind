import React, { useState } from "react";

/* ================== OBJECT NAMES (BILINGUAL) ================== */
const OBJECT_NAMES = {
  "🍎": { en: "apples", id: "apel" },
  "🍊": { en: "oranges", id: "jeruk" },
  "🍍": { en: "pineapples", id: "nanas" },
  "🐦": { en: "birds", id: "burung" },
  "🪑": { en: "chairs", id: "kursi" },
};

const OBJECTS = Object.keys(OBJECT_NAMES);

/* ================== QUESTION GENERATOR ================== */
function generateQuestions(total = 100, lang = "id") {
  const questions = [];

  for (let i = 0; i < total; i++) {
    const itemCount = Math.floor(Math.random() * 6) + 5;
    const objects = [];

    for (let j = 0; j < itemCount; j++) {
      objects.push(
        OBJECTS[Math.floor(Math.random() * OBJECTS.length)]
      );
    }

    const ask = objects[Math.floor(Math.random() * objects.length)];

    const questionText =
      lang === "id"
        ? `Ada berapa ${OBJECT_NAMES[ask].id}?`
        : `How many ${OBJECT_NAMES[ask].en}?`;

    questions.push({
      id: i + 1,
      objects,
      ask,
      questionText,
      answer: objects.filter((o) => o === ask).length,
    });
  }

  return questions;
}

function CountnChoose() {
  const [lang, setLang] = useState("id"); // default Indonesian

  const [questions] = useState(() =>
    generateQuestions(100, "id")
      .sort(() => Math.random() - 0.5)
      .slice(0, 15)
  );

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [answered, setAnswered] = useState(false);

  const currentQ = questions[current];
  const correctCount = currentQ.answer;

  const options = [
    correctCount,
    correctCount + 1,
    Math.max(correctCount - 1, 0),
  ].sort(() => Math.random() - 0.5);

  const texts = {
    en: {
      score: "Score",
      question: "Question",
      correct: "✅ Correct!",
      wrong: "❌ Try again!",
      next: "Next ▶",
      finish: "🎉 Game Finished!",
      final: "Final Score",
    },
    id: {
      score: "Skor",
      question: "Soal",
      correct: "✅ Benar!",
      wrong: "❌ Coba lagi!",
      next: "Lanjut ▶",
      finish: "🎉 Permainan Selesai!",
      final: "Skor Akhir",
    },
  };

  const t = texts[lang];

  const handleAnswer = (value) => {
    if (answered) return;

    if (value === correctCount) {
      setScore((prev) => prev + 10);
      setFeedback(t.correct);
    } else {
      setFeedback(t.wrong);
    }
    setAnswered(true);
  };

  const handleNext = () => {
    setAnswered(false);
    setFeedback("");
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

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

      <div style={styles.card}>
        <h2 style={styles.score}>⭐ {t.score}: {score}</h2>

        <h3 style={styles.progress}>
          {t.question} {current + 1} / {questions.length}
        </h3>

        <div style={styles.objects}>
          {currentQ.objects.map((obj, i) => (
            <span key={i} style={styles.object}>
              {obj}
            </span>
          ))}
        </div>

        <h2 style={styles.question}>{currentQ.questionText}</h2>

        <div style={styles.options}>
          {options.map((num, i) => (
            <button
              key={i}
              disabled={answered}
              onClick={() => handleAnswer(num)}
              style={{
                ...styles.optionBtn,
                backgroundColor: answered ? "#ddd" : "#ffb703",
              }}
            >
              {num}
            </button>
          ))}
        </div>

        {feedback && (
          <h3 style={{ color: feedback.includes("✅") ? "green" : "red" }}>
            {feedback}
          </h3>
        )}

        {answered && current < questions.length - 1 && (
          <button style={styles.nextBtn} onClick={handleNext}>
            {t.next}
          </button>
        )}

        {answered && current === questions.length - 1 && (
          <h2 style={styles.finish}>
            {t.finish} <br />
            {t.final}: {score}
          </h2>
        )}
      </div>
    </div>
  );
}

/* ================== STYLES (FIXED) ================== */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    fontFamily: "'Poppins', 'Nunito', Arial, sans-serif", // ✅ FIXED FONT
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

  card: {
    width: "100%",
    maxWidth: 520,
    background: "#fff",
    padding: 24,
    borderRadius: 25,
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  score: { marginBottom: 5 },
  progress: { color: "#555", marginBottom: 15 },
  objects: { fontSize: 42, marginBottom: 15 },
  object: { margin: 8 },
  question: { marginBottom: 15, color: "#333" },

  options: {
    display: "flex",
    justifyContent: "center",
    gap: 15,
    flexWrap: "wrap",
  },

  optionBtn: {
    fontSize: 20,
    padding: "12px 24px",
    borderRadius: 15,
    border: "none",
    cursor: "pointer",
    minWidth: 80,
  },

  nextBtn: {
    marginTop: 20,
    padding: "12px 30px",
    fontSize: 18,
    borderRadius: 16,
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },

  finish: {
    marginTop: 20,
    color: "#6a0572",
  },
};

export default CountnChoose;
