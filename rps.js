let humanScore = 0;
let computerScore = 0;

    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const resultDiv = document.getElementById('resulttext');

    
    
    function computerWins() {
        resultDiv.textContent = "Result: Computer wins!"
        showScore();
    }

    function humanWins() {
        resultDiv.textContent = "Result: You win!"
        showScore();
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

    function showScore() {
        
        const pScore = document.getElementById('humanScore');
        const cScore = document.getElementById('computerScore');


        if (humanScore === 5) {
            resultDiv.textContent = "Result: You reached 5 points! You win the game!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            resultDiv.textContent = "Result: Computer reached 5 points! Computer wins the game!";
            humanScore = 0;
            computerScore = 0;
        }
        
        pScore.textContent = "Your Score: " + humanScore;
        cScore.textContent = "Computer Score: " + computerScore;
      
    }

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

function playRound(playerChoice, computerChoice) { //plays a single round of the game 
    document.querySelector('p[pChoice]').textContent = "Player Choice: " + playerChoice;
    document.querySelector('p[cChoice]').textContent = "Computer Choice: " + computerChoice;

    if (playerChoice === computerChoice) {
        resultDiv.textContent = "Result: It's a tie!";
        showScore();
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

