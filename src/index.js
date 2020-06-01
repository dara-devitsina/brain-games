import readlineSync from 'readline-sync';

/* import pkg from '@hexlet/pairs';
const { isPair } = pkg;
const { car } = pkg;
const { cdr } = pkg; */

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const welcome = `Hello, ${name}!`;

export const getRandomNumber = () => Math.floor(Math.random() * 10);
