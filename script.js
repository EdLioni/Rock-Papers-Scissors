let PlayerScore = 0;
let ComputerScore = 0;
let exit = false;
let playerSelection;
let promptext1 = "";
let iteration = 0;
const btn_Rock2 = document.getElementById('btn_Rock');
const btn_Paper2 = document.getElementById('btn_Paper');
const btn_Scissors2 = document.getElementById('btn_Scissors');
const winnerText = document.getElementById('winnerText');
const scoreText = document.getElementById('scoreText')

function getComputerChoice() {
    
    let computerOptions = ["Rock", "Paper", "Scissors"];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound(input, ComputerSelection) {
    
    if (
        (input === "Rock" && ComputerSelection === "Scissors") ||
        (input === "Paper" && ComputerSelection === "Rock") ||
        (input === "Scissors" && ComputerSelection === "Paper")
    ) {
        PlayerScore += 1;
        return input + " beats " + ComputerSelection + ". Player wins!";

    } else if (input === ComputerSelection) {

        return input + " vs. " + ComputerSelection + ". It's a tie!";

    } else {

        ComputerScore += 1;
        return ComputerSelection + " beats " + input + ". Computer wins!";

    }
    
}

function displayScores(){
    scoreText.textContent = `Score: Player ${PlayerScore} Computer Score: ${ComputerScore}`;
}




btn_Rock.addEventListener('click', function() {

    winnerText.textContent= playRound("Rock", getComputerChoice());
    displayScores();
 
});

btn_Paper.addEventListener('click', function(){
 
    winnerText.textContent= playRound("Paper", getComputerChoice());
    displayScores();

});

btn_Scissors.addEventListener('click', function(){

    winnerText.textContent= playRound("Scissors", getComputerChoice());
    displayScores();
    
});