//Ask if user will like to play the game

var willYouPlay= confirm ("Will you like to play a game of Rock, paper, scissors");
//if user will play game 
if (willYouPlay){
 let playerName =  prompt("What's your name?")
 let computerScoreSheet =[];
 let playerScoreSheet = [];
 if(playerName){
//if player will play 

//create variable for player and computer 
let playerSelection;
let ComputerSelection;
// SCoresheet


//create a function that will enable computer and player play a game
function playAround(){
    //let player write out his/her selection 
    let playerPick= prompt(`${playerName} rock, paper, scissors?`)
    playerSelection = playerPick.toLowerCase(playerPick)
 
    //create selection for the computer;
    let gameInput= ["rock", "paper", "scissors"]
    ComputerSelection = gameInput[Math.floor(Math.random()*gameInput.length)];
    alert(`computer chose: ${ComputerSelection}`)
    //create an if statement that runs the game
if (
    (playerSelection === "rock" && ComputerSelection === "scissors")||
    (playerSelection === "paper" && ComputerSelection === "rock")||
    (playerSelection === "scissors" && ComputerSelection === "paper")
    ) {
        let noWin = alert(`${playerName} wins`)
        playerScoreSheet.push(noWin)
    }
else if (playerSelection === ComputerSelection) {
    alert(`It's a tie game`)
    
} 
    
else{
    let computerWin = alert("computer wins")
    computerScoreSheet.push(computerWin)
    }
    }
   //Iterate over the game 
    let numberOfRounds= 5;
    for( var i = 0; i< numberOfRounds; i++){
        playAround()
    }
    if(computerScoreSheet> playerScoreSheet){
        alert(`computer ultimately wins the whole round by ${computerScoreSheet.length}`)

    }
    else{
        alert(`${playerName} you dominated and you rock by ${playerScoreSheet.length}`)
    }
    }
    
    }
    

//if player will not play 
else{
    alert("You are a weakling")
}

