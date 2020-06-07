import pkg from '@hexlet/pairs';

import getRandomNumber from '../random-number.js';

import gameFlow from '../index.js';

const { cons } = pkg;

const progrLength = 10;

const missingItem = getRandomNumber(0, progrLength);

const generateTask = (start, step, missingElement) => {
  const result = [];
  for (let i = 0; i < progrLength; i += 1) {
    start += step;
    result.push(start);
  }
  result[missingElement] = '..';
  return result.join(' ');
};

const getCorrectAnswer = (progression) => {
  const arr = progression.split(' ');
  const emptyCell = arr.indexOf('..');
  let stepLength = 0;
  const prevCell = Number.parseInt(arr[emptyCell - 1], 10);
  const nextCell = Number.parseInt(arr[emptyCell + 1], 10);
  const afterNextCell = Number.parseInt(arr[emptyCell + 2], 10);
  const beforePrevCell = Number.parseInt(arr[emptyCell - 2], 10);

  if (emptyCell === 0) {
    stepLength = afterNextCell - nextCell;
    return nextCell - stepLength;
  }
  if (emptyCell === arr.length - 1) {
    stepLength = prevCell - beforePrevCell;
    return prevCell + stepLength;
  }
  stepLength = (nextCell - prevCell) / 2;
  return prevCell + stepLength;
};

const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const start = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 5);
  const task = generateTask(start, step, missingItem);
  const correctAnswer = getCorrectAnswer(task).toString();
  return cons(task, correctAnswer);
};

const brainProgr = () => gameFlow(description, generateGameData);

export default brainProgr;
