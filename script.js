let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let winPercent = 0;
let gamesPlayed = 0;

let playerScoreText = document.getElementById("player-score");
let computerScoreText = document.getElementById("computer-score");
let tieScoreText = document.getElementById("tie-score");
let gamesPlayedText = document.getElementById("games-played");
let winPercentText = document.getElementById("win-percent");
let buttons = document.querySelectorAll("div.game > button");
let results

buttons.forEach((button) => {
  button.addEventListener("click", playGame);
});

function playGame() {
  let playerSelection = this.id;
  let computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  gamesPlayed++;

  if (result === "You win!") {
    playerScore++;
  } else if (result === "Computer wins!") {
    computerScore++;
  } else {
    tieScore++;
  }

  updateScore();
  calcWinPercent();
  displayResult(result);
}

function calcWinPercent() {
  if (gamesPlayed === 0) {
    winPercent = 0;
  } else {
    winPercent = playerScore / gamesPlayed;
  }
    return winPercent;
}

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * options.length);
  let previousResult = document.querySelector("#game p");
  if (previousResult) {
    previousResult.remove();
  }
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function displayResult(result) {
  let gameDiv = document.getElementById("game");
  let resultText = document.createElement("p"); // THIS IS WHERE I NEED TO FIX MY PROGRAM AND ADD A P LINE
  resultText.textContent = result;
  gameDiv.appendChild(resultText);
}

function updateScore() {
  calcWinPercent();
  let roundedWinPercent = Math.round(winPercent * 100);
  playerScoreText.textContent = `Player: ${playerScore}`;
  computerScoreText.textContent = `Computer: ${computerScore}`;
  tieScoreText.textContent = `Tie: ${tieScore}`;
  gamesPlayedText.textContent = `Games Played: ${gamesPlayed}`;
  winPercentText.textContent = `Win Percentage: ${roundedWinPercent}%`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  gamesPlayed = 0;
  winPercent = 0;
  updateScore();
}

resetbutton.addEventListener("click", resetGame);