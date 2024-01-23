let totalScore = { computerScore: 0, PlayerScore: 0 };

function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
}

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
}
getResult();

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const playerScoreDiv = document.getElementById("player-score");
  const handsDiv = document.getElementById("hands");
  const resultDiv = document.getElementById("result");

  if (score == -1) {
    resultDiv.innerText = "You Lose!";
  } else if (score == 0) {
    resultDiv.innerText = "It's a tie!";
  } else {
    resultDiv.innerText = "You Won!";
  }

  handsDiv.innerText = `👦 ${playerChoice} vs 🤖 ${computerChoice}`;
  playerScoreDiv.innerText = `Your Score is: ${totalScore["PlayerScore"]}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScore["PlayerScore"] += score;
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });
  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScore);
}

function endGame(totalScore) {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;

  const playerScoreDiv = document.getElementById("player-score");
  const handsDiv = document.getElementById("hands");
  const resultDiv = document.getElementById("result");

  playerScoreDiv.innerText = "";
  handsDiv.innerText = "";
  resultDiv.innerText = "";
}

playGame();
