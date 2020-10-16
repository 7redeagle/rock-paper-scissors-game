// list the choices and default scores
const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let enemyScore = 0;
let rounds = 0;

// generate enemy selection
function enemyPick() {
  const enemySelect = choices[Math.floor(Math.random() * choices.length)];
  return enemySelect;
}
