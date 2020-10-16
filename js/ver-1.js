// list the choices and default scores
const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let userSelect = 0;
let enemyScore = 0;
let enemySelect = 0;
let rounds = 3;

// round selection
function roundsPick(pickNum) {
  rounds = Number(pickNum);
  console.log(roundsPick);
}

// generate enemy selection
function enemyPick() {
  enemySelect = choices[Math.floor(Math.random() * choices.length)];
  console.log("enemy pick:", enemySelect);
  return enemySelect;
}

// user selection
function userPick(pick) {
  userSelect = choices[pick];
  console.log("user pick:", userSelect);
  return userSelect;
}

// display scores
function displayScores() {
  console.log(`user score: ${userScore}, enemy score: ${enemyScore}`);
}

// display who is the winner
function winner() {
  if (userScore > enemyScore) {
    console.log("You Win!");
  } else if (userScore < enemyScore) {
    console.log("You Lose!");
  } else {
    console.log(`It's a tie`);
  }
}

// play again?
function replayGame(answer) {
  if (answer == "yes") {
    playGame();
  } else {
    console.log("Goodbye!");
  }
}

// the actual game
function playGame() {
  roundsPick(prompt("How many rounds?"));
  enemyScore = 0;
  userScore = 0;

  for (i = 0; i < Number(rounds); i++) {
    userPick(prompt("0 for rock, 1 for paper, 2 for scissors"));
    enemyPick();
    if (enemySelect == userSelect) {
      console.log(`It's a tie`);
    } else if (
      (enemySelect == "rock" && userSelect == "scissors") ||
      (enemySelect == "scissors" && userSelect == "paper") ||
      (enemySelect == "paper" && userSelect == "rock")
    ) {
      enemyScore++;
    } else {
      userScore++;
    }
    displayScores();
  }
  winner();
  replayGame(prompt("play again?"));
}
