const choices = ["rock", "paper", "scissors"];
let userRock = document.querySelector(".user-choices__rock");
let userPaper = document.querySelector(".user-choices__paper");
let userScissors = document.querySelector(".user-choices__scissors");
let inputRounds = document.querySelector(".game-score__input-rounds");

userRock.addEventListener("click", function () {
  gameSetup.userPick(0);
});
userPaper.addEventListener("click", function () {
  gameSetup.userPick(1);
});
userScissors.addEventListener("click", function () {
  gameSetup.userPick(2);
});

// game setup
let gameSetup = {
  userScore: 0,
  userSelect: 0,
  enemyScore: 0,
  enemySelect: 0,
  rounds: 3,
  displayScores: function () {
    console.log(
      `user score: ${this.userScore}, enemy score: ${this.enemyScore}`
    );
  },
  pickRounds: function (pickNum) {
    if (pickNum === undefined || pickNum === 0) {
      this.rounds = 3;
    } else {
      this.rounds = Number(pickNum);
    }
    console.log(this.rounds);
    return this.rounds;
  },
  userPick: function (pick) {
    this.userSelect = choices[pick];
    console.log("user pick:", this.userSelect);
    return this.userSelect;
  },
  enemyPick: function () {
    this.enemySelect = choices[Math.floor(Math.random() * choices.length)];
    console.log("enemy pick:", this.enemySelect);
    return this.enemySelect;
  },
  winner: function () {
    if (this.userScore > this.enemyScore) {
      console.log("You Win!");
    } else if (this.userScore < this.enemyScore) {
      console.log("You Lose!");
    } else {
      console.log(`It's a tie`);
    }
  },
  replayGame: function (answer) {
    if (answer == "yes" || answer == "y") {
      game.playGame();
    } else {
      console.log("Goodbye!");
    }
  },
};

let userPick = document.createElement("p");
userPick.textContent = `User Picked: ${gameSetup.userSelect}`;

// the game
function playGame(rounds) {
  gameSetup.pickRounds(rounds);
  for (i = 0; i < Number(gameSetup.rounds); i++) {
    gameSetup.userPick(prompt("0 for rock, 1 for paper, 2 for scissors"));
    gameSetup.enemyPick();
    if (gameSetup.enemySelect == gameSetup.userSelect) {
      console.log(`It's a tie`);
    } else if (
      (gameSetup.enemySelect == "rock" && gameSetup.userSelect == "scissors") ||
      (gameSetup.enemySelect == "scissors" &&
        gameSetup.userSelect == "paper") ||
      (gameSetup.enemySelect == "paper" && gameSetup.userSelect == "rock")
    ) {
      gameSetup.enemyScore++;
    } else {
      gameSetup.userScore++;
    }
    gameSetup.displayScores();
  }
  gameSetup.winner();
  gameSetup.replayGame(prompt("play again?"));
}
