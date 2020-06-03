import pkg from '@hexlet/pairs';

import { getRandomNumber, gameFlow } from '../index.js';

const { cons } = pkg;

const getCorrectAnswer = (num1, num2) => {
  if (num2 > num1) return getCorrectAnswer(num2, num1);
  if (!num2) return num1;
  return getCorrectAnswer(num2, num1 % num2);
};

const description = 'Find the greatest common divisor of given numbers.';

const getPair = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const randomTask = `${firstNum} ${secondNum}`;
  const correctAnswer = getCorrectAnswer(firstNum, secondNum).toString();
  return cons(randomTask, correctAnswer);
};

const brainGcd = () => gameFlow(description, getPair);

export default brainGcd;
