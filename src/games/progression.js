import pkg from '@hexlet/pairs';

import getRandomNumber from '../random-number.js';

import gameFlow from '../index.js';

const { cons } = pkg;

const progressionLength = 10;

const generateProgression = (start, step, missingItem) => {
  const result = [];
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
  const missingNumber = getRandomNumber(0, progressionLength);
  const task = generateProgression(start, step, missingNumber);
  const correctAnswer = (start + step * missingNumber).toString();
  return cons(task, correctAnswer);
};

const brainProgression = () => gameFlow(description, generateGameData);

export default brainProgression;
