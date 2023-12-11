
let playerScore = 0;
let computerScore = 0;

// ---------- Get Computer Input --------------
function getComputerChoice() {
    let moves = ['rock', 'paper', 'scissors'];
    let computerSelection = moves[(Math.random() * moves.length) | 0];
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


const resultsList = document.querySelector('#results');
const newResult = document.createElement('li');
newResult.textContent = 

rockBtn.addEventListener('click', () => {
    resultsList.appendChild(newResult);
});



// ---------- Check Game Status: ---------------

// playRound: return the roundWinner (winning player)

// function playGame(){};


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        roundWinner = 'player';
        playerScore++;
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        roundWinner = 'computer';
        computerScore++;
    }

    updateRoundMessage(roundWinner, playerSelection, computerSelection); //is there a better way to organize this? with classes?
}

function updateRoundMessage(roundWinner, playerSelection, computerSelection) {
    if (roundWinner === 'tie'){
        console.log('tie')
    }
    else if (roundWinner === 'player'){
        console.log('You WIN!');
        console.log(`${playerSelection} beats ${computerSelection}`);
    }
    else if (roundWinner === 'computer'){
        console.log('computer wins');
        console.log(`${computerSelection} beats ${playerSelection}`);
    }

    endGame();
};

let reset = function () {
    console.log('game reset')
    playerScore = 0;
    computerScore = 0;
}
//--
function endGame() {
    if (playerScore == 3){
        console.log('You win!');
        reset();
    }
    else if (computerScore == 3){
        console.log('The computer won...')
        reset();
    }
}



