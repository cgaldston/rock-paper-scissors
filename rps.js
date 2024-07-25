let humanScore = 0;
let computerScore = 0;
const div = document.querySelector("div");
let message = document.createElement("p");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
let humanScoreOutput = document.createElement("p");
let computerScoreOutput = document.createElement("p");
humanScoreOutput.textContent = humanScore;
computerScoreOutput.textContent = computerScore;
score1.appendChild(humanScoreOutput);
score2.appendChild(computerScoreOutput);


function getComputerChoice() {
    let number = Math.random();

    if (number <= 0.33) {
        return "Rock"
    }
    else if (number >= 0.66) {
        return "Scissors"
    }
    else {
        return "Paper"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors?");
    return choice;
}


function playRound(humanChoice, computerChoice) {
    let humanLower = humanChoice;
    message.remove()
    

    if (humanLower == "rock" && computerChoice == "Paper") {
        message.textContent = "You lose. Rock beats scissors.";
        computerScore++;
    }
    else if (humanLower == "rock" && computerChoice == "Scissors") {
        message.textContent = 'You win! Rock beats Scissors';
        humanScore++;
    }
    else if (humanLower == "rock" && computerChoice == "Rock") {
        message.textContent = 'Tie! Play again.'
    }
    else if (humanLower == "paper" && computerChoice == "Rock") {
        message.textContent = 'You Win! Paper beats Rock';
        humanScore++;
    }
    else if (humanLower == "paper" && computerChoice == "Scissors") {
        message.textContent = 'You lose! Scissors beats Paper'
        computerScore++;
    }
    else if (humanLower == "paper" && computerChoice == "Paper") {
        message.textContent = 'You tie! Play again.'
    }
    else if (humanLower == "scissors" && computerChoice == "Paper") {
        message.textContent = 'You Win! Scissors beats Paper'
        humanScore++;
    }
    else if (humanLower == "scissors" && computerChoice == "Rock") {
        message.textContent = 'You Lose! Rock beats Scissors'
        computerScore++;
    }
    else if (humanLower == "scissors" && computerChoice == "Paper") {
        message.textContent = 'You tie! Play again.'
    }
    div.appendChild(message);
    humanScoreOutput.textContent = humanScore;
    computerScoreOutput.textContent = computerScore;

    if (humanScore == 5) {
        const victory = document.createElement("h3");
        victory.style.color = "green";
        victory.textContent = "You win this time!!!!";
        div.appendChild(victory);
        humanScore = 0;
        computerScore = 0;
        humanScoreOutput.textContent = humanScore;
        computerScoreOutput.textContent = computerScore;
    }

    if (computerScore == 5) {
        const loss = document.createElement("h3");
        loss.style.color = "red";
        loss.textContent = "You lost!!!!";
        div.appendChild(loss);
        humanScore = 0;
        computerScore = 0;
        humanScoreOutput.textContent = humanScore;
        computerScoreOutput.textContent = computerScore;
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));