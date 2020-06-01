import readlineSync from 'readline-sync';
import { welcome, name, getRandomNumber } from './index.js';

const getCorrectAnswer = (num1, num2) => {
	if (num2 > num1) return getCorrectAnswer(num2, num1);
	if (!num2) return num1;
	return getCorrectAnswer(num2, num1 % num2);
};

const brainGcd = () => {
  console.log(welcome);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
  const firstNum = getRandomNumber();
	const secondNum = getRandomNumber();
	const randomTask = `${firstNum} ${secondNum}`;
  const correctAnswer = getCorrectAnswer(firstNum, secondNum).toString();
  const userAnswer = readlineSync.question(`Question: ${randomTask}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainGcd;
