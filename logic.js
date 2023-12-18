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


var selections = document.querySelectorAll('button')
selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        computerSelection = getComputerChoice();
        const log = document.querySelector('.log');
        const result = playRound(selection.id, computerSelection);
        const log_result = document.createElement('p')
        log_result.textContent = result
        log.appendChild(log_result)
        

        if (result === 'win') {
            playerScore++;
        } else if (result === 'loss') {
            computerScore++;
        }
        const score = document.querySelector('#score')
        score.innerHTML = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
        
        if (playerScore === 3) {
            console.log("Congratulations! You won the game!");
            playerScore = 0;
            computerScore = 0;
            log.textContent = ""
            score.innerHTML = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
        } else if (computerScore === 3) {
            console.log("Sorry, you lost the game. Try again!");
            playerScore = 0;
            computerScore = 0;
            log.textContent = ""
            score.innerHTML = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
        }
    });
});