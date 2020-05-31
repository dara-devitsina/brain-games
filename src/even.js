import readlineSync from 'readline-sync';

const brainEven = () => {

let numOfQuestions = 0;

    while (numOfQuestions < 3) {
        const randomNum = Math.floor(Math.random() * 1000000);
        const query = `Question: ${randomNum}`;
        console.log(query);
        let usersAnswer = readlineSync.question();

        if (randomNum % 2 === 0) {

            if (usersAnswer === 'yes') {
                console.log('Correct!');
                numOfQuestions += 1;
            }
            else {
                console.log(`"no" is wrong answer ;(. Correct answer was "yes". Let's try again, !`)
                break;
            }
        }

        else {
            if (usersAnswer === 'no') {
                console.log('Correct!');
                numOfQuestions += 1;
            }

            else {
                console.log(`"yes" is wrong answer ;(. Correct answer was "no". Let's try again, !`)
                break;
            }
        }
    }
if (numOfQuestions === 3) {
    return 'Congratulations, !';
}
};

export default brainEven;