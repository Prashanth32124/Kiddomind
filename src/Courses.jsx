import React, { useState } from "react";
import img1 from "./images/CountnChoose.png";
import img2 from "./images/flashcard.png";
import img3 from "./images/numberquiz.png";
import logo from "./images/logo.png";
import { useNavigate } from "react-router-dom";

/* ========== TRANSLATIONS ========== */
const translations = {
  en: {
    title: "Welcome to",
    subtitle: "Learn • Play • Grow",
    start: "Start Course",

    c1Title: "Count & Choose",
    c1Text:
      "Learn counting with fun objects like apples, birds, and chairs.",

    c2Title: "Animal Flash Cards",
    c2Text:
      "Watch animal images, remember them, and type the correct animal name.",

    c3Title: "Number Quiz",
    c3Text:
      "Choose difficulty and solve fun math questions with instant feedback.",
  },

  id: {
    title: "Selamat Datang di",
    subtitle: "Belajar • Bermain • Tumbuh",
    start: "Mulai",

    c1Title: "Hitung & Pilih",
    c1Text:
      "Belajar berhitung dengan objek menyenangkan seperti apel, burung, dan kursi.",

    c2Title: "Kartu Flash Hewan",
    c2Text:
      "Lihat gambar hewan, ingat, dan ketik nama hewan yang benar.",

    c3Title: "Kuis Angka",
    c3Text:
      "Pilih tingkat kesulitan dan selesaikan soal matematika dengan umpan balik instan.",
  },
};

function Courses() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("id"); // default Indonesian
  const t = translations[lang];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* ===== HEADER (LOGO + LANGUAGE) ===== */}
        <div style={styles.header}>
          <img src={logo} alt="KiddoMind Logo" style={styles.logo} />

          <div style={styles.langInline}>
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
        </div>

        {/* ===== TITLE ===== */}
        <h1 style={styles.title}>
          {t.title} <span style={{ color: "#ff6f61" }}>KIDDOMIND</span>
        </h1>
        <p style={styles.subtitle}>{t.subtitle}</p>

        {/* ===== COURSES ===== */}
        <div style={styles.cards}>
          {/* Course 1 */}
          <div style={styles.card}>
            <img src={img1} alt={t.c1Title} style={styles.image} />
            <h2>{t.c1Title}</h2>
            <p style={styles.text}>{t.c1Text}</p>
            <button
              onClick={() => navigate("/CountnChoose")}
              style={styles.button}
            >
              {t.start}
            </button>
          </div>

          {/* Course 2 */}
          <div style={styles.card}>
            <img src={img2} alt={t.c2Title} style={styles.image} />
            <h2>{t.c2Title}</h2>
            <p style={styles.text}>{t.c2Text}</p>
            <button
              onClick={() => navigate("/FlashCard")}
              style={styles.button}
            >
              {t.start}
            </button>
          </div>

          {/* Course 3 */}
          <div style={styles.card}>
            <img src={img3} alt={t.c3Title} style={styles.image} />
            <h2>{t.c3Title}</h2>
            <p style={styles.text}>{t.c3Text}</p>
            <button
              onClick={() => navigate("/NumberQuiz")}
              style={styles.button}
            >
              {t.start}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========== STYLES (FIXED) ========== */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    display: "flex",
    justifyContent: "center",
    padding: 16,
    fontFamily: "'Poppins', 'Nunito', Arial, sans-serif", // ✅ FIXED FONT
  },

  container: {
    width: "100%",
    maxWidth: 1000,
    background: "#fff",
    padding: 24,
    borderRadius: 24,
    textAlign: "center",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  logo: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    border: "4px solid #fff",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
    backgroundColor: "#fff",
  },

  langInline: {
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

  title: {
    fontSize: "2rem",
    marginBottom: 6,
    fontWeight: 600,
  },

  subtitle: {
    fontSize: "1rem",
    marginBottom: 24,
    color: "#444",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    gap: 24,
    flexWrap: "wrap",
  },

  card: {
    width: "100%",
    maxWidth: 300,
    background: "#fff",
    padding: 20,
    borderRadius: 20,
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },

  image: {
    width: "100%",
    height: 160,
    objectFit: "cover",
    borderRadius: 14,
    marginBottom: 15,
  },

  text: {
    fontSize: "0.95rem",
    color: "#555",
  },

  button: {
    marginTop: 18,
    width: "100%",
    padding: "12px",
    fontSize: 16,
    borderRadius: 14,
    border: "none",
    background: "linear-gradient(135deg, #ff6f61, #ff9472)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Courses;
