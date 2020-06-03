import pkg from '@hexlet/pairs';

import { getRandomNumber, gameFlow } from '../index.js';
const { cons } = pkg;

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getPair = () => {
  const randomTask = getRandomNumber();
  const correctAnswer = isEven(randomTask);
  return cons(randomTask, correctAnswer);
};

const brainEven = () => gameFlow(description, getPair);

export default brainEven;
