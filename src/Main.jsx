import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./images/logo.png";


const translations = {
  en: {
    title: "Welcome to KiddoMind",

    p1: `KiddoMind is an interactive learning platform created especially for children to help them understand basic concepts in a simple and enjoyable way. The project focuses on early learning skills such as counting, number understanding, memory development, and object recognition.`,

    p2: `Many children find traditional learning methods stressful or boring. KiddoMind addresses this challenge by using interactive activities and game-based learning techniques that make education engaging and meaningful.`,

    whyUsefulTitle: "Why This Project Is Useful for Children",

    p3: `This project helps children improve logical thinking, memory, and problem-solving skills. Instant feedback allows children to understand their mistakes without fear, encouraging continuous learning.`,

    p4: `KiddoMind supports self-paced learning and builds confidence by allowing children to learn through exploration rather than pressure.`,

    whyProvideTitle: "Why We Provide This Product to Children",

    p5: `The purpose of KiddoMind is to support early education through technology in a positive and responsible way. The platform provides a safe digital environment where children can practice skills and build a strong learning foundation.`,

    p6: `By offering this product to children, we aim to replace learning anxiety with curiosity and motivation.`,

    creatorTitle: "Person Behind This Project",
    creatorName: "Najma",
    creatorText:
      "With the vision of creating a child-friendly learning platform where education feels simple, engaging, and enjoyable.",

    conclusionTitle: "Conclusion",
    conclusion:
      "KiddoMind is developed to support children in their early learning journey and build a strong foundation for lifelong learning.",

    questionTitle: "Have any questions?",
    placeholder: "Type your question here...",
    submit: "Send",
    courses: "Go to Courses",
    lang: "Language",
  },

  id: {
    title: "Selamat Datang di KiddoMind",

    p1: `KiddoMind adalah platform pembelajaran interaktif yang dibuat khusus untuk anak-anak agar mereka dapat memahami konsep dasar dengan cara yang sederhana dan menyenangkan. Proyek ini berfokus pada keterampilan belajar awal seperti berhitung, pemahaman angka, pengembangan memori, dan pengenalan objek.`,

    p2: `Banyak anak merasa metode pembelajaran tradisional membosankan atau membuat stres. KiddoMind mengatasi tantangan ini dengan menggunakan aktivitas interaktif dan pembelajaran berbasis permainan agar belajar menjadi lebih menarik dan bermakna.`,

    whyUsefulTitle: "Mengapa Proyek Ini Bermanfaat untuk Anak-anak",

    p3: `Proyek ini membantu anak meningkatkan kemampuan berpikir logis, daya ingat, dan pemecahan masalah. Umpan balik instan membantu anak memahami kesalahan mereka tanpa rasa takut.`,

    p4: `KiddoMind mendukung pembelajaran mandiri dan membangun kepercayaan diri dengan memungkinkan anak belajar melalui eksplorasi tanpa tekanan.`,

    whyProvideTitle: "Mengapa Kami Menyediakan Produk Ini untuk Anak-anak",

    p5: `Tujuan KiddoMind adalah mendukung pendidikan awal melalui teknologi dengan cara yang positif dan bertanggung jawab. Platform ini menyediakan lingkungan digital yang aman bagi anak-anak.`,

    p6: `Dengan menyediakan produk ini, kami bertujuan menggantikan kecemasan belajar dengan rasa ingin tahu dan motivasi.`,

    creatorTitle: "Pembuat Proyek",
    creatorName: "Najma",
    creatorText:
      "Dengan visi menciptakan platform belajar ramah anak yang sederhana, menarik, dan menyenangkan.",

    conclusionTitle: "Kesimpulan",
    conclusion:
      "KiddoMind dikembangkan untuk mendukung perjalanan belajar awal anak dan membangun fondasi kuat untuk pembelajaran seumur hidup.",

    questionTitle: "Punya pertanyaan?",
    placeholder: "Tulis pertanyaan kamu di sini...",
    submit: "Kirim",
    courses: "Ke Kursus",
    lang: "Bahasa",
  },
};

