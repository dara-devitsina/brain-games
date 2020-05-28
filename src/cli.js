import readlineSync from 'readline-sync';

const welcome = readlineSync.question("Welcome to the Brain Games! \nMay I have your name? ");

export const sayHi = 'Hello, ' + welcome+ '!';


