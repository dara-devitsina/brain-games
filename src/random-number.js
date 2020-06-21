const getRandomNumber = (min, max = 9) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomNumber;
