import pkg from '@hexlet/pairs';

import getRandomNumber from '../random-number.js';

import gameFlow from '../index.js';

const { cons } = pkg;

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const randomNumber = getRandomNumber(0, signs.length - 1);
  return signs[randomNumber];
};

const getCorrectAnswer = (a, b, sign) => {
  switch (sign) {
    case '+':
      return (a + b);
    case '-':
      return (a - b);
    case '*':
      return (a * b);
    default:
      return null;
  }
};

const description = 'What is the result of the expression?';

const generateGameData = () => {
  const firstNumber = getRandomNumber(0, 500);
  const secondNumber = getRandomNumber(0, 500);
  const randomSign = getRandomSign();
  const task = `${firstNumber} ${randomSign} ${secondNumber}`;
  const correctAnswer = getCorrectAnswer(firstNumber, secondNumber, randomSign).toString();
  return cons(task, correctAnswer);
};

const brainCalc = () => gameFlow(description, generateGameData);

export default brainCalc;