function Main() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState("");
  const [lang, setLang] = useState("id");

  const t = translations[lang];

  const submitQuestion = async () => {
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
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={styles.page}>
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h4 style={styles.sideTitle}>🌍 {t.lang}</h4>
        <button
          style={lang === "en" ? styles.langActive : styles.langBtn}
          onClick={() => setLang("en")}
        >
          EN
        </button>
        <button
          style={lang === "id" ? styles.langActive : styles.langBtn}
          onClick={() => setLang("id")}
        >
          ID
        </button>
      </div>

      {/* CONTENT */}
      <div style={styles.container}>
        <div style={styles.topBar}>
          <button
            style={styles.courseBtn}
            onClick={() => navigate("/Name")}
          >
            {t.courses}
          </button>
        </div>

        <div style={styles.logoWrap}>
          <img src={logo} alt="KiddoMind Logo" style={styles.logo} />
        </div>

        <h1 style={styles.title}>{t.title}</h1>

        <p style={styles.text}>{t.p1}</p>
        <p style={styles.text}>{t.p2}</p>

        <h2 style={styles.subTitle}>{t.whyUsefulTitle}</h2>
        <p style={styles.text}>{t.p3}</p>
        <p style={styles.text}>{t.p4}</p>

        <h2 style={styles.subTitle}>{t.whyProvideTitle}</h2>
        <p style={styles.text}>{t.p5}</p>
        <p style={styles.text}>{t.p6}</p>

        <h2 style={styles.subTitle}>{t.creatorTitle}</h2>
        <div style={styles.creatorBox}>
          <h3 style={styles.creatorName}>{t.creatorName}</h3>
          <p style={styles.text}>{t.creatorText}</p>
        </div>

        <h2 style={styles.subTitle}>{t.conclusionTitle}</h2>
        <p style={styles.text}>{t.conclusion}</p>

        {/* QUESTIONS */}
        <div style={styles.questionBox}>
          <h2 style={styles.questionTitle}>{t.questionTitle}</h2>
          <textarea
            style={styles.textarea}
            placeholder={t.placeholder}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button style={styles.submitBtn} onClick={submitQuestion}>
            {t.submit}
          </button>
          {status && <p style={styles.status}>{status}</p>}
        </div>
      </div>
    </div>
  );
}

/* ================== STYLES ================== */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    display: "flex",
    fontFamily: "'Comic Sans MS', 'Poppins', cursive",
    paddingLeft: 90,
  },
  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    width: 80,
    height: "100vh",
    background: "#ff9f43",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
  },
  sideTitle: { color: "#fff", fontSize: 14, marginBottom: 12 },
  langBtn: {
    background: "#fff",
    border: "none",
    borderRadius: 14,
    padding: "6px 10px",
    marginBottom: 10,
    cursor: "pointer",
  },
  langActive: {
    background: "#2ecc71",
    color: "#fff",
    borderRadius: 14,
    padding: "6px 10px",
    marginBottom: 10,
    fontWeight: "bold",
  },
  container: {
    maxWidth: 900,
    background: "#fff",
    padding: 40,
    borderRadius: 30,
    margin: "30px auto",
  },
  topBar: { display: "flex", justifyContent: "flex-end" },
  courseBtn: {
    background: "#6c5ce7",
    color: "#fff",
    border: "none",
    borderRadius: 18,
    padding: "10px 20px",
    cursor: "pointer",
  },
  logoWrap: { display: "flex", justifyContent: "center", margin: 20 },
  logo: { width: 120 },
  title: { textAlign: "center", fontSize: "2.6rem", color: "#ff6f61" },
  subTitle: { fontSize: "1.6rem", color: "#6c5ce7", marginTop: 30 },
  text: { fontSize: 17, lineHeight: 1.8, color: "#444" },
  creatorBox: {
    background: "#f1f9ff",
    padding: 20,
    borderRadius: 20,
    textAlign: "center",
  },
  creatorName: { color: "#00b894", fontSize: "1.8rem" },
  questionBox: {
    marginTop: 40,
    background: "#ffeaa7",
    padding: 25,
    borderRadius: 25,
  },
  questionTitle: {
    textAlign: "center",
    fontSize: "1.6rem",
    color: "#d35400",
  },
  textarea: {
    width: "100%",
    minHeight: 120,
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    border: "2px solid #f39c12",
    resize: "none",
  },
  submitBtn: {
    marginTop: 15,
    width: "100%",
    padding: 14,
    borderRadius: 20,
    border: "none",
    background: "#ff7675",
    color: "#fff",
    fontSize: 18,
    cursor: "pointer",
  },
  status: { textAlign: "center", marginTop: 10 },
};

export default Main;
