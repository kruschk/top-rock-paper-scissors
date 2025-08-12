"use strict";

const final = document.querySelector("#final");
const rounds = document.querySelector("#rounds");

let computerScore = 0;
let playerScore = 0;

function appendRound(message) {
    const round = document.createElement("li");
    round.textContent = message;
    rounds.appendChild(round);
}

function disableButtons() {
    document.querySelectorAll("menu > li > button")
            .values()
            .forEach(button => {
                if (button.id !== "reset") {
                    button.setAttribute("disabled", "")
                }
            });
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        appendRound("It's a tie!");
        return;
    }
    switch (computerChoice) {
        case "paper":
            switch (playerChoice) {
                case "rock":
                    appendRound("Paper beats rock; you lose.");
                    computerScore++;
                    break;
                case "scissors":
                    appendRound("Scissors beat paper; you win!");
                    playerScore++;
                    break;
            }
            break;
        case "rock":
            switch (playerChoice) {
                case "paper":
                    appendRound("Paper beats rock; you win!");
                    playerScore++;
                    break;
                case "scissors":
                    appendRound("Rock beats scissors; you lose.");
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (playerChoice) {
                case "paper":
                    appendRound("Scissors beat paper; you lose.");
                    computerScore++;
                    break;
                case "rock":
                    appendRound("Rock beats scissors; you win!");
                    playerScore++;
                    break;
            }
            break;
    }

    // Check for a winner and stop the game if appropriate.
    if (5 <= computerScore) {
        final.textContent = "Sorry, the computer wins this one.";
        disableButtons();
    } else if (5 <= playerScore) {
        final.textContent = "Congratulations, you win!";
        disableButtons();
    }
}

// Delegate the player's selection (click event) to the menu element instead of
// adding an event listener to each button.
document.querySelector("menu").addEventListener("click", (event) => {
    const choices = ["paper", "rock", "scissors"];
    const computerChoice = choices[Math.floor(3 * Math.random())];
    switch (event.target.id) {
        case "rock":
            playRound(computerChoice, "rock");
            break;
        case "paper":
            playRound(computerChoice, "paper");
            break;
        case "scissors":
            playRound(computerChoice, "scissors");
            break;
        case "reset":
            computerScore = 0;
            playerScore = 0;
            while (rounds.firstChild) {
                rounds.removeChild(rounds.firstChild);
            }
            final.textContent = "";
            document.querySelectorAll("menu > li > button")
                    .values()
                    .forEach(button => button.removeAttribute("disabled"));
            break;
    }
    computerScoreboard.textContent = computerScore.toString();
    playerScoreboard.textContent = playerScore.toString();
});
