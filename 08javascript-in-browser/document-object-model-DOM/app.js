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

  //3. update the current round score
  if (dice === 1){
    //set round score to zero , lose turn, change active status
    roundScore = 0;
    //set text in document for current player score to zero
    document.querySelector('#current-' + activePlayer).textContent = 0;

    //switch control to other player
    nextPlayer();
    } else{
    //update round score, display it in current score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;


  }
});//end of roll dice listener anonymous function

//anonymous function listener for hold btn
document.querySelector('.btn-hold').addEventListener('click',function(){
    //add roundscore to activePlayer total
    scores[activePlayer] += roundScore;

    //change active player total score in document
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

    //reset active player round score to zero
    roundScore = 0;

    //set text in document for current player score to zero
    document.querySelector('#current-' + activePlayer).textContent = 0;

    //do we have a winner?
    if (scores[activePlayer] >= 30){
      //change player 1 text to WINNER!
      document.getElementById('name-' + activePlayer).textContent = 'WINNER';

      //disable roll & hold btns
      document.querySelector('.btn-roll').style.display = 'none';
      document.querySelector('.btn-hold').style.display = 'none';
    }
    //change player
    nextPlayer();

});//end of hold btn click listener anon function

document.querySelector('.btn-new').addEventListener('click',function(){
  //reset scores
  scores = [0,0];
  //reset dice
  document.querySelector('.dice').style.display = 'none';
  //set player one active
  activePlayer=0;
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  //reset player scores in document
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  //enable roll & hold btns
  document.querySelector('.btn-roll').style.display = 'block';
  document.querySelector('.btn-hold').style.display = 'block';
  //reset player name textContent
  document.getElementById('name-0').textContent = 'PLAYER 1';
  document.getElementById('name-1').textContent = 'PLAYER 2';
});//end of anonymous function for btn new

function nextPlayer(){
  //change active player
  activePlayer === 0 ? activePlayer=1:activePlayer=0;

  //toggle active class for player panels
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  //note use style , then property and value
  //document.querySelector('.dice').style.display = 'none';
}





























//*******************************************************************
