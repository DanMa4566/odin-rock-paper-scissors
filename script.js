const roundResult = document.querySelector(".round-result");
const paraPlayer = document.querySelector(".move-player");
const paraCpu = document.querySelector(".move-cpu");
const paraWinner = document.querySelector(".round-winner");
const paraPlayerScore = document.querySelector(".score-player");
const paraCpuScore = document.querySelector(".score-cpu");
const paraGameWinner = document.querySelector(".game-winner")
const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id)
    })
})

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

let playerScore = 0
let cpuScore = 0

function playRound(playerM) {
    let cpuMove = getComputerMove();
    let playerMove = playerM;

    if (playerMove === "restart") {
        
        playerScore = 0
        cpuScore = 0
        paraCpuScore.textContent = `CPU: ${cpuScore}`
        paraPlayerScore.textContent = `Player ${playerScore}`
        paraWinner.textContent = ""
        paraCpu.textContent = ""
        paraPlayer.textContent = ""
        paraGameWinner.textContent = ""

        return false
    }

    // prevents the player from playing another round after they lost / won
    if (playerScore >= 5 || cpuScore >= 5) {
        return false
    }

    paraCpu.textContent = `CPU chose ${cpuMove}`
    paraPlayer.textContent = `You chose ${playerMove}`

    // first if: checks all possible lose situations, second if: checks all possible win situations, third if: checks ties
    if (playerMove === "rock" && cpuMove === "paper" || playerMove === "paper" && cpuMove === "scissors" || playerMove === "scissors" && cpuMove === "rock") {    
        paraWinner.textContent = `${cpuMove} beats ${playerMove}, You lost this round...`
        cpuScore += 1
    } else if (playerMove === "rock" && cpuMove === "scissors" || playerMove === "paper" && cpuMove === "rock" || playerMove === "scissors" && cpuMove === "paper") {
        paraWinner.textContent = `${playerMove} beats ${cpuMove}, You Win this round!`
        playerScore += 1
    } else if (playerMove === "rock" && cpuMove === "rock" || playerMove === "paper" && cpuMove === "paper" || playerMove === "scissors" && cpuMove === "scissors") { 
        paraWinner.textContent = `It's a tie`
    }

    paraCpuScore.textContent = `CPU: ${cpuScore}`
    paraPlayerScore.textContent = `Player: ${playerScore}`

    if (playerScore >= 5) {
        paraGameWinner.textContent = "Congratulations, You won the game!"
    } else if (cpuScore >= 5) {
        paraGameWinner.textContent = "You lost the game"
    }
}