console.log("Test")

// ---------- Player Input: --------------


// Computer player input (random selection)

function getComputerChoice() {
    let moves = ['rock', 'paper', 'scissors']; 
    let rand = moves[(Math.random() * moves.length) | 0]
    console.log(rand)
}

// User input from prompt 
//     - no input = quit
//     - valid input = cont.
//     - invald input = retry

// Game Status:
// - compare player moves
//     - win
//     - tie


getComputerChoice()