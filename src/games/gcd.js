import pkg from '@hexlet/pairs';

import getRandomNumber from '../random-number.js';

import gameFlow from '../index.js';

const { cons } = pkg;

const findGcd = (num1, num2) => {
  if (num2 > num1) return findGcd(num2, num1);
  if (!num2) return num1;
  return findGcd(num2, num1 % num2);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const firstNum = getRandomNumber(0, 100);
  const secondNum = getRandomNumber(0, 100);
  const task = `${firstNum} ${secondNum}`;
  const correctAnswer = findGcd(firstNum, secondNum).toString();
  return cons(task, correctAnswer);
};

const brainGcd = () => gameFlow(description, generateGameData);

export default brainGcd;
