    window.addEventListener('DOMContentLoaded', function() {
 
        let rockBtn = document.getElementById('rock-btn')
        let paperBtn = document.getElementById('paper-btn')
        let scissorsBtn = document.getElementById('scissors-btn')

        let playerChoice = document.getElementById('player-choice')
        let computerChoice = document.getElementById('computer-choice')
        let roundWinner = document.getElementById('round-winner');
        let gameWinner = document.getElementById('game-winner');
        let playerScore = document.getElementById('player-score');
        let computerScore = document.getElementById('computer-score');
        let newGame = document.getElementById('new-game');
        

        let choices = ["ROCK", "PAPER", "SCISSORS"];
        


        rockBtn.addEventListener('click', () =>{
            playerChoice.innerHTML = "ROCK";
            let randomNumber = Math.floor(Math.random() * choices.length);
            computerChoice.innerHTML = choices[randomNumber];
            roundWinneer();
            keepCount();
        })

        paperBtn.addEventListener('click', () =>{
            playerChoice.innerHTML = "PAPER";
            let randomNumber = Math.floor(Math.random() * choices.length);
            computerChoice.innerHTML = choices[randomNumber];
            roundWinneer();
            keepCount();
        })

        scissorsBtn.addEventListener('click', () =>{
            playerChoice.innerHTML = "SCISSORS";
            let randomNumber = Math.floor(Math.random() * choices.length);
            computerChoice.innerHTML = choices[randomNumber];
            roundWinneer();
            keepCount();
        })

        let pCount = 1
        let cCount = 1
        let pCountIndex = 1
        let cCountIndex = 1
        
        function roundWinneer(){
            if((playerChoice.innerHTML === "ROCK" && computerChoice.innerHTML === "SCISSORS") ||
                (playerChoice.innerHTML === "PAPER" && computerChoice.innerHTML === "ROCK") || 
                (playerChoice.innerHTML === "SCISSORS" && computerChoice.innerHTML === "PAPER")){
                    roundWinner.innerHTML = "YOU WON!";
                }
            if((computerChoice.innerHTML === "ROCK" && playerChoice.innerHTML === "SCISSORS") ||
                (computerChoice.innerHTML === "PAPER" && playerChoice.innerHTML === "ROCK") || 
                (computerChoice.innerHTML === "SCISSORS" && playerChoice.innerHTML === "PAPER")){
                    roundWinner.innerHTML = "YOU LOST!";
                }
            if(playerChoice.innerHTML === computerChoice.innerHTML){
                roundWinner.innerHTML = "ITS A DRAW";
                
            }
            if(roundWinner.innerHTML === "YOU WON!"){
                playerScore.innerHTML = pCount++
    
            }
            if(roundWinner.innerHTML === "YOU LOST!"){
                computerScore.innerHTML = cCount++

            }
            if(pCount === 6){
                pCount = 0;
            }
            if(cCount === 6){
                cCount = 0;
            }
        }

        function keepCount(){
            if(roundWinner.innerHTML === "YOU WON!"){
                pCountIndex++
            }
            if(roundWinner.innerHTML === "YOU LOST!"){
                cCountIndex++
            }
            if(cCountIndex === 6 && pCountIndex < 6){
                gameWinner.innerHTML = "YOU HAVE LOST THIS GAME"
            }
            if(pCountIndex === 6 && cCountIndex < 6){
                gameWinner.innerHTML = "YOU HAVE WON THIS GAME"
            }
            if(cCountIndex === 6 && pCountIndex === 6){
                gameWinner.innerHTML = "GAME ENDED IN A TIE"
            }

            if(gameWinner.innerHTML === "YOU HAVE LOST THIS GAME" || 
            gameWinner.innerHTML === "YOU HAVE WON THIS GAME" || 
            gameWinner.innerHTML === "GAME ENDED IN A TIE"){
                let divContainer = document.getElementById('div-container');
                divContainer.style.display = 'none';
                let btnContainer = document.getElementById('btn-container')
                btnContainer.style.display = 'none'
                let choicesContainer = document.getElementById('choices-container')
                choicesContainer.style.display = 'none'
            }
        }
       
        newGame.addEventListener('click', () =>{
            playerChoice.innerHTML =""
            computerChoice.innerHTML =""
            roundWinner.innerHTML = ""
            playerScore.innerHTML = 0;
            computerScore.innerHTML = 0;
            gameWinner.innerHTML =""
            pCount = 1
            cCount = 1
            pCountIndex = 1
            cCountIndex = 1
            let divContainer = document.getElementById('div-container');
            divContainer.style.display = 'block';
            let btnContainer = document.getElementById('btn-container')
            btnContainer.style.display = 'block'
            let choicesContainer = document.getElementById('choices-container')
            choicesContainer.style.display = 'flex'
        })
    });