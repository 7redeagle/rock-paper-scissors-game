Console Only Setup
1. There should be an array containing the rock, paper and scissors
2. There should be a place to store the user score, enemy score, and the number of rounds. There should be  default round if the user doesn't choose.
3. There should be a function to display the scores and the rounds played
4. There should be a function for the user to pick choice
5. There should be a function to generate the computer's choice
6. There should be a function for the user to pick the number of rounds
7. There should be a function to calculate who wins or loses
  * create a loop for each round
  * if the enemyChoice and the userChoice are the same: no score added
  * if the enemy wins then increment the enemyScore by one
  * else the user wins then increment the userScore by one
  * display the scores
8. After game ends, replay option: if yes, start the game over else end the game with a "Goodbye."




HTML DOM Manipulation
1. There should be a way to link the buttons with their respective array
  * so the let rock-button = choices[0]
  * paper-button = choices[1]
  * scissor-button = choices[2]
2. There should be a way to input the number of rounds and link that value to the rounds variable
  * input type=number or text with so rounds.valueAsNumber
  * if no value is inputted set the round = 3;
3. There should be a way to change the score when either the user or the enemy wins
  * remove the 0 and add number 1 then increment
4. When the buttons are clicked, the linked array item should trigger the userChoice function
  * click starts the game function
5. There should be a way to display the enemy choice
  * the default image should be rock
  * div with a set width and height and img or svg
  * after the user choice, the enemy choice will appear
  * remove the default if it doesn't match the enemyPick and replace the image with the enemy pick so if enemyPick != rock remove image. Else if the enemy pick == paper, else enemy pick = scissor, append image.
6. There should be the text "You win" or "You lose" or "A tie" that appears after the game is over
7. The replay button should link to the replay array
