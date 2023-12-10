
let playerScore = 0;
let computerScore = 0;

// ---------- Get Computer Input --------------

let moves = ['rock', 'paper', 'scissors'];

// get computer player input
function getComputerChoice() {
    let computerSelection = moves[(Math.random() * moves.length) | 0];
    console.log('computerSelection', computerSelection); // for testing purposes
    return computerSelection;
}

// ------------ Get Player Input --------------
function getPlayerChoice() {
    let playerSelection = prompt('please enter your move');
    return playerSelection;
}

// ---------- Check Game Status: ---------------

function gameStatus(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log('tie');

    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
        ) {
        console.log('You WIN!');
        return playerScore++;
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'rock')
        ) {
        console.log('Computer wins');
        return computerScore++;
    }
}


//-----
gameStatus(getPlayerChoice(), getComputerChoice());

//-----------Overall Win-------------
function overallWin(playerScore, computerScore){
    console.log('overall playerScore', playerScore);
    console.log('overall computerScore', computerScore);
    if (playerScore > computerScore) {
        console.log('YOU REALLY WIN');
    } else if (playerScore < computerScore) {
        console.log('The computer beat you...');
    } else if (playerScore === computerScore) {
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

//             console.log('playerScore', playerScore)
//             console.log('computerScore', computerScore)
//             break;
//         }
//     }
//     overallWin(playerScore, computerScore)
// }

// //---- start GAME ---------

// playRockPaperScissors()