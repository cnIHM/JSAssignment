//variables
let button0 =document.getElementById('button0');

//texts
let playerRollText=document.getElementById('playerRollText');
let computerRollText=document.getElementById('computerRollText');
let gameResultsText=document.getElementById('gameResultsText');
let playerWinsText=document.getElementById('playerWinsText');
let computerWinsText=document.getElementById('computerWinsText');
let drawsText=document.getElementById('drawsText');

//Data
let playerRoll=0;
let computerRoll=0;
let playerWins=0;
let computerWins=0;
let draws=0;


//Processes
button0.addEventListener('click',function() {
 getRandomNumberOneToSixForPlayer();
 showPlayerRollResult ();
 showComputerRollResult();
 determineWinner();
 updateStats();

});
//Controllers
function getRandomNumberOneToSixForPlayer(){
  playerRoll=Math.floor(Math.random()*6)+1;
  computerRoll=Math.floor(Math.random()*6)+1;
  }
//Views
function showPlayerRollResult(){
  playerRollText.innerText="Player Roll:" +playerRoll;
}
function showComputerRollResult(){
  computerRollText.innerText="Computer Roll:" +computerRoll;
}
// Determine Winner
function determineWinner(){
  if (playerRoll> computerRoll) {
gameResultsText.innerText= "Result: You Win!";
playerWins++;
} else if (playerRoll < computerRoll) {
  gameResultsText.innerText = "Result: Computer Wins!";
   computerWins++;
} else {
    gameResultsText.innertext = "Result: It's a tie!";

  }
}

//Update statistics
function updateStats() {
  playerWinsText.innertext = "playerWins:" +playerWins;
  computerWinsText.innertext = "computerWins:" +computerWins;
  drawsText.innertext = "Draws: " +draws;
}




