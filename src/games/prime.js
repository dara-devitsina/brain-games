import pkg from '@hexlet/pairs';

import { getRandomNumber, gameFlow } from '../index.js';

const { cons } = pkg;

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPair = () => {
  const randomTask = getRandomNumber();
  const correctAnswer = isPrime(randomTask);
  return cons(randomTask, correctAnswer);
};

const brainPrime = () => gameFlow(description, getPair);

export default brainPrime;
