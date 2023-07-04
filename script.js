let PlayerScore = 0;
let ComputerScore = 0;
let exit = false;
let playerSelection;
const ComputerSelection = getComputerChoice();
let promptext1 = "";
let iteration = 0;

function getComputerChoice() {
    let computerOptions = ["Rock", "Paper", "Scissors"];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound() {
    if (
        (playerSelection === "Rock" && ComputerSelection === "Scissors") ||
        (playerSelection === "Paper" && ComputerSelection === "Rock") ||
        (playerSelection === "Scissors" && ComputerSelection === "Paper")
    ) {
        PlayerScore += 1;
        return playerSelection + " beats " + ComputerSelection + ". Player wins!";
    } else if (playerSelection === ComputerSelection) {
        return "It's a tie!";
    } else {
        ComputerScore += 1;
        return ComputerSelection + " beats " + playerSelection + ". Computer wins!";
    }
}

while (!exit) {
    
    do {
        let promptText = iteration === 0 ? "Select Rock, Paper, or Scissors\n\nType 'Quit' to stop" : "Invalid input. Please enter 'Rock', 'Paper', 'Scissors', or 'Quit':";
        let playerInput = prompt(promptText);
        playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
        iteration++;
    } while (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors" && playerSelection !== "Quit");

    if (playerSelection === "Quit") {
        exit = true;
    } else {
        iteration=0;
        console.log(`${playerSelection} vs ${ComputerSelection}\n\n${playRound()}`);
        console.log(`\nPlayer Score: ${PlayerScore} Computer Score: ${ComputerScore}`);
    }
}
