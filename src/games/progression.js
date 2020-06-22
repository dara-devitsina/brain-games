import pkg from '@hexlet/pairs';

import getRandomNumber from '../random-number.js';

import gameFlow from '../index.js';

const { cons } = pkg;

const progressionLength = 10;

const generateQuestion = (start, step, missingItem) => {
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
  const missingNumberIndex = getRandomNumber(0, progressionLength - 1);
  const question = generateQuestion(start, step, missingNumberIndex);
  const correctAnswer = (start + step * missingNumberIndex).toString();
  return cons(question, correctAnswer);
};

const brainProgression = () => gameFlow(description, generateGameData);

export default brainProgression;
