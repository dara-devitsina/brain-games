import readlineSync from 'readline-sync';
import { welcome, name } from './welcome.js';

const getRandomChar = () => {
	const chars = ['+', '-', '*'];
	const randomNum = Math.floor(Math.random() * chars.length);
	return chars[randomNum];
};

const getCorrectAnswer = (a, b, char) => {
	if (char === '+') {
		return a + b;
	} else if (char === '-') {
		return a - b;
	} return a * b;
};

const brainCalc = (num) => {
console.log(welcome);
	
	for (let i = 0; i < 3; i += 1) {
		const randomNumOne = Math.floor(Math.random() * 10);
		const randomNumTwo = Math.floor(Math.random() * 10);
		const randomChar = getRandomChar();
		const randomExpr = `${randomNumOne} ${randomChar} ${randomNumTwo}`;
		const correctAnswer = getCorrectAnswer(randomNumOne, randomNumTwo, randomChar);
		const userAnswer = readlineSync.question(`Question: ${randomExpr}\nYour answer: `);

		if (userAnswer != correctAnswer) {
			return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
		} console.log('Correct!');
	}
	return console.log(`Congratulations, ${name}!`);
};

export default brainCalc;