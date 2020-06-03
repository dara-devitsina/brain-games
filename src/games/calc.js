import pkg from '@hexlet/pairs';

import { getRandomNumber, gameFlow } from '../index.js';

const { cons } = pkg;

const getRandomChar = () => {
  const chars = ['+', '-', '*'];
  const randomNum = Math.floor(Math.random() * chars.length);
  return chars[randomNum];
};

const getCorrectAnswer = (a, b, char) => {
  if (char === '+') {
    return (a + b);
  } if (char === '-') {
    return (a - b);
  } return (a * b);
};

const description = 'What is the result of the expression?';

const getPair = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const randomChar = getRandomChar();
  const randomTask = `${firstNum} ${randomChar} ${secondNum}`;
  const correctAnswer = getCorrectAnswer(firstNum, secondNum, randomChar).toString();
  return cons(randomTask, correctAnswer);
};

const brainCalc = () => gameFlow(description, getPair);

export default brainCalc;
