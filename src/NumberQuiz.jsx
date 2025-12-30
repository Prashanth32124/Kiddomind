import React, { useState } from "react";

/* ========== TEXTS (BILINGUAL) ========== */
const texts = {
  en: {
    title: "🔢 Number Quiz",
    choose: "Choose your difficulty",
    easy: "🎂 Cake Walk",
    medium: "⚡ Medium",
    hard: "🔥 Hard",
    score: "Score",
    correct: "✅ Correct!",
    wrong: "❌ Wrong answer",
    next: "Next ▶",
    change: "⬅ Change Level",
  },
  id: {
    title: "🔢 Kuis Angka",
    choose: "Pilih tingkat kesulitan",
    easy: "🎂 Mudah",
    medium: "⚡ Sedang",
    hard: "🔥 Sulit",
    score: "Skor",
    correct: "✅ Benar!",
    wrong: "❌ Jawaban salah",
    next: "Lanjut ▶",
    change: "⬅ Ganti Level",
  },
};

function NumberQuiz() {
  const [lang, setLang] = useState("id"); // ✅ default Indonesian
  const t = texts[lang];

  const [level, setLevel] = useState(null);
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [answered, setAnswered] = useState(false);

  function generateQuestion(selectedLevel) {
    let qText = "";
    let answer = 0;

    if (selectedLevel === "easy") {
      const n1 = Math.floor(Math.random() * 5) + 1;
      const n2 = Math.floor(Math.random() * 5) + 1;
      answer = n1 + n2;
      qText = `${n1} + ${n2}`;
    }

    if (selectedLevel === "medium") {
      const n1 = Math.floor(Math.random() * 10) + 1;
      const n2 = Math.floor(Math.random() * 10) + 1;
      answer = n1 + n2;
      qText = `${n1} + ${n2}`;
    }

    if (selectedLevel === "hard") {
      const n1 = Math.floor(Math.random() * 10) + 1;
      const n2 = Math.floor(Math.random() * 10) + 1;
      const n3 = Math.floor(Math.random() * 10) + 1;
      answer = n1 + n2 - n3;
      qText = `${n1} + ${n2} - ${n3}`;
    }

    return { qText, answer };
  }

  function startQuiz(selectedLevel) {
    setLevel(selectedLevel);
    setScore(0);
    setMessage("");
    setAnswered(false);
    setQuestion(generateQuestion(selectedLevel));
  }

  function checkAnswer(value) {
    if (answered) return;

    if (value === question.answer) {
      setScore((prev) => prev + 10);
      setMessage(t.correct);
    } else {
      setMessage(t.wrong);
    }
    setAnswered(true);
  }

  function nextQuestion() {
    setMessage("");
    setAnswered(false);
    setQuestion(generateQuestion(level));
  }

  /* ===== LEVEL SCREEN ===== */
  if (!level) {
    return (
      <div style={styles.page}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h4 style={styles.sideTitle}>🌍</h4>
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
          <h1 style={styles.title}>{t.title}</h1>
          <p style={styles.sub}>{t.choose}</p>

          <button style={styles.levelBtn} onClick={() => startQuiz("easy")}>
            {t.easy}
          </button>

          <button style={styles.levelBtn} onClick={() => startQuiz("medium")}>
            {t.medium}
          </button>

          <button style={styles.levelBtn} onClick={() => startQuiz("hard")}>
            {t.hard}
          </button>
        </div>
      </div>
    );
  }

  const options = [
    question.answer,
    question.answer + 1,
    Math.max(question.answer - 1, 0),
  ].sort(() => Math.random() - 0.5);

  return (
    <div style={styles.page}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h4 style={styles.sideTitle}>🌍</h4>
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
        <h3 style={styles.score}>⭐ {t.score}: {score}</h3>

        <div style={styles.questionBox}>
          <h2>{question.qText} = ?</h2>
        </div>

        <div style={styles.options}>
          {options.map((opt, i) => (
            <button
              key={i}
              style={{
                ...styles.optionBtn,
                backgroundColor: answered ? "#ddd" : "#ffb703",
              }}
              onClick={() => checkAnswer(opt)}
              disabled={answered}
            >
              {opt}
            </button>
          ))}
        </div>

        <p
          style={{
            fontSize: 18,
            color: message.includes("✅") ? "green" : "red",
          }}
        >
          {message}
        </p>

        {answered && (
          <button style={styles.nextBtn} onClick={nextQuestion}>
            {t.next}
          </button>
        )}

        <button style={styles.backBtn} onClick={() => setLevel(null)}>
          {t.change}
        </button>
      </div>
    </div>
  );
}

/* ========== STYLES ========== */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    fontFamily: "'Comic Sans MS', 'Poppins', cursive",
    paddingLeft: 80,
  },

  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    width: 70,
    height: "100vh",
    background: "#ff9f43",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
    boxShadow: "4px 0 12px rgba(0,0,0,0.2)",
  },

  sideTitle: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 16,
  },

  langBtn: {
    background: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "6px 10px",
    marginBottom: 10,
    cursor: "pointer",
    fontSize: 12,
  },

  langActive: {
    background: "#2ecc71",
    color: "#fff",
    borderRadius: 12,
    padding: "6px 10px",
    marginBottom: 10,
    fontWeight: "bold",
  },

  card: {
    background: "#fff",
    width: "100%",
    maxWidth: 360,
    padding: 24,
    borderRadius: 25,
    textAlign: "center",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
  },

  title: {
    color: "#6a0572",
    marginBottom: 5,
  },

  sub: {
    color: "#555",
    marginBottom: 20,
  },

  score: {
    marginBottom: 10,
  },

  questionBox: {
    background: "#f1f1f1",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },

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

  levelBtn: {
    width: "100%",
    padding: 14,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 16,
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },

  nextBtn: {
    marginTop: 15,
    padding: "12px 30px",
    fontSize: 16,
    borderRadius: 14,
    border: "none",
    backgroundColor: "#ff595e",
    color: "#fff",
    cursor: "pointer",
  },

  backBtn: {
    marginTop: 10,
    padding: "8px 16px",
    fontSize: 14,
    borderRadius: 10,
    border: "none",
    backgroundColor: "#ccc",
    cursor: "pointer",
  },
};

export default NumberQuiz;
