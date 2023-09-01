function getComputerMove() {
    let computerMove = Math.floor(Math.random() * 3 + 1);
    
    if (computerMove === 1) {
        return computerMove = "rock"
    } else if (computerMove === 2) {
        return computerMove = "paper"
    } else if (computerMove === 3) {
        return computerMove = "scissors"
    } 
}

function getUserMove() {
    userMove = prompt("Do you want to play a game of Rock, Paper, Scissors?... Yes?, That's the spirit, the best of 5 wins, Now, Choose Rock, Paper or Scissors!");
    // turn their answer into lowercase (for case insensitivity purposes)
    userMove = userMove.toLowerCase()
    // deletes possible white spaces at the end or at the start of their answer
    userMove = userMove.trim()

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
    let cpuMove = getComputerMove();
    let playerMove = getUserMove();

    // if the player typed something other than the 3 possible options, restart the round and let them know their mistake
    if (!playerMove) {
        console.log("I told you to choose 'Rock', 'Paper' or 'Scissors', please check if you made a typo")
        return false
    }

    // tell the player what the cpu chose
    console.log(`I chose ${cpuMove}`);
    // and what THEY chose
    console.log(`You chose ${playerMove}`);

    // first if: checks all possible lose situations, second if: checks all possible win situations, third if: checks ties
    if (playerMove === "rock" && cpuMove === "paper" || playerMove === "paper" && cpuMove === "scissors" || playerMove === "scissors" && cpuMove === "rock") {    
        console.log(`${cpuMove} beats ${playerMove}, You Lost this round...`)
        return "cpu"
    } else if (playerMove === "rock" && cpuMove === "scissors" || playerMove === "paper" && cpuMove === "rock" || playerMove === "scissors" && cpuMove === "paper") {
        console.log(`${playerMove} beats ${cpuMove}, You Win this round!`)
        return "player"
    } else if (playerMove === "rock" && cpuMove === "rock" || playerMove === "paper" && cpuMove === "paper" || playerMove === "scissors" && cpuMove === "scissors") { 
        console.log("It's a tie");
        return false
    }
}

function startGame() {
    let playerScore = 0
    let cpuScore = 0
    let roundWinner = ""

    // as long as there's no winner, the loop will never stop, hence why the condition it's always true
    while (true) {
        roundWinner = playRound();

        if (roundWinner === "player") {
            playerScore += 1;
        } else if (roundWinner === "cpu") {
            cpuScore += 1;
        }

        console.log(`Your score is ${playerScore}, My score is ${cpuScore}`);

        // checks whether the player or the cpu won the entire game, not the round, in this case it's a best of 5 so when either score is 3, finish the game and tell the player who won.
        if (playerScore === 3) {
            return "You Won the game!"
        } else if (cpuScore === 3) {
            return "You Lost the game..."
        }
    }
}

console.log(startGame());