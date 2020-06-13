import pkg from '@hexlet/pairs';

import getRandomNumber from '../random-number.js';

import gameFlow from '../index.js';

const { cons } = pkg;

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const task = getRandomNumber(0, 1000000);
  const getCorrectAnswer = () => (isEven(task) ? 'yes' : 'no');
  return cons(task, getCorrectAnswer());
};

const brainEven = () => gameFlow(description, generateGameData);

export default brainEven;
