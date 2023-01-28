let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * choices.length);
    return(choices[randomNumber]);
};


let playerSelection = window.prompt("Enter a Choice: ");
playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if(computerSelection === "Paper" && playerSelection === "Rock" ){ 
        return ("You lose! " + computerSelection + " beats " + playerSelection)
    }
    else if(computerSelection === "Rock" && playerSelection === "Paper" ){
        return ("You Win! " + playerSelection + " beats " + computerSelection)
    }
    else if(computerSelection === "Rock" && playerSelection === "Scissors" ){
        return ("You lose! " + computerSelection + " beats " + playerSelection)
    }
     else if(computerSelection === "Scissors" && playerSelection === "Rock" ){
        return ("You Win! " + playerSelection + " beats " + computerSelection)
    }
    else if(computerSelection === "Scissors" && playerSelection === "Paper" ){
        return ("You lose! " + computerSelection + " beats " + playerSelection)
    }
    else if(computerSelection === "Paper" && playerSelection === "Scissors" ){
        return ("You Win! " + playerSelection + " beats " + computerSelection)
    }
    else {
        return ("its a Tie " + computerSelection + " is equal to " + playerSelection)
    }
};
  console.log(playRound(playerSelection, computerSelection));