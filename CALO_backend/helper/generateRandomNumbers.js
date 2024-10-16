

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 async function generateRandomNumber() {

    console.log("in random")
   const min = 1
   const max=100
   const count=5
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
      randomNumbers.push(generateRandom(min, max));
    }
    const Number = randomNumbers.join('');
    return Number;

}

 
module.exports = generateRandomNumber