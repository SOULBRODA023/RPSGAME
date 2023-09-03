
     
     let roundsPlayed = 0;
     let numberOfRounds = 5;
     function playRound(playerSelection) {
            const choices = ["rock", "paper", "scissors"];
            const computerSelection = choices[Math.floor(Math.random() * choices.length)];


            console.log(playerSelection);
            console.log(computerSelection);
            if (
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")
            ) {
                playerScore++
                console.log(playerScore)
                gameScore.innerHTML = playerScore
                alert(`you wins this round!`);
                return 1;
            } else if (playerSelection === computerSelection) {
                alert("It's a tie!");
                return 0;
            } else {
                alert("Computer wins this round!");
                computerScore++
                return -1;
            }
        }
   
        

        // Function to determine the game winner
        function determineWinner(playerScore, computerScore) {
            if (computerScore > playerScore) {
                alert(`Computer wins the game with a score of ${computerScore} to ${playerScore}`);
            } else if (playerScore > computerScore) {
                alert(`you win the game with a score of ${playerScore} to ${computerScore}`);
            } else {
                alert("It's a tie game!");
            }
        }
        //function to check the end of the game
     
        // Event listeners for player's choice
        const rock = document.getElementById("rock");
        const paper = document.getElementById("paper");
        const scissors = document.getElementById("scissors");
        const gameScore = document.getElementById("score")
        let playerScore = 0;
        let computerScore = 0;
        gameScore.innerHTML=playerScore
        rock.addEventListener('click', () => {
            const result = playRound("rock");
            if (result !== undefined) {
                roundsPlayed++;
                if (roundsPlayed === numberOfRounds) {
                    determineWinner(playerScore, computerScore);
                    playerScore = 0;
                    computerScore = 0;
                    roundsPlayed = 0;
                }
            }
        });

        paper.addEventListener('click', () =>{
            const result = playRound("paper");
            if (result !== undefined) {
                roundsPlayed++;
                if (roundsPlayed === numberOfRounds) {
                    determineWinner(playerScore, computerScore);
                    playerScore = 0;
                    computerScore = 0;
                    roundsPlayed = 0;
                }
        }
      
        });

        scissors.addEventListener('click', () => {
            const result = playRound("scissors");
            if (result !== undefined) {
                roundsPlayed++;
                if (roundsPlayed === numberOfRounds) {
                    determineWinner(playerScore, computerScore);
                    playerScore = 0;
                    computerScore = 0;
                    roundsPlayed = 0;
                }
            }
         
        });

        // Ask if the user wants to play the game
        const willYouPlay = confirm("Do you want to play a game of Rock, Paper, Scissors");

  