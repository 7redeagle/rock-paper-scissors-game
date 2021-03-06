// global variables
const choices = ["Rock", "Paper", "Scissors"];
const choiceButton = document.querySelectorAll(".choice__button");
const rounds = document.querySelector(".game__round");
const gameText = document.querySelector(".game__text");
const replayButton = document.querySelector(".replay__button");

let userLives = 3;
let enemyLives = 3;
let round = 0;

// increment round by one after each choice
countRounds = () => {
  round += 1;
  rounds.innerText = `Round: ${round}`;
  return round;
};

// enemy choice: get random choice, set question icon to hidden, and set visible for the chosen choice
enemyChoice = () => {
  const enemyPick = choices[Math.floor(Math.random() * choices.length)];
  const enemyIcon = document.querySelector(".game__enemy-icon");

  enemyIcon.classList.remove("icon__question");
  enemyIcon.getElementsByClassName("question")[0].style.cssText =
    "visibility: hidden";
  if (enemyPick == "Rock") {
    enemyIcon.getElementsByClassName("rock")[0].style.cssText =
      "visibility: visible";
    enemyIcon.getElementsByClassName("paper")[0].style.cssText =
      "visibility: hidden";
    enemyIcon.getElementsByClassName("scissors")[0].style.cssText =
      "visibility: hidden";
  } else if (enemyPick == "Paper") {
    enemyIcon.getElementsByClassName("paper")[0].style.cssText =
      "visibility: visible";
    enemyIcon.getElementsByClassName("rock")[0].style.cssText =
      "visibility: hidden";
    enemyIcon.getElementsByClassName("scissors")[0].style.cssText =
      "visibility: hidden";
  } else if (enemyPick == "Scissors") {
    enemyIcon.getElementsByClassName("scissors")[0].style.cssText =
      "visibility: visible;";
    enemyIcon.getElementsByClassName("paper")[0].style.cssText =
      "visibility: hidden";
    enemyIcon.getElementsByClassName("rock")[0].style.cssText =
      "visibility: hidden";
  }
  return enemyPick;
};

// decrement user or enemy lives based on losing choice
countLives = (userPick, enemyPick) => {
  const gameResults = document.querySelector(".game__results");
  if (userPick === enemyPick) {
    gameText.innerText = `Two ${userPick} It's a tie! So everyone gets to live a little longer. Again!`;
  } else if (
    (enemyPick === "Rock" && userPick === "Scissors") ||
    (enemyPick === "Scissors" && userPick === "Paper") ||
    (enemyPick === "Paper" && userPick === "Rock")
  ) {
    gameText.innerText = `You lost this round! ${enemyPick} beats ${userPick}. Better luck next time.`;
    userLives -= 1;
  } else {
    gameText.innerText = `Good job! Your ${userPick} crushed the machines's ${enemyPick}. Keep it up!`;
    enemyLives -= 1;
  }
  const gameLives = document.querySelector(".game__lives");
  gameLives.innerText = `Your Lives: ${userLives} | Enemy Lives: ${enemyLives}`;
  return [userLives, enemyLives];
};

// when either userLives or enemyLives are 0, disable the buttons, create game text, and set replay button to visible
endGame = (userHealth, enemyHealth) => {
  if (userHealth === 0 || enemyHealth === 0) {
    choiceButton.forEach((button) => {
      button.setAttribute("disabled", "");
      button.classList.add("button--disabled");
    });
  }

  const gameEndText = document.querySelector(".game-end__text");
  if (enemyLives === 0) {
    gameText.innerText =
      "Splendid! You have proven your superiority over the machine.";
    gameEndText.innerText = "You win! 😃";
    gameEndText.style.color = "#28df99";
    replayButton.style.visibility = "visible";
  } else if (userLives === 0) {
    gameText.innerText = "Well...time to serve your machine overlord.";
    gameEndText.innerText = "You lost! 🤖 Try again.";
    gameEndText.style.color = "#ec0101";
    replayButton.style.visibility = "visible";
  }
};

// replay button: click reloads window
replayGame = () => {
  replayButton.onclick = () => {
    window.location.reload();
  };
};

// auto scroll to bottom when game ends 
scrollAuto = () => {
  if (userLives === 0 || enemyLives === 0) {
    window.scrollTo(0, document.body.scrollHeight) 
  };
};

// play game
playGame = () => {
  let userPick;
  choiceButton.forEach((choice) => {
    choice.addEventListener("click", () => {
      const choiceIcon = document.querySelectorAll(".choice__icon");
      if (choice.classList.contains("choice__rock")) {
        userPick = "Rock";
      } else if (choice.classList.contains("choice__paper")) {
        userPick = "Paper";
      } else {
        userPick = "Scissors";
      }
      countRounds();
      countLives(userPick, enemyChoice());
      endGame(userLives, enemyLives);
      replayGame();
      scrollAuto();
    });
  });
};

playGame();
