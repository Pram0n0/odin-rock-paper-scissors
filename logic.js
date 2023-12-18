function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

let playerScore = 0;
let computerScore = 0;
let roundResult;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        roundResult = 'tie';
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++;
        roundResult = 'win';
    }
    else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        computerScore++;
        roundResult = 'loss';
    }
    
    switch (roundResult) {
        case 'tie':
            return `Tie! Try again. ${playerSelection} = ${computerSelection}`;
        case 'win':
            return `You Win! ${playerSelection} > ${computerSelection}`;
        case 'loss':
            return `You Lose! ${playerSelection} < ${computerSelection}`;
    }
}

console.log(playRound(playerSelection, computerSelection));

function game() {
    while (playerScore < 3 && computerScore < 3) {
        playerSelection = prompt("Rock, Paper, or Scissors!");
        computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);

        if (result === 'win') {
            playerScore++;
        } else if (result === 'loss') {
            computerScore++;
        }
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }

    if (playerScore === 3) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("Sorry, you lost the game. Try again!");
    }
}