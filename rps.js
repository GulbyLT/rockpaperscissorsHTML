let humanScore = 0;
let computerScore = 0;

    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const resultDiv = document.getElementById('resulttext');

    function computerWins() {
        resultDiv.textContent = "Result: Computer wins!"
    }

    function humanWins() {
        resultDiv.textContent = "Result: You win!"
    }

    rock.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        playRound('rock', computerChoice);
    });

    paper.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        playRound('paper', computerChoice);
    });

    scissors.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        playRound('scissors', computerChoice);
    });

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

/*function getPlayerChoice() { //gets player choice
    let choice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    return choice;
}*/

function playRound(playerChoice, computerChoice) { //plays a single round of the game 
    if (playerChoice === computerChoice) {
        resultDiv.textContent = "Result: It's a tie!";
        return "It's a tie!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++; //updates scores
            computerWins();
        } else {
            humanScore++;
            humanWins();
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            computerWins();
        } else {
            humanScore++;
            humanWins();
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            computerWins();
        } else {
            humanScore++;
            humanWins();
        }
    } 
}

/*function playGame() { //plays 5 rounds of the game
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



console.log(playGame()); //starts the game*/
