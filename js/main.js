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

// function getUserChoice() {
//     let userChoice = prompt('What item do you choose?');
//     return userChoice;
// }

// ---------- Game Status: ---------------
// - compare player moves
//     - win
//     - tie


// ---------- GAME-----------------------
while (true) {
    // ---------- Player Input: --------------
    // Computer player input (random selection)
    getComputerChoice()

    // 
    while (true) {
    // User input from prompt 
        let userChoice = prompt('What item do you choose?')

    
        // could use a try/catch here

        try {
            userChoice.toLowerCase()
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



    break;
}