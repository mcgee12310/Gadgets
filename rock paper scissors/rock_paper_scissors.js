// ROCK PAPER SCISSORS
const choices = ["rock 👊", "paper ✋", "scissors ✌"];
const playerDisplay = document.getElementById("playerDisplay"); 
const computerDisplay = document.getElementById("computerDisplay"); 
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerscoreDisplay");
const computerscoreDisplay = document.getElementById("computerscoreDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
    let result = "";
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock 👊":
                result = (computerChoice === "scissors ✌") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper ✋":
                result = (computerChoice === "rock 👊") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors ✌":
                result = (computerChoice === "paper ✋") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`; 
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`; 
    resultDisplay.textContent = result;
    switch(result){
        case "YOU WIN!":
            resultDisplay.style.color="green";
            playerScore++;
            playerscoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.style.color="red";
            computerScore++;
            computerscoreDisplay.textContent = computerScore;
            break;
        case "IT'S A TIE!":
            resultDisplay.style.color="black";
            break;
    }
}