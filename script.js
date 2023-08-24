function getComputerMove() {
    // generates a random number between 1 and 3
    let computerMove = Math.floor(Math.random() * 3 + 1);

    // depending on which number was generated, decide if cpu's move was rock, paper, or scissors
    if (computerMove === 1) {
        return computerMove = "rock"
    } else if (computerMove === 2) {
        return computerMove = "paper"
    } else if (computerMove === 3) {
        return computerMove = "scissors"
    } 
}

function getUserMove() {
    // ask the user which option they want to select
    userMove = prompt("Do you want to play a game of Rock, Paper, Scissors?... Yes?, That's the spirit, the best of 5 wins, Now, Choose Rock, Paper or Scissors!");
    // turn their answer into lowercase (for case insensitivity purposes)
    userMove = userMove.toLowerCase()
    // deletes possible white spaces at the end or at the start of their answer
    userMove = userMove.trim()

    // checks if the user actually chose one of the 3 possible answers
    if (userMove === "rock") {
        return userMove
    } else if (userMove === "paper") {
        return userMove
    } else if (userMove === "scissors") {
        return userMove
    } else {
        return false
    }
}


function playRound() {
    // get computer's selection
    let cpuMove = getComputerMove();
    // get player's selection
    let playerMove = getUserMove();

    // if the player typed something other than the 3 possible options, restart the round and let them know their mistake
    if (!playerMove) {
        console.log("I told you to choose 'Rock', 'Paper' or 'Scissors', please check if you made a typo")
        return false
    }

    // tell the player what the cpu chose
    console.log(`You chose ${playerMove}`);
    // and what THEY chose
    console.log(`I chose ${cpuMove}`);

    // first if: checks all possible lose situations, second if: checks all possible win situations, third if: checks ties
    if (playerMove === "rock" && cpuMove === "paper" || playerMove === "paper" && cpuMove === "scissors" || playerMove === "scissors" && cpuMove === "rock") {    
        // tell the player they lost and return the winner, cpu in this case
        console.log(`${cpuMove} beats ${playerMove}, You Lost this round...`)
        return "cpu"
    } else if (playerMove === "rock" && cpuMove === "scissors" || playerMove === "paper" && cpuMove === "rock" || playerMove === "scissors" && cpuMove === "paper") {
        // tell the player they won and return the winner, player in this case
        console.log(`${playerMove} beats ${cpuMove}, You Win this round!`)
        return "player"
    } else if (playerMove === "rock" && cpuMove === "rock" || playerMove === "paper" && cpuMove === "paper" || playerMove === "scissors" && cpuMove === "scissors") { 
        // tell the player it was a tie and return false to restart the round
        console.log("It's a tie");
        return false
    }
}

function startGame() {
    // set player and cpu scores to zero and initialize roundWinner variable, we don't want other values there, do we?
    let playerScore = 0
    let cpuScore = 0
    let roundWinner = ""

    // as long as there's no winner, the loop will never stop, hence why the condition it's always true
    while (true) {
        // call playRound function to know who won the round
        roundWinner = playRound();

        // when the player or the cpu wins, add 1 point to their score
        if (roundWinner === "player") {
            playerScore += 1;
        } else if (roundWinner === "cpu") {
            cpuScore += 1;
        }

        // tell the player their current score and the cpu's score
        console.log(`Your score is ${playerScore}, My score is ${cpuScore}`);

        // checks whether the player or the cpu won the entire game, not the round, in this case it's a best of 5 so when either score is 3, finish the game and tell the player who won.
        if (playerScore === 3) {
            return "You Won the game!"
        } else if (cpuScore === 3) {
            return "You Lost the game..."
        }
    }
}

// start game
console.log(startGame());