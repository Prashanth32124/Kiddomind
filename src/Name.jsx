import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ========== TRANSLATIONS ========== */
const translations = {
  en: {
    welcome: "Welcome to",
    subtitle: "Enter your name to start learning and playing 🎉",
    placeholder: "Enter your name",
    alert: "Please enter your name",
    button: "Enter Your World",
  },
  id: {
    welcome: "Selamat Datang di",
    subtitle: "Masukkan namamu untuk mulai belajar dan bermain 🎉",
    placeholder: "Masukkan nama kamu",
    alert: "Silakan masukkan nama kamu",
    button: "Masuk ke Duniamu",
  },
};

function Name() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [lang, setLang] = useState("id"); // default Indonesian

  const t = translations[lang];

  const handleSubmit = () => {
    if (username.trim() === "") {
      alert(t.alert);
      return;
    }
    navigate("/Courses");
  };

  return (
    <div style={styles.page}>
      {/* ===== TOP BAR (NOT LEFT) ===== */}
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

      {/* ===== CARD ===== */}
      <div style={styles.card}>
        <h1 style={styles.title}>
          👋 {t.welcome}{" "}
          <span style={{ color: "#4CAF50" }}>KiddoMind</span>
        </h1>

        <p style={styles.subtitle}>{t.subtitle}</p>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={t.placeholder}
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.button}>
          {t.button} {username && `, ${username} 🚀`}
        </button>
      </div>
    </div>
  );
}

/* ========== STYLES (FIXED) ========== */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #a8edea, #fed6e3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
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
    border: "none",
    background: "#4CAF50",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },

  card: {
    background: "#fff",
    padding: 32,
    borderRadius: 24,
    width: "100%",
    maxWidth: 360,
    textAlign: "center",
    boxShadow: "0 15px 30px rgba(0,0,0,0.18)",
  },

  title: {
    marginBottom: 12,
    fontSize: "1.8rem",
    fontWeight: 600,
  },

  subtitle: {
    marginBottom: 22,
    color: "#555",
    fontSize: 15,
  },

  input: {
    width: "100%",
    padding: 14,
    fontSize: 15,
    borderRadius: 14,
    border: "1.5px solid #ccc",
    outline: "none",
    marginBottom: 22,
  },

  button: {
    width: "100%",
    padding: 14,
    fontSize: 16,
    borderRadius: 16,
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Name;
