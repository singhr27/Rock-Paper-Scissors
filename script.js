const but = document.querySelector("#buttons");
const result = document.querySelector("#result");

result.style.whiteSpace = "pre-line"; // Preserve line breaks in the result text

let humanScore = 0;
let computerScore = 0;

but.addEventListener("click", handleClick);

function handleClick(e){
    let target = e.target;
    switch(target.id){
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
    }
}


gameArr= ["rock", "paper", "scissors"];

function getComputerChoice(){
    rand = Math.floor(Math.random()* gameArr.length);
    return gameArr[rand];
}



function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        result.textContent += `\n It's a tie! You both chose ${humanChoice}`;
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper")){
        result.textContent += `\n You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    else{
        result.textContent += `\n You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    // Show running score
    result.textContent += `\nScore: You ${humanScore} - Computer ${computerScore}`;

    // Check for winner
    if(humanScore === 5 || computerScore === 5){
        if(humanScore === 5){
            result.textContent += `\n🎉 You reached 5 points first! You win the game!`;
        } else {
            result.textContent += `\n💻 Computer reached 5 points first! Computer wins the game!`;
        }

        // Optionally disable further play
        but.removeEventListener("click", handleClick);
    }
}

