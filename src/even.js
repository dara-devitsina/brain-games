import readlineSync from 'readline-sync';
import { welcome, name, getRandomNumber } from './index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const brainEven = () => {
  console.log(welcome);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomTask = getRandomNumber();
    const correctAnswer = isEven(randomTask);
    const userAnswer = readlineSync.question(`Question: ${randomTask}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainEven;
