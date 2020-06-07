import readlineSync from 'readline-sync';

import pkg from '@hexlet/pairs';

const { car } = pkg;
const { cdr } = pkg;

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const welcome = `Hello, ${name}!`;

const gameFlow = (taskDescription, pair) => {
  console.log(welcome);
  console.log(taskDescription);
  for (let i = 0; i < 3; i += 1) {
    const currentParams = pair();
    const task = car(currentParams);
    const answer = cdr(currentParams);
    const userAnswer = readlineSync.question(`Question: ${task}\nYour answer: `);
    if (userAnswer !== answer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${name}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gameFlow;
