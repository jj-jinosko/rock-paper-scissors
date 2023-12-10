
let playerScore = 0;
let computerScore = 0;

// ---------- Get Computer Input --------------
function getComputerChoice() {
    let moves = ['rock', 'paper', 'scissors'];
    let computerSelection = moves[(Math.random() * moves.length) | 0];
    console.log('computerSelection', computerSelection); // for testing purposes
    return computerSelection;
}

//------- DOM Manipulation --------

// ------------ Get Player Input --------------
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

// ---------- Check Game Status: ---------------

// playRound: return the roundWinner (winning player)

function playRound(playerSelection) {
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
        roundWinner = 'player';
        return playerScore++;
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
        ) {
        roundWinner = 'computer';
        return computerScore++;
    }

    updateRoundMessage(roundWinner, playerSelection, computerSelection); //is there a better way to organize this? with classes?
}


//--
// function updateScores() {

// }

function updateRoundMessage() {
    if (roundWinner === 'tie'){
        console.log('tie')
    }
    else if (roundWinner === 'player'){
        console.log('You WIN!');
    }
    else if (roundWinner === 'computer'){
        console.log('computer wins');
    }
};

//--


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




