// Create variable for the game state

let player1Score = 0;
let player2Score = 0;
let play1Turn = true;

// create variable to store references to the necessary DON nodes
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const message = document.getElementById("message");
const Hold = document.getElementById("Hold");
const player1ScoreBoard = document.getElementById("player1ScoreBoard");
const player2ScoreBoard = document.getElementById("player2ScoreBoard");
const rollbtn = document.getElementById("rollbtn");
const resetbtn = document.getElementById("resetbtn");

// now it's time to use event listener to the roll dice button and log out a random
// between 1 - 6
// we use math. floor and math. random function

rollbtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (play1Turn) {
    player1Score += randomNumber;
    player1ScoreBoard.textContent = player1Score;
    player1Dice.textContent = randomNumber;
  } else {
    player2Score += randomNumber;
    player2ScoreBoard.textContent = player2Score;
    player2Dice.textContent = randomNumber;
  }

  // check if a plyer has won

  function showDisplau() {
    rollbtn.style.display = "none";
    resetbtn.style.display = "block";
  }

  if (player1Score >= 30) {
    message.textContent = "Player 1 has WON!";
    showDisplau();
  } else if (player2Score >= 30) {
    message.textContent = "Player 2 has WON!";
    showDisplau();
    // check if the player dice = 1 reset the score to 0
  } else if (randomNumber === 1) {
    if (play1Turn) {
      player1Score = 0;
      player1ScoreBoard.textContent = player1Score;
      player1Dice.textContent = randomNumber;
      player1Dice.classList.remove("active");
      player2Dice.classList.add("active");
      message.textContent = "Player 2 Turn";
    } else {
      player2Score = 0;
      player2ScoreBoard.textContent = player2Score;
      player2Dice.textContent = randomNumber;
      player2Dice.classList.remove("active");
      player1Dice.classList.add("active");
      message.textContent = "Player 1 Turn";
    }

    play1Turn = !play1Turn;
  }
});

// when a player click on hold will save the score and change the turn

Hold.addEventListener("click", function () {
  if (play1Turn) {
    message.textContent = "Player 2 Turn";
  } else{
    message.textContent = "Player 1 Turn";
  }
  play1Turn = !play1Turn;
});

resetbtn.addEventListener("click", function () {
  reset();
});

// reset all valuse

function reset() {
  message.textContent = "Player 1 Turn";
  player1ScoreBoard.textContent = 0;
  player2ScoreBoard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  player1Score = 0;
  player2Score = 0;
  rollbtn.style.display = "block";
  resetbtn.style.display = "none";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  play1Turn = true;
}
