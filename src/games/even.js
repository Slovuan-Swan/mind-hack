import runEngine from "../index.js";

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNum = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (num) => num % 2 === 0;

const getRoundData = () => {
  const question = getRandomNum();
  const correctAnswer = isEven(question) ? "yes" : "no";
  return [String(question), correctAnswer];
};

const runEvenGame = () => runEngine(description, getRoundData);

export default runEvenGame;
