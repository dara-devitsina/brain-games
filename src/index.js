import readlineSync from 'readline-sync';
import { name } from './welcome.js';

export const gameBody = (task, correctSolution) => {
	const userAnswer = readlineSync.question(`Question: ${task}\nYour answer: `);
			if (userAnswer != correctSolution) {
				return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctSolution}. Let's try again, ${name}!`);
			} console.log('Correct!');
	};
		//return console.log(`Congratulations, ${name}!`);
