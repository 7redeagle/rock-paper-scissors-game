1. Global Variables 
  * const choices = ['rock', 'paper', 'scissors']
  * userLives = 3
  * enemyLive = 3
  * round = 0

2. DOM Variables 
  * choices-button
  * rounds 
  * who won text 
  * replay button 

3. function to count rounds 
  * round++; 
  * rounds.innerText = `Round: ${round}`;
  * return the round;

4. function for enemy pick
  * enemyPick = choices[Math.floor(Math.random() * choices.length)]
  * enemy-display: enemy choice icon 
  * display enemy choices 
    * enemy remove the question mark 
    * if enemy selects rock then add the rock icon with red color style 
    * else if enemy selects paper then add the paper icon with purple color style 
    * else if enemy selects scissors then add the scissors icon with green color style
    * return the enemychoice 

5. 
  
