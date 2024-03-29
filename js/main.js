
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

//---------- Play Game ---------------

function playGame(playerSelection){
    let computerSelection = getComputerChoice();
    let roundWinner = getResult(playerSelection, computerSelection);

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

//---------- get result ---------------
function getResult(playerSelection, computerSelection) {

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
        message = 'Tie'
    }
    else if (roundWinner === 'player'){
        message = `${playerSelection} beats ${computerSelection}`;
    }
    else if (roundWinner === 'computer'){
        message = `${computerSelection} beats ${playerSelection}`;
    }

    return message;
};

let reset = function () {
    playerScore = 0;
    computerScore = 0;
}

//------ end the game -------------
function endGame() {
    let end = null;
    if (playerScore == 3){
        end = 'You win!';
    }
    else if (computerScore == 3){
        end = 'The computer won...';
    }
    return end;
}
