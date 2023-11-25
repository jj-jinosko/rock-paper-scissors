

// //---- GLOBALS ----
let computerSelection;
let playerSelection;

// ---------- Player Input: --------------

let moves = ['rock', 'paper', 'scissors'];

// Computer player input (computerSelectionom selection)

function getComputerChoice() { 
    computerSelection = moves[(Math.random() * moves.length) | 0];
    console.log('computerSelection', computerSelection); // for testing purposes
    return computerSelection;
}

// User input from prompt 
//     - no input = quit
//     - valid input = cont.
//     - invald input = retry

// function getplayerSelection() {
//     let playerSelection = prompt('What item do you choose?');
//     return playerSelection;
// }

// ---------- Game Status: ---------------
// - compare player moves
//     - win
//     - tie


//         | rock    | paper    | scissors |
// rock    | tie     | paper    | rock     |
// paper   | paper   | tie      | scissors |
// scissors| rock    | scissors | tie      |
function gameStatus(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log('tie');
    }

    // CAN make the 'board' separate from the player 
    // let win = null;
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

    // Manual win
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('Computer WINS!')
    }

    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('You WIN!')
    }

    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('Compuer WINS!')
    }

    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You WIN!')
    }

    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('Computer WINS!')
    }

    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('You WIN!')
    }
}

// ---------- GAME-----------------------

function rockPaperScissors() {
    // decide how many games you want to play
    for (let i = 0; i < 3; i++){
        while (true) {
            // ---------- Player Input: --------------
            // Computer player input (computerSelectionom selection)
            getComputerChoice()

            // 
            while (true) {
            // User input from prompt 
                playerSelection = prompt('What item do you choose?')
            
                // could use a try/catch here
                try {
                    playerSelection = playerSelection.toLowerCase()
                    console.log('playerSelection', playerSelection)
                }
                catch(err) {
                    console.log('something went wrong')
                }

                if (moves.includes(playerSelection.toLowerCase())) {
                    break;
                }

                else {
                    console.log('Please enter a valid option') 
                    {continue; }
                    }
            }

            // ---------- Game Status: ---------------
            gameStatus(playerSelection, computerSelection);

            break;
        }
    }
}

//---- start GAME ---------

rockPaperScissors()