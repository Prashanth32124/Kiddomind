import { useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import axios from "axios";
import React, { useState } from "react";

function Main() {
  const navigate = useNavigate();
   const [question, setQuestion] = useState("");
   const [status, setStatus] = useState("");
  const bb=async()=>{
   if (question.trim() === "") {
      setStatus("Please write a question before submitting.");
      return;
    }

    try {
      const response = await axios.post(
        "https://backendkiddomind.vercel.app/api/questions/ask",
        { question }
      );

      setStatus(response.data.message);
      setQuestion("");
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };
  return (
    <div style={styles.page}>
      <div style={styles.container}>


        <div style={styles.topBar}>
          <button
            style={styles.startBtn}
            onClick={() => navigate("/Name")}
          >
            Go to Courses
          </button>
        </div>

        <div style={styles.logoWrap}>
          <img
            src={logo}
            alt="KiddoMind Logo"
            style={styles.logo}
          />
        </div>

        <h1 style={styles.title}>Welcome to KiddoMind</h1>

        <p style={styles.text}>
          KiddoMind is an interactive learning platform created especially for
          children to help them understand basic concepts in a simple and
          enjoyable way. The project focuses on early learning skills such as
          counting, number understanding, memory development, and object
          recognition.
        </p>

        <p style={styles.text}>
          Many children find traditional learning methods stressful or boring.
          KiddoMind addresses this challenge by using interactive activities and
          game-based learning techniques that make education engaging and
          meaningful.
        </p>

        <h2 style={styles.subTitle}>Why This Project Is Useful for Children</h2>

        <p style={styles.text}>
          This project helps children improve logical thinking, memory, and
          problem-solving skills. Instant feedback allows children to understand
          their mistakes without fear, encouraging continuous learning.
        </p>

        <p style={styles.text}>
          KiddoMind supports self-paced learning and builds confidence by
          allowing children to learn through exploration rather than pressure.
        </p>

        <h2 style={styles.subTitle}>Why We Provide This Product to Children</h2>

        <p style={styles.text}>
          The purpose of KiddoMind is to support early education through
          technology in a positive and responsible way. The platform provides a
          safe digital environment where children can practice skills and build
          a strong learning foundation.
        </p>

        <p style={styles.text}>
          By offering this product to children, we aim to replace learning
          anxiety with curiosity and motivation.
        </p>

        <h2 style={styles.subTitle}>Person Behind This Project</h2>

        <div style={styles.creatorBox}>
          <p style={styles.creatorText}>
            This project is designed and developed by
          </p>
          <h3 style={styles.creatorName}>Najma</h3>
          <p style={styles.creatorText}>
            with the vision of creating a child-friendly learning platform where
            education feels simple, engaging, and enjoyable.
          </p>
        </div>

        <h2 style={styles.subTitle}>Conclusion</h2>

        <p style={styles.text}>
          KiddoMind is developed to support children in their early learning
          journey. By combining education with interactive experiences, the
          platform helps children learn effectively while enjoying the process.
          The goal of KiddoMind is to build a strong and positive foundation for
          lifelong learning.
        </p>
      </div>
     <div style={styles.questionSection}>
  <h2 style={styles.questionHeading}>
    Have any questions?
  </h2>

  <textarea
    style={styles.textarea}
    placeholder="Type your question here..."
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
    onFocus={(e) =>
      Object.assign(e.target.style, styles.textareaFocus)
    }
    onBlur={(e) =>
      Object.assign(e.target.style, styles.textarea)
    }
  />

  <button style={styles.submitBtn} onClick={bb}>
    Submit Question
  </button>

  {status && <p>{status}</p>}
</div>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px 16px",
    background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: 900,
    backgroundColor: "#ffffff",
    padding: "35px 40px",
    borderRadius: 22,
    boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
    width: "100%",
  },
  topBar: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  startBtn: {
    padding: "10px 20px",
    fontSize: 15,
    borderRadius: 12,
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
  logoWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 15,
  },
  logo: {
    width: 120,
    maxWidth: "60%",
    height: "auto",
  },
  title: {
    textAlign: "center",
    fontSize: "2.4rem",
    marginBottom: 25,
    color: "#2c3e50",
  },
  subTitle: {
    marginTop: 30,
    marginBottom: 12,
    fontSize: "1.4rem",
    color: "#34495e",
    borderLeft: "5px solid #4CAF50",
    paddingLeft: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 1.8,
    color: "#555",
    marginBottom: 14,
  },
  creatorBox: {
    marginTop: 15,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#f4f8fb",
    textAlign: "center",
    boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)",
  },
  creatorName: {
    fontSize: "1.8rem",
    color: "#4CAF50",
    margin: "10px 0",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  creatorText: {
    fontSize: 16,
    color: "#555",
  },
  questionSection: {
  marginTop: 30,
  padding: 25,
  borderRadius: 18,
  background: "#f9fbff",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
},

questionHeading: {
  fontSize: "1.6rem",
  marginBottom: 15,
  color: "#2c3e50",
  textAlign: "center",
},

textarea: {
  width: "100%",
  minHeight: 120,
  padding: 14,
  fontSize: 16,
  borderRadius: 12,
  border: "1.5px solid #ccc",
  outline: "none",
  resize: "none",
  fontFamily: "Arial, sans-serif",
  transition: "border-color 0.3s, box-shadow 0.3s",
},

textareaFocus: {
  borderColor: "#4CAF50",
  boxShadow: "0 0 0 2px rgba(76,175,80,0.2)",
},

submitBtn: {
  marginTop: 15,
  width: "100%",
  padding: "12px 20px",
  fontSize: 16,
  borderRadius: 14,
  border: "none",
  background: "linear-gradient(135deg, #4CAF50, #66BB6A)",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
  letterSpacing: 0.5,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
},
};

export default Main;
