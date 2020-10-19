## Console Game

1. There should be an array containing the rock, paper and scissors

2. There should be a place to store the user score, enemy score, and the number of rounds. There should be  default round if the user doesn't choose.

3. There should be a function to display the scores and the rounds played

4. There should be a function for the user to pick choice

5. There should be a function to generate the computer's choice

6. There should be a function for the user to pick the number of rounds

7. There should be a function to calculate who wins or loses

8. create a loop for each round
  1. if the enemyChoice and the userChoice are the same: no score added
  2. if the enemy wins then increment the enemyScore by one
  3. else the user wins then increment the userScore by one
  4. display the scores
   
9. After game ends, replay option: if yes, start the game over else end the game with a "Goodbye."

10. Put this in an object called gameSetup


---

## HTML DOM Game

1. There should be a way to link the buttons with their respective array
 1. so the let rock-button = choices[0]
 2. paper-button = choices[1]
 3. scissor-button = choices[2]

2. There should be a way to input the number of rounds and link that value to the rounds variable
  1. input type=number or text with so rounds.valueAsNumber
  2. if no value is inputted set the round = 3;

3. There should be a way to change the score when either the user or the enemy wins
  1. remove the 0 and add number 1 then increment

4. When the buttons are clicked, the linked array item should trigger the userChoice function
  1. click starts the game function

5. There should be a way to display the enemy choice
  1. the default image should be rock
  2. div with a set width and height and img or svg
  3. after the user choice, the enemy choice will appear
  4. remove the default if it doesn't match the enemyPick and replace the image with the enemy pick so if enemyPick != rock remove image. Else if the enemy pick == paper, else enemy pick = scissor, append image.

6. There should be the text "You win" or "You lose" or "A tie" that appears after the game is over
7. The replay button should link to the replay array

---

### Button SVG

1. Use input checkbox
2. Default is unchecked: the image box is inside a container box with a shadow.
3. When checked, set the choices[value]
4. When checked and hover, no shadow and slow transition into background color for that choice.
5. Return to uncheck state after each round. Make uncheck function. Outside of loop but in the function.
  function uncheck() { document.getElementById("myChoice").checked=false;
  }
6. Add alt to the images.

---

## Enemy Choice

1. Default image is question mark inside a lighter colored container.
2. The choice changes the background.
 
---

## Edit
1. Get rid of the zero for the scores in the HTML
2. Append the score use span.textContent = userScore.
3. For the rounds, delete from html and use prompt instead. Get value from prompt.
4. Display the currentRound with span. It should be let currentRound = i. Put this at the end of loop outside if statement.
