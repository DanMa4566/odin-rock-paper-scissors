function getComputerMove() {
    let computerMove = Math.floor(Math.random() * 3 + 1);
    if (computerMove === 1) {
        return computerMove = "rock"
    } else if (computerMove === 2) {
        return computerMove = "paper"
    } else if (computerMove === 3) {
        return computerMove = "scissors"
    }
    return "This wasn't supposed to happen"
}

function getUserMove() {
    userMove = prompt("Do you want to play a game of Rock, Paper, Scissors?... Yes?, That's the spirit, the best of 5 wins, Now, Choose Rock, Paper or Scissors!");
    userMove = userMove.toLowerCase()
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

    if (!playerMove) {
        console.log("I told you to choose 'Rock', 'Paper' or 'Scissors', please check if you made a typo")
        return false
    }

    console.log(`You chose ${playerMove}`);
    console.log(`I chose ${cpuMove}`);

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

    while (true) {
        roundWinner = playRound();

        if (roundWinner === "player") {
            playerScore += 1;
        } else if (roundWinner === "cpu") {
            cpuScore += 1;
        }

        console.log(`Your score is ${playerScore}, My score is ${cpuScore}`);

        if (playerScore === 3) {
            return "You Won the game!"
        } else if (cpuScore === 3) {
            return "You Lost the game..."
        }
    }
}

console.log(startGame());