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

loadGame();
updateStats();


//Processes
button0.addEventListener('click',function() {
 getRandomNumberOneToSixForPlayer();
 showPlayerRollResult ();
 showComputerRollResult();
 determineWinner();
 updateStats();
 saveAsCookie ();

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

//COOKIE
function saveAsCookie (){
document.cookie = "playerWins=" + playerWins + "; expires=Thu, 18 Dec 2025 12:00:00 UTC";
document.cookie="computerWins=" + computerWins + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
document.cookie= "draws=" + draws + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
  }

function loadGame () {
  playerWins= getCookie ("playerWins");
  computerWins= getCookie ("computerWins");
  draws= getCookie ("draws");


  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return 0;   } }






