console.log("Hello World!");
gameArr= ["rock", "paper", "scissors"];

function getComputerChoice(){
    rand = Math.floor(Math.random()* gameArr.length);
    return gameArr[rand];
}

function getHumanChoice(){
    return prompt("Enter rock, paper, or scissors:");
}



function playGame(){
let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

console.log(`Final Score: You: ${humanScore} Computer: ${computerScore}`);


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        console.log("It's a tie!");
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper")){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}
}

playGame();