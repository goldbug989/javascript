/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;
scores = [0,0];
roundScore = 0;
activePlayer = 0;
//query selector to select element , selects id =current + player zero or one
//notice textContent method to change text only
//document.querySelector('#current-' + activePlayer).textContent = dice;

//inner HTML to change the HTML needs to be string format
//innerHTML method changes HTML and the text withing the tags
//setter
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


//getter
//use query selector to read text from element (id=score-0) and store it in var x
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

//change display property of dice image
//note use style , then property and value
document.querySelector('.dice').style.display = 'none';
//get element by id example, note can use query here as well
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
//set current score to zero as well
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//event
//this is an anonymous function no name
document.querySelector('.btn-roll').addEventListener('click',function(){

  var diceDOM = document.querySelector('.dice');

  //1.random number
  var dice = (Math.floor(Math.random()*6))+1;

  //2.display result
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  //3. update the round score if rolled number not 1
  if (dice ===1){
    //set round score to zero , lose turn, change active status
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer=1:activePlayer=0;
  } else{
    //update round score, display it in current score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  }
});//end of roll dice listener anonymous function































//*******************************************************************
