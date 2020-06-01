import readlineSync from 'readline-sync';
import { welcome, name, getRandomNumber } from './index.js';

const getRandomChar = () => {
  const chars = ['+', '-', '*'];
  const randomNum = Math.floor(Math.random() * chars.length);
  return chars[randomNum];
};

const getCorrectAnswer = (a, b, char) => {
  if (char === '+') {
    return (a + b).toString();
  } if (char === '-') {
    return (a - b).toString();
  } return (a * b).toString();
};

const brainCalc = () => {
  console.log(welcome);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomNumber();
    const secondNum = getRandomNumber();
    const randomChar = getRandomChar();
    const randomExpr = `${firstNum} ${randomChar} ${secondNum}`;
    const correctAnswer = getCorrectAnswer(firstNum, secondNum, randomChar);
    const userAnswer = readlineSync.question(`Question: ${randomExpr}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainCalc;
