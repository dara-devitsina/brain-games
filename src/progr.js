import readlineSync from 'readline-sync';
import { welcome, name, getRandomNumber } from './index.js';

const generateTask = () => {
  let result = [];
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
  const prevCell = Number.parseInt(arr[emptyCell - 1]);
  const nextCell = Number.parseInt(arr[emptyCell + 1]);
  const afterNextCell = Number.parseInt(arr[emptyCell + 2]);
  const beforePrevCell = Number.parseInt(arr[emptyCell - 2]);

    if (emptyCell === 0) {
       stepLength = afterNextCell - nextCell;
       return nextCell - stepLength;
    }
      else if (emptyCell === arr.length - 1) {
        stepLength = prevCell - beforePrevCell;
        return prevCell + stepLength;
      }
      stepLength = (nextCell - prevCell) / 2;
      return prevCell + stepLength;
};

const brainProgr = () => {
  console.log(welcome);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const randomTask = generateTask();
    const correctAnswer = getCorrectAnswer(randomTask).toString();
    const userAnswer = readlineSync.question(`Question: ${randomTask}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainProgr;