import React from "react";
import img1 from "./images/CountnChoose.png";
import img2 from "./images/flashcard.png";
import img3 from "./images/numberquiz.png";
import logo from "./images/logo.png";
import { useNavigate } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>

      {/* ROUND LOGO */}
      <div style={styles.logoWrap}>
        <img src={logo} alt="KiddoMind Logo" style={styles.logo} />
      </div>

      <h1 style={styles.title}>
        Welcome to <span style={{ color: "#ff6f61" }}>KIDDOMIND</span>
      </h1>
      <p style={styles.subtitle}>
        Learn • Play • Grow
      </p>

      <div style={styles.container}>
        <div style={styles.card}>
          <img src={img1} alt="Count and Choose" style={styles.image} />
          <h2>Count & Choose</h2>
          <p style={styles.text}>
            Learn counting with fun objects like apples, birds, and chairs.
          </p>
          <button
            onClick={() => navigate("/CountnChoose")}
            style={styles.button}
          >
            Start Course
          </button>
        </div>

        <div style={styles.card}>
          <img src={img2} alt="Animal Flash Cards" style={styles.image} />
          <h2>Animal Flash Cards</h2>
          <p style={styles.text}>
            Watch animal images, remember them, and type the correct animal name.
          </p>
          <button
            onClick={() => navigate("/FlashCard")}
            style={styles.button}
          >
            Start Course
          </button>
        </div>

        <div style={styles.card}>
          <img src={img3} alt="Number Quiz" style={styles.image} />
          <h2>Number Quiz</h2>
          <p style={styles.text}>
            Choose difficulty and solve fun math questions with instant feedback.
          </p>
          <button
            onClick={() => navigate("/NumberQuiz")}
            style={styles.button}
          >
            Start Course
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "30px 16px",
    textAlign: "center",
    background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    fontFamily: "'Comic Sans MS', 'Arial', sans-serif",
  },

  /* LOGO STYLES */
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
