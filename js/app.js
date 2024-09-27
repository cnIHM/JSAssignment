//variables
let button0 =document.getElementById('button0');

//texts
let playerRollText=document.getElementById("playerRollText");
let computerRollText=document.getElementById("computerRollText");
let gameResultsText=document.getElementById("gameResultsText");
let playerWinsText=document.getElementById("playerWinsText");
let computerWinsText=document.getElementById("computerWinsText");
let drawsText=document.getElementById("drawsText");

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
    gameResultsText.innerText = "Result: It's a tie!";
     draws++;

  }
}

//Update statistics
function updateStats() {
  playerWinsText.innerText = "playerWins:" +playerWins;
  computerWinsText.innerText = "computerWins:" +computerWins;
  drawsText.innerText = "Draws: " +draws;
}




