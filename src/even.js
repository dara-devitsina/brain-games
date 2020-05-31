import readlineSync from 'readline-sync';
//import { userName } from '../src/usersName.js';

const brainEven = () => {
    console.log('May I have your name?');
    const userName = readlineSync.prompt();
    console.log(`Hello, ${userName}! Answer "yes" if the number is even, otherwise answer "no".`);

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
                console.log(`${userAnswer} is wrong answer ;(. Correct answer was "yes". Let's try again, ${userName}!`);
                break;
            }
        }

        else {
            if (userAnswer === 'no') {
                console.log('Correct!');
                numOfQuestions += 1;
            }

            else {
                console.log(`${userAnswer} is wrong answer ;(. Correct answer was "no". Let's try again, ${userName}!`);
                break;
            }
        }
    }
if (numOfQuestions === 3) {
    return `Congratulations, ${userName}!`;
}
};

export default brainEven;