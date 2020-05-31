import readlineSync from 'readline-sync';
import { welcome, name } from './welcome.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const brainEven = () => {
  console.log(welcome);
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 1000000);
    const correctAnswer = isEven(randomNum);
    const userAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainEven;
