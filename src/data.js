/* ================= OBJECT NAMES (BILINGUAL) ================= */
const OBJECT_NAMES = {
  "🍎": { en: "apples", id: "apel" },
  "🍊": { en: "oranges", id: "jeruk" },
  "🍍": { en: "pineapples", id: "nanas" },
  "🐦": { en: "birds", id: "burung" },
  "🪑": { en: "chairs", id: "kursi" },
};

const OBJECTS = Object.keys(OBJECT_NAMES);


function generateQuestions(total = 100, lang = "id") {
  const questions = [];

  for (let i = 0; i < total; i++) {
    const itemCount = Math.floor(Math.random() * 6) + 5; // 5–10 items
    const objects = [];

    for (let j = 0; j < itemCount; j++) {
      const randomObject =
        OBJECTS[Math.floor(Math.random() * OBJECTS.length)];
      objects.push(randomObject);
    }

    const ask = objects[Math.floor(Math.random() * objects.length)];

    const questionText =
      lang === "id"
        ? `Ada berapa ${OBJECT_NAMES[ask].id}?`
        : `How many ${OBJECT_NAMES[ask].en}?`;

    questions.push({
      id: i + 1,
      objects,        // array of emojis
      ask,            // emoji being asked
      answer: objects.filter((o) => o === ask).length, // correct count
      questionText,   // localized question text
    });
  }

  return questions;
}

/* ================= EXPORT (IF NEEDED) ================= */
// export default generateQuestions;

/* ================= EXAMPLE USAGE ================= */
// Indonesian (default)
const indoQuestions = generateQuestions(10);

// English
const englishQuestions = generateQuestions(10, "en");

// console.log(indoQuestions, englishQuestions);
