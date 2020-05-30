import readlineSync from 'readline-sync';

const welcome = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');

const sayHi = `Hello, ${welcome}!`;

export default sayHi;
