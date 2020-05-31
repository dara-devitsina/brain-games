import readlineSync from 'readline-sync';
import { welcome, name } from './welcome.js';

const brainEven = () => {
    console.log(welcome);

    let numOfQuestions = 0;
    while (numOfQuestions < 3) {
        const randomNum = Math.floor(Math.random() * 1000000);
        const query = `Question: ${randomNum}`;
        console.log(query);
        let userAnswer = readlineSync.prompt();

        if (randomNum % 2 === 0) {
            if (userAnswer === 'yes') {
                console.log('Correct!');
                numOfQuestions += 1;
            }
            else {
                console.log(`${userAnswer} is wrong answer ;(. Correct answer was "yes". Let's try again, ${name}!`);
                break;
            }
        }

        else {
            if (userAnswer === 'no') {
                console.log('Correct!');
                numOfQuestions += 1;
            }

            else {
                console.log(`${userAnswer} is wrong answer ;(. Correct answer was "no". Let's try again, ${name}!`);
                break;
            }
        }
    }
    if (numOfQuestions === 3) {
        return `Congratulations, ${name}!`;
    }
};

export default brainEven;