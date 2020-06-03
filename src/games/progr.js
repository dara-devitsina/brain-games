import pkg from '@hexlet/pairs';

import { getRandomNumber, gameFlow } from '../index.js';

const { cons } = pkg;

const generateTask = () => {
  const result = [];
  let start = getRandomNumber();
  const step = getRandomNumber();
  for (let i = 0; i < 10; i += 1) {
    start += step;
    result.push(start);
  }
  const hiddenElement = Math.floor(Math.random() * result.length);
  result[hiddenElement] = '..';
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

const getPair = () => {
  const randomTask = generateTask();
  const correctAnswer = getCorrectAnswer(randomTask).toString();
  return cons(randomTask, correctAnswer);
};

const brainProgr = () => gameFlow(description, getPair);

export default brainProgr;
