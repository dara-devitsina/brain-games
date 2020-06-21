import pkg from '@hexlet/pairs';

import getRandomNumber from '../random-number.js';

import gameFlow from '../index.js';

const { cons } = pkg;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const task = getRandomNumber(0, 100);
  const correctAnswer = isPrime(task) ? 'yes' : 'no';
  return cons(task, correctAnswer);
};

const brainPrime = () => gameFlow(description, generateGameData);

export default brainPrime;
