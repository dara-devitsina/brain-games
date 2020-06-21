import pkg from '@hexlet/pairs';

import getRandomNumber from '../random-number.js';

import gameFlow from '../index.js';

const { cons } = pkg;

const generateQuestion = (start, step, missingItem) => {
  const result = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    const currentNumber = start + step * i;
    result.push(currentNumber);
  }
  result[missingItem] = '..';
  return result.join(' ');
};

const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(0, 30);
  const missingNumberIndex = getRandomNumber(0);
  const task = generateQuestion(start, step, missingNumberIndex);
  const correctAnswer = (start + step * missingNumberIndex).toString();
  return cons(task, correctAnswer);
};

const brainProgression = () => gameFlow(description, generateGameData);

export default brainProgression;
