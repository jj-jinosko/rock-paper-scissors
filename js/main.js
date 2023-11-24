console.log("Test")

// ---------- Player Input: --------------

let moves = ['rock', 'paper', 'scissors'];

// Computer player input (random selection)

function getComputerChoice() { 
    let rand = moves[(Math.random() * moves.length) | 0];
    console.log(rand); // for testing purposes
    return rand;
}

// User input from prompt 
//     - no input = quit
//     - valid input = cont.
//     - invald input = retry

function getUserChoice() {
    let userChoice = prompt('What item do you choose?');

    // could use a try/catch here

    // if userChoice == invalid {
    
    if (userChoice.toLowerCase() == 'rock') {
        console.log('this worked')
    }

    // }

    // seems like "in" works differently than python
    // if (userChoice.toLowerCase() in moves) {
    //     console.log('nice')
    //     return userChoice.toLowerCase()
    // }

    if (moves.includes(userChoice.toLowerCase())) {
        console.log('nice')
    }

}

// ---------- Game Status: ---------------
// - compare player moves
//     - win
//     - tie


// ---------- Player Input: --------------
// Computer player input (random selection)
getComputerChoice()
// User input from prompt 
getUserChoice()

// ---------- Game Status: ---------------
// - compare player moves
//     - win
//     - tie
