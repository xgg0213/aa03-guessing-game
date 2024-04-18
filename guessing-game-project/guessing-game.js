// import readline & create rl for the interface
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

// define randomInRange function for secretNumber
const randomInRange = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The 
}


const checkGuess = (num, secretNumber) => {
    if (num < secretNumber) {
        console.log('Too low');
        return false;
    }
    else if (num > secretNumber) {
        console.log('Too high');
        return false;
    }
    else if (num === secretNumber) {
        // console.log('Correct');
        return true;
    }
}

// test cases for checkGuess
// console.log(checkGuess(57));
// console.log(checkGuess(7));
// console.log(checkGuess(10));




// create askGuess function
function askGuess(secretNumber, numAttempts) {
    // console.log(numAttempts);
    if (numAttempts === 0) {
        console.log('You lose');
        rl.close();
        // return; // if did not add else statement in line 48, then need to add 'return' to force
                   // askGuess() to exit
    }
    
    else {
        rl.question('Guess a number? ', (num) => {
        let numGuess = Number(num);
        
        if (checkGuess(numGuess, secretNumber)) {
            console.log('You win');
            rl.close();
        } else {
            numAttempts --;
            askGuess(secretNumber, numAttempts);
        }
        })
    }
} 

// call the function
// askGuess()


// test cases
// console.log(randomInRange(15, 20)); // 16
// console.log(randomInRange(15, 20)); // 17
// console.log(randomInRange(15, 20)); // 20

// define function askRange
// let numAttempts = 5;

const askRange = (numLimitEntered) => {
    // console.log(numLimitEntered);
    rl.question('Enter a min number ', (min) => {
        let minEntered = Number(min);
        rl.question('Enter a max number ', (max) => {
            let maxEntered = Number(max);
            console.log(`I'm thinking of a number between ${minEntered} and ${maxEntered}...`);

            let secretNumber = randomInRange(minEntered, maxEntered);
            let numAttempts = numLimitEntered;
            console.log(numAttempts);
            askGuess(secretNumber, numAttempts);
        })
      });

}

// do this when askRange is being called as a global function to the run (everything before Limiting turns dynamically)
// askRange()

// do this for Limiting turns dynamically

// define askLimit function
const askLimit = () => {
    rl.question('Enter number attempts limit: ', (numLimit) => {
        let numLimitEntered = Number(numLimit);

        askRange(numLimitEntered)
    })
}

askLimit()