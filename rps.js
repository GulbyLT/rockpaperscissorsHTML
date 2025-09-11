let humanScore = 0;
let computerScore = 0;


function getComputerChoice() { //gets computer choice by generating random number between 0-2
    let choice = Math.floor(Math.random() * 3);

    console.log(choice);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getPlayerChoice() { //gets player choice
    let choice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    return choice;
}

function playRound(playerChoice, computerChoice) { //plays a single round of the game 
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++; //updates scores
        } else {
            humanScore++;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
        } else {
            humanScore++;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore
        } else {
            humanScore++;
        }
    } 
}

function playGame() { //plays 5 rounds of the game
    for (let i = 0; i <= 5; i++) { //itterates through 5 rounds
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        console.log("Round " + i + " : Player: " + playerChoice + " Computer: " + computerChoice);
        console.log("Score: Player " + humanScore + " Computer: " + computerScore);
    }

        if (humanScore > computerScore) { //after loop breaks, determines winner
            console.log("Player wins the game!");
        } else {
            console.log("Computer wins the game!");
        }
}

console.log(playGame()); //starts the game
