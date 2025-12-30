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
    lang: "Language",

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
    lang: "Bahasa",

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
  const [lang, setLang] = useState("id"); // ✅ Default Indonesian
  const t = translations[lang];

  return (
    <div style={styles.page}>
      {/* ===== Sidebar Language Toggle ===== */}
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

      {/* ===== Logo ===== */}
      <div style={styles.logoWrap}>
        <img src={logo} alt="KiddoMind Logo" style={styles.logo} />
      </div>

      {/* ===== Title ===== */}
      <h1 style={styles.title}>
        {t.title} <span style={{ color: "#ff6f61" }}>KIDDOMIND</span>
      </h1>
      <p style={styles.subtitle}>{t.subtitle}</p>

      {/* ===== Courses ===== */}
      <div style={styles.container}>
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
  );
}

/* ========== STYLES ========== */
const styles = {
  page: {
    minHeight: "100vh",
    padding: "30px 16px",
    textAlign: "center",
    background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
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
    border: "none",
    borderRadius: 12,
    padding: "6px 10px",
    marginBottom: 10,
    fontSize: 12,
    fontWeight: "bold",
  },

  logoWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 12,
  },

  logo: {
    width: 110,
    height: 110,
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #fff",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: "2.2rem",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: "1.1rem",
    marginBottom: 30,
    color: "#444",
  },

  container: {
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
    fontSize: "16px",
    borderRadius: 14,
    border: "none",
    background: "linear-gradient(135deg, #ff6f61, #ff9472)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Courses;
