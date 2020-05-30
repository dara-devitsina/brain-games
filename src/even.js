import readlineSync from 'readline-sync';

export const brainEven = () => {


let numOfQuestions = 0;

while (numOfQuestions <= 3) {
    const randomNum = Math.floor(Math.random() * 1000000);
    const query = `Question: ${randomNum}`;
    console.log(query);
      let usersAnswer = readlineSync.question();

    if (randomNum % 2 === 0) {
  
        if (usersAnswer === 'yes') {
            return 'Correct!';
            numOfQuestions += 1;
        }
            else {
                return `"no" is wrong answer ;(. Correct answer was "yes". Let's try again, !`
            }
     }

    else if (randomNum % 2 !== 0) {
        if (usersAnswer === 'no') {
            return 'Correct!';
            NumOfQuestions += 1;
        }
            else {
                return `"yes" is wrong answer ;(. Correct answer was "no". Let's try again, !`
            }
    }

}

       
if (numOfQuestions === 3) {
    return `Congratulations, !`
}
};

