

// //---- GLOBALS ----
let rand;
let userChoice;

// ---------- Player Input: --------------

let moves = ['rock', 'paper', 'scissors'];

// Computer player input (random selection)

function getComputerChoice() { 
    rand = moves[(Math.random() * moves.length) | 0];
    console.log(rand); // for testing purposes
    return rand;
}

// User input from prompt 
//     - no input = quit
//     - valid input = cont.
//     - invald input = retry

// function getUserChoice() {
//     let userChoice = prompt('What item do you choose?');
//     return userChoice;
// }

// ---------- Game Status: ---------------
// - compare player moves
//     - win
//     - tie


function gameStatus(userChoice, rand) {
    if (userChoice == rand) {
        console.log('tie');
    }

    // CAN make the 'board' separate from the player 
    // let rock = 'rock';
    // let paper = 'paper';
    // let scissors = 'scissors';

    // if (rock && paper) {
    //     //paper wins
    //     return paper
    // }

    // else if (rock && scissors) {
    //     //rock wins
    //     return rock
    // }

    // else if (paper && scissors) {
    //     //scissors wins
    //     return scissors
    // }

    else if (userChoice == 'rock' && rand == 'paper') {
        console.log('Computer WINS!')
    }

    else if (userChoice == 'rock' && rand == 'scissors') {
        console.log('You WIN!')
    }

    else if (userChoice == 'paper' && rand == 'scissors') {
        console.log('Compuer WINS!')
    }

    else if (userChoice == 'paper' && rand == 'rock') {
        console.log('You WIN!')
    }

    else if (userChoice == 'scissors' && rand == 'paper') {
        console.log('Computer WINS!')
    }

    else if (userChoice == 'scissors' && rand == 'rock') {
        console.log('You WIN!')
    }
}

// ---------- GAME-----------------------
while (true) {
    // ---------- Player Input: --------------
    // Computer player input (random selection)
    getComputerChoice()

    // 
    while (true) {
    // User input from prompt 
        userChoice = prompt('What item do you choose?')

    
        // could use a try/catch here

        try {
            userChoice = userChoice.toLowerCase()
            console.log('it worked')
        }
        catch(err) {
            console.log('something went wrong')
        }

        if (moves.includes(userChoice.toLowerCase())) {
            break;
        }

        else {
            console.log('Please enter a valid option') 
            {continue; }
            }
    }

    // ---------- Game Status: ---------------
    // - compare player moves
    //     - win
    //     - tie

    // gameStatus('rock', 'scissors');

    gameStatus(userChoice, rand);

    break;
}