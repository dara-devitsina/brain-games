import pkg from '@hexlet/pairs';

import getRandomNumber from '../random-number.js';

import gameFlow from '../index.js';

const { cons } = pkg;

const findGcd = (number1, number2) => {
  if (number2 > number1) return findGcd(number2, number1);
  if (!number2) return number1;
  return findGcd(number2, number1 % number2);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const task = `${firstNumber} ${secondNumber}`;
  const correctAnswer = findGcd(firstNumber, secondNumber).toString();
  return cons(task, correctAnswer);
};

const brainGcd = () => gameFlow(description, generateGameData);

export default brainGcd;
