import runEngine from "../index.js";

const description = "What number is missing in the progression?";

const getRandomNum = (min = 1, max = 50) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateArithmeticProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getRoundData = () => {
  const start = getRandomNum(1, 20);
  const step = getRandomNum(2, 10);
  const length = 10; // Фиксированная длина прогрессии
  const progression = generateArithmeticProgression(start, step, length);

  // Скрытый индекс элемента
  const hiddenIndex = getRandomNum(0, length - 1);

  // Сохраняю правильный ответ до того, как скроем его
  const correctAnswer = progression[hiddenIndex];

  // Заменяю элемент на две точки и превращаю массив чисел в строку, разделенную пробелами
  progression[hiddenIndex] = "..";
  const question = progression.join(" ");

  return [question, String(correctAnswer)];
};

const runProgressionGame = () => runEngine(description, getRoundData);

export default runProgressionGame;
