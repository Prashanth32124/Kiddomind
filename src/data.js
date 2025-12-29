const OBJECT_NAMES = {
  "🍎": "apples",
  "🍊": "oranges",
  "🍍": "pineapples",
  "🐦": "birds",
  "🪑": "chairs",
};

const OBJECTS = Object.keys(OBJECT_NAMES);

function generateQuestions(total = 100) {
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

    questions.push({
      id: i + 1,
      objects,
      ask,
      questionText: `How many ${OBJECT_NAMES[ask]}?`,
    });
  }

  return questions;
}
