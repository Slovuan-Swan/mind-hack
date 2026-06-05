import runEngine from "../index.js";
import getRandomNum from "../utils.js";

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const question = getRandomNum();
  const correctAnswer = isPrime(question) ? "yes" : "no";

  return [String(question), correctAnswer];
};

const runPrimeGame = () => runEngine(description, getRoundData);

export default runPrimeGame;
