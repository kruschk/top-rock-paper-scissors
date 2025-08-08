"use strict";
const choices = ["paper", "rock", "scissors"];

let computerScore = 0;
let humanScore = 0;

const getComputerChoice = () => choices[Math.floor(3 * Math.random())];
const getHumanChoice = () => window.prompt("Enter rock, paper, or scissors.")
                                   .toLowerCase();

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
        return;
    }

    switch (computerChoice) {
        case "paper":
            switch (humanChoice) {
                case "rock":
                    console.log("Paper beats rock; you lose.");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("Scissors beat paper; you win!");
                    humanScore++;
                    break;
            }
            break;
        case "rock":
            switch (humanChoice) {
                case "paper":
                    console.log("Paper beats rock; you win!");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("Rock beats scissors; you lose.");
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (humanChoice) {
                case "paper":
                    console.log("Scissors beat paper; you lose.");
                    computerScore++;
                    break;
                case "rock":
                    console.log("Rock beats scissors; you win!");
                    humanScore++;
                    break;
            }
            break;
    }
}

function playGame() {
    computerScore = 0;
    humanScore = 0;

    for (let round = 0; round < 5; round++) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    if (computerScore < humanScore) {
        console.log("Congratulations, you win!");
    } else if (computerScore === humanScore) {
        console.log("Looks like it's a draw!");
    } else {
        console.log("Sorry, the computer wins this one.");
    }
}

playGame();
