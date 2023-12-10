// //---- GLOBALS ----
let computerSelection;
let playerSelection;

let playerWin = 0;
let computerWin = 0;

// ---------- Player Input: --------------

let moves = ['rock', 'paper', 'scissors'];

// get computer player input
function getComputerChoice() {
    computerSelection = moves[(Math.random() * moves.length) | 0];
    console.log('computerSelection', computerSelection); // for testing purposes
    return computerSelection;
}

// User input from prompt
//     - no input = quit
//     - valid input = cont.
//     - invald input = retry

// ---------- Game Status: ---------------
// - compare player moves
//     - win
//     - tie


//         | rock    | paper    | scissors |
// rock    | tie     | paper    | rock     |
// paper   | paper   | tie      | scissors |
// scissors| rock    | scissors | tie      |

function gameStatus(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log('tie');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('Computer WINS!');
        return computerWin++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You WIN!');
        return playerWin++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('Compuer WINS!');
        return computerWin++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You WIN!');
        return playerWin++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('Computer WINS!');
        return computerWin++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You WIN!');
        return playerWin++;
    }
}

//-----------Overall Win-------------
function overallWin(playerWin, computerWin){
    console.log('overall playerWin', playerWin);
    console.log('overall computerWin', computerWin);
    if (playerWin > computerWin) {
        console.log('YOU REALLY WIN');
    } else if (playerWin < computerWin) {
        console.log('The computer beat you...');
    } else if (playerWin === computerWin) {
        console.log('somehow, you both tied');
    }
}

// // ---------- GAME-----------------------

// function playRockPaperScissors() {
//     // decide how many games you want to play
//     let i;
//     for (i = 0; i < 1; i++){

//         while (true) {
//             // ---------- Player Input: --------------
//             // get computer player input
//             getComputerChoice()

//             // get user input from prompt, try until a valid input is entered

//             let rockBtn = document.querySelector('#rockBtn');
//             // rockBtn.addEventListener('click', () => {alert('clicked rock')});

//             rockBtn.addEventListener('click', () => selectItem('rock'));

//             function selectItem(item) {
//                 playerSelection = item;
//                 console.log('playerSelection', playerSelection);
//                 return playerSelection;
//             };

//             // ---------- Game Status: ---------------
//             gameStatus(playerSelection, computerSelection);

//             console.log('playerWin', playerWin)
//             console.log('computerWin', computerWin)
//             break;
//         }
//     }
//     overallWin(playerWin, computerWin)
// }

// //---- start GAME ---------

// playRockPaperScissors()