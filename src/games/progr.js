import pkg from '@hexlet/pairs';

import getRandomNumber from '../random-number.js';

import gameFlow from '../index.js';

const { cons } = pkg;

const progrLength = 10;

const generateProgr = (start, step) => {
  const result = [];
  for (let i = 0; i < progrLength; i += 1) {
    const currentNum = start + step * i;
    result.push(currentNum);
  }
  return result;
};

const getProgrWithHiddenNum = (progression, missingItem) => {
  const newProgr = [...progression];
  newProgr[missingItem] = '..';
  return newProgr.join(' ');
};

const getCorrectAnswer = (progrStr, progrArr) => {
  const newProgr = progrStr.split(' ');
  const index = newProgr.indexOf('..');
  return progrArr[index];
};

const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(0, 30);
  const missingNum = getRandomNumber(0, progrLength);
  const progr = generateProgr(start, step);
  const task = getProgrWithHiddenNum(progr, missingNum);
  const correctAnswer = getCorrectAnswer(task, progr).toString();
  return cons(task, correctAnswer);
};

const brainProgr = () => gameFlow(description, generateGameData);

export default brainProgr;
