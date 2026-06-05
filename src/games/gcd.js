import runEngine from "../index.js";
import getRandomNum from "../utils.js";

const description = "Find the greatest common divisor of given numbers.";

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
