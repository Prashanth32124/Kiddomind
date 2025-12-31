import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./images/logo.png";
import creator from "./images/creator.jpg";

/* ================= TRANSLATIONS ================= */
const translations = {
  en: {
    title: "Welcome to KiddoMind",
    subtitle: "Learn • Play • Grow",
    p1: "KiddoMind is an interactive learning platform created especially for children to help them understand basic concepts in a simple and enjoyable way. The project focuses on early learning skills such as counting, number understanding, memory development, and object recognition.",
    p2: "Many children find traditional learning methods stressful or boring. KiddoMind addresses this challenge by using interactive activities and game-based learning techniques that make education engaging and meaningful.",
    whyUsefulTitle: "Why This Project Is Useful for Children",
    p3: "This project helps children improve logical thinking, memory, and problem-solving skills. Instant feedback allows children to understand their mistakes without fear, encouraging continuous learning.",
    p4: "KiddoMind supports self-paced learning and builds confidence by allowing children to learn through exploration rather than pressure.",
    whyProvideTitle: "Why We Provide This Product to Children",
    p5: "The purpose of KiddoMind is to support early education through technology in a positive and responsible way. The platform provides a safe digital environment where children can practice skills and build a strong learning foundation.",
    p6: "By offering this product to children, we aim to replace learning anxiety with curiosity and motivation.",
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
  },

  id: {
    title: "Selamat Datang di KiddoMind",
    subtitle: "Belajar • Bermain • Tumbuh",
    p1: "KiddoMind adalah platform pembelajaran interaktif yang dibuat khusus untuk anak-anak agar mereka dapat memahami konsep dasar dengan cara yang sederhana dan menyenangkan. Proyek ini berfokus pada keterampilan belajar awal seperti berhitung, pemahaman angka, pengembangan memori, dan pengenalan objek.",
    p2: "Banyak anak merasa metode pembelajaran tradisional membosankan atau membuat stres. KiddoMind mengatasi tantangan ini dengan menggunakan aktivitas interaktif dan pembelajaran berbasis permainan agar belajar menjadi lebih menarik dan bermakna.",
    whyUsefulTitle: "Mengapa Proyek Ini Bermanfaat untuk Anak-anak",
    p3: "Proyek ini membantu anak meningkatkan kemampuan berpikir logis, daya ingat, dan pemecahan masalah. Umpan balik instan membantu anak memahami kesalahan mereka tanpa rasa takut.",
    p4: "KiddoMind mendukung pembelajaran mandiri dan membangun kepercayaan diri dengan memungkinkan anak belajar melalui eksplorasi tanpa tekanan.",
    whyProvideTitle: "Mengapa Kami Menyediakan Produk Ini untuk Anak-anak",
    p5: "Tujuan KiddoMind adalah mendukung pendidikan awal melalui teknologi dengan cara yang positif dan bertanggung jawab. Platform ini menyediakan lingkungan digital yang aman bagi anak-anak.",
    p6: "Dengan menyediakan produk ini, kami bertujuan menggantikan kecemasan belajar dengan rasa ingin tahu dan motivasi.",
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
  },
};

function Main() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("id");
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState("");

  const t = translations[lang];

  const submitQuestion = async () => {
    if (!question.trim()) {
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
      <div style={styles.container}>
        {/* HEADER */}
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

        <h1 style={styles.title}>{t.title}</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>

        <button style={styles.courseBtn} onClick={() => navigate("/Name")}>
          {t.courses}
        </button>

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
          <img src={creator} alt="Creator" style={styles.creatorImage} />
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

/* ================= STYLES ================= */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    display: "flex",
    justifyContent: "center",
    padding: 16,
    fontFamily: "'Poppins', 'Nunito', Arial, sans-serif",
  },

  container: {
    maxWidth: 900,
    width: "100%",
    background: "#fff",
    padding: 30,
    borderRadius: 24,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    width: 80,
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
  },

  title: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#ff6f61",
    fontWeight: 600,
  },

  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: 16,
  },

  courseBtn: {
    display: "block",
    margin: "0 auto 20px",
    background: "#6c5ce7",
    color: "#fff",
    border: "none",
    borderRadius: 16,
    padding: "10px 20px",
    cursor: "pointer",
  },

  subTitle: {
    fontSize: "1.4rem",
    color: "#6c5ce7",
    marginTop: 30,
  },

  text: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "#444",
  },

  creatorBox: {
    background: "#f1f9ff",
    padding: 18,
    borderRadius: 18,
    textAlign: "center",
  },

  creatorImage: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 12,
    border: "4px solid #00b894",
  },

  creatorName: {
    color: "#00b894",
    fontSize: "1.5rem",
  },

  questionBox: {
    marginTop: 40,
    background: "#ffeaa7",
    padding: 22,
    borderRadius: 22,
  },

  questionTitle: {
    textAlign: "center",
    fontSize: "1.4rem",
    color: "#d35400",
  },

  textarea: {
    width: "100%",
    minHeight: 110,
    borderRadius: 18,
    padding: 14,
    fontSize: 15,
    border: "2px solid #f39c12",
    resize: "none",
  },

  submitBtn: {
    marginTop: 12,
    width: "100%",
    padding: 12,
    borderRadius: 18,
    border: "none",
    background: "#ff7675",
    color: "#fff",
    fontSize: 16,
    cursor: "pointer",
  },

  status: {
    textAlign: "center",
    marginTop: 8,
  },
};

export default Main;
