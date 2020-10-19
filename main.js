// global variables
const choice = ["rock", "paper", "scissors"];
const choiceButton = document.querySelectorAll(".choice__button");
const rounds = document.querySelector(".game__round");
const gameText = document.querySelector(".game__text");
const replayButon = document.querySelector(".replay__button");

let userLives = 3;
let enemyLives = 3;
let round = 0;
