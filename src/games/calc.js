import runEngine from "../index.js";
import getRandomNum from "../utils.js";

const description = "What is the result of the expression?";
const operators = ["+", "-", "*"];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const getRoundData = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);
  return [question, String(correctAnswer)]; // перевожу ответ в String
};

const runCalcGame = () => runEngine(description, getRoundData);

export default runCalcGame;
