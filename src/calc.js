import readlineSync from 'readline-sync';
import { welcome, name, getRandomNumber } from './index.js';

const getRandomChar = () => {
  const chars = ['+', '-', '*'];
  const randomNum = Math.floor(Math.random() * chars.length);
  return chars[randomNum];
};

const getCorrectAnswer = (a, b, char) => {
  if (char === '+') {
    return (a + b);
  } if (char === '-') {
    return (a - b);
  } return (a * b);
};

const brainCalc = () => {
  console.log(welcome);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomNumber();
    const secondNum = getRandomNumber();
    const randomChar = getRandomChar();
    const randomTask = `${firstNum} ${randomChar} ${secondNum}`;
    const correctAnswer = getCorrectAnswer(firstNum, secondNum, randomChar).toString();
    const userAnswer = readlineSync.question(`Question: ${randomTask}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainCalc;
