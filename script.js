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
    userMove = prompt("Do you want to play a game of Rock, Paper, Scissors?... Yes?, That's the spirit, Now, Choose Rock, Paper or Scissors!");
    userMove = userMove.trim(userMove.toLowerCase())

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


function startGame() {
    let cpuMove = getComputerMove();
    let playerMove = getUserMove();

    if (!playerMove) {
        return "I told you to choose 'Rock', 'Paper' or 'Scissors', please check if you made a typo"
    }

    console.log(`You chose ${playerMove}`);
    console.log(`I chose ${cpuMove}`);

    if (playerMove === "rock" && cpuMove === "paper" || playerMove === "paper" && cpuMove === "scissors" || playerMove === "scissors" && cpuMove === "rock") {    
        console.log(`${cpuMove} beats ${playerMove}, You Lost...`);
    } else if (playerMove === "rock" && cpuMove === "scissors" || playerMove === "paper" && cpuMove === "rock" || playerMove === "scissors" && cpuMove === "paper") {
        console.log(`${playerMove} beats ${cpuMove}, You Won!`);
    } else if (playerMove === "rock" && cpuMove === "rock" || playerMove === "paper" && cpuMove === "paper" || playerMove === "scissors" && cpuMove === "scissors") { 
        console.log(`It's a tie!`);
    }
}

console.log(startGame())