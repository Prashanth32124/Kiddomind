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
    lang: "Language",
  },
  id: {
    welcome: "Selamat Datang di",
    subtitle: "Masukkan namamu untuk mulai belajar dan bermain 🎉",
    placeholder: "Masukkan nama kamu",
    alert: "Silakan masukkan nama kamu",
    button: "Masuk ke Duniamu",
    lang: "Bahasa",
  },
};

function Name() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [lang, setLang] = useState("id"); // ✅ Default Indonesian

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

      {/* ===== Card ===== */}
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

/* ========== STYLES ========== */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #a8edea, #fed6e3)",
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

  card: {
    background: "#fff",
    padding: 35,
    borderRadius: 25,
    width: 360,
    textAlign: "center",
    boxShadow: "0 15px 30px rgba(0,0,0,0.18)",
  },

  title: {
    marginBottom: 12,
    fontSize: "1.9rem",
  },

  subtitle: {
    marginBottom: 22,
    color: "#555",
    fontSize: 16,
  },

  input: {
    width: "100%",
    padding: 14,
    fontSize: 16,
    borderRadius: 14,
    border: "1.5px solid #ccc",
    outline: "none",
    marginBottom: 22,
  },

  button: {
    width: "100%",
    padding: 14,
    fontSize: 17,
    borderRadius: 16,
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Name;
