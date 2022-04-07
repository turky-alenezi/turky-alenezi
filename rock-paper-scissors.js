let getRandomInt = (num) => {
  return Math.floor(Math.random() * num);
};

let computerPlay = () => {
  let compChoice = getRandomInt(3);
  if (compChoice === 0) {
    return "rock";
  } else if (compChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return true;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return true;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return true;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return false;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return false;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return false;
  } else {
    return "It's a tie!";
  }
};

let game = () => {
  // Initialize variables to play the game and track the score
  let player, computer, round;
  let playerCount = 0,
    compCount = 0;

  const buttons = document.querySelectorAll(".btn");
  const result = document.querySelector("#result");
  const playerScore = document.querySelector("#player-score");
  const compScore = document.querySelector("#computer-score");

  playerScore.textContent = playerCount;
  compScore.textContent = compCount;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      player = btn.textContent.toLowerCase();
      computer = computerPlay().toLowerCase();
      round = playRound(player, computer);

      if (round === true) {
        playerCount++;
        playerScore.textContent = playerCount;
        result.textContent =
          "You won that round, " + player + " beats " + computer;
      } else if (round === false) {
        compCount++;
        compScore.textContent = compCount;
        result.textContent =
          "You lost that round, " + computer + " beats " + player;
      } else {
        result.textContent = "It was a tie...";
      }

      if (playerCount === 5 || compCount === 5) {
        result.textContent = whoWon(playerCount, compCount);

        playerCount = 0;
        compCount = 0;

        playerScore.textContent = playerCount;
        compScore.textContent = compCount;
      }
    });
  });
};

let whoWon = (playerCount, compCount) => {
  if (playerCount > compCount) {
    return (
      "You won the game! The final score was: " +
      playerCount +
      " to " +
      compCount
    );
  } else if (playerCount < compCount) {
    return (
      "You lost the game. The final score was: " +
      playerCount +
      " to " +
      compCount
    );
  } else {
    return (
      "The game was tied. The final score was: " +
      playerCount +
      " to " +
      compCount
    );
  }
};

game();
