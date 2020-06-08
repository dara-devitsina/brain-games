import pkg from '@hexlet/pairs';

import getRandomNumber from '../random-number.js';

import gameFlow from '../index.js';

const { cons } = pkg;

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const randomNum = Math.floor(Math.random() * signs.length);
  return signs[randomNum];
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
  const firstNum = getRandomNumber(0, 500);
  const secondNum = getRandomNumber(0, 500);
  const randomSign = getRandomSign();
  const task = `${firstNum} ${randomSign} ${secondNum}`;
  const correctAnswer = getCorrectAnswer(firstNum, secondNum, randomSign).toString();
  return cons(task, correctAnswer);
};

const brainCalc = () => gameFlow(description, generateGameData);

export default brainCalc;
