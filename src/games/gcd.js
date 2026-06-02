import runEngine from "../index.js";

const description = "Find the greatest common divisor of given numbers.";

const getRandomNum = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
// алгоритм Евклида
const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getRoundData = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();

  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);

  return [question, String(correctAnswer)];
};

const runGcdGame = () => runEngine(description, getRoundData);

export default runGcdGame;
