import React from "react";
import { useNavigate } from "react-router-dom";

function Name() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");

  const u = (e) => {
    setUsername(e.target.value);
  };

  const s = () => {
    if (username.trim() === "") {
      alert("Please enter your name");
      return;
    }
    navigate("/Courses");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          👋 Welcome to <span style={{ color: "#4CAF50" }}>KiddoMind</span>
        </h1>

        <p style={styles.subtitle}>
          Enter your name to start learning and playing 🎉
        </p>

        <input
          type="text"
          value={username}
          onChange={u}
          placeholder="Enter your name"
          style={styles.input}
        />

        <button onClick={s} style={styles.button}>
  Enter Your World {username && `, ${username} 🚀`}
</button>

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
    background:
      "linear-gradient(135deg, #a8edea, #fed6e3)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: 30,
    borderRadius: 20,
    width: 350,
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
    marginBottom: 20,
    color: "#555",
  },
  input: {
    width: "100%",
    padding: 12,
    fontSize: 16,
    borderRadius: 10,
    border: "1px solid #ccc",
    outline: "none",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    padding: 12,
    fontSize: 16,
    borderRadius: 12,
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Name;
