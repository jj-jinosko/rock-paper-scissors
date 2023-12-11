
let playerScore = 0;
let computerScore = 0;

// ---------- Get Computer Input --------------
function getComputerChoice() {
    let moves = ['rock', 'paper', 'scissors'];
    let computerSelection = moves[(Math.random() * moves.length) | 0];
    return computerSelection;
}

//------------ Get Player Input and Trigger Game Play ----------
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));

//------------ Output Results to DOM----------------------
const resultsList = document.querySelector('#results');
let newResult;

let finalResult = document.querySelector('#finalResult');

//---------- Check Game Status: ---------------

// playRound: return the roundWinner (winning player)

function playGame(playerSelection){
    let computerSelection = getComputerChoice();
    let roundWinner = playRound(playerSelection, computerSelection);
    
    newResult = document.createElement('li');
    newResult.textContent = updateRoundMessage(roundWinner, playerSelection, computerSelection);
    resultsList.appendChild(newResult);

    if (endGame() == null){
        finalResult.textContent = 'pending';
    }else if (endGame() != null){
        finalResult.textContent = endGame();
        reset();
    }

}


function playRound(playerSelection, computerSelection) {

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

    return roundWinner;
}

function updateRoundMessage(roundWinner, playerSelection, computerSelection) {
    let message;
    if (roundWinner === 'tie'){
        // console.log('tie')
        message = 'Tie'
    }
    else if (roundWinner === 'player'){
        // console.log('You WIN!');
        // console.log(`${playerSelection} beats ${computerSelection}`);
        message = `${playerSelection} beats ${computerSelection}`;
    }
    else if (roundWinner === 'computer'){
        // console.log('computer wins');
        // console.log(`${computerSelection} beats ${playerSelection}`);
        message = `${computerSelection} beats ${playerSelection}`;
    }

    return message;
};

let reset = function () {
    console.log('game reset')
    playerScore = 0;
    computerScore = 0;
}

//------ end the game -------------
function endGame() {
    let end = null;
    if (playerScore == 3){
        //console.log('You win!');
        end = 'You win!';
    }
    else if (computerScore == 3){
        //console.log('The computer won...')
        end = 'The computer won...';
    }
    return end;
}
