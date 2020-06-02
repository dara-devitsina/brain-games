import readlineSync from 'readline-sync';
import { welcome, name, getRandomNumber } from './index.js';

const isPrime = (num) => {
	if (num < 2) {
	  return "no";
	}
	for (let i = 2; i <= Math.sqrt(num); i += 1) {
	  if (num % (i) === 0) {
		return "no";
	  } 
	}
	return "yes";
  };

const brainPrime = () => {
  console.log(welcome);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomTask = getRandomNumber();
    const correctAnswer = isPrime(randomTask);
    const userAnswer = readlineSync.question(`Question: ${randomTask}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainPrime;