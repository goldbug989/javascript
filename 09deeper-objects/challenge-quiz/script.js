//quiz prompts user for answer and displays results in the console
//
//use function expression to contain privacy of variables

//this function expression allows you to plug in this script
//        to another program without clashing variables
//        they are all contained within this function expression
(function(){

//function constructor for question object
function Question(question, answerArr, correctAnswer){
  this.question = question;
  this.answerArr = answerArr;
  this.correctAnswer = correctAnswer;
}
Question.prototype.displayQuestion = function(){
  console.log(this.question);

  for (var i=0; i < this.answerArr.length; i++){
    console.log(this.answerArr[i]);
  }
}
Question.prototype.checkChoice = function(choice){
  //check choice vs correct answer and display results in console
  if(choice.toUpperCase() === this.correctAnswer){
    console.log('you are correct Sir or Madam!');
  } else {
    console.log('you are incorrect!, please refresh page and try again...');
  }
}
//create question objects
var quest1 = new Question('what is the capital of Texas?',
  ['A. Houston', 'B. San Antonio', 'C.Austin', 'D. Dallas'],'C');

var quest2 = new Question('what is the capital of New York?',
  ['A. New York','B. Albany','C. Syracuse','D. Buffalo'],'B');

var quest3 = new Question('what is the capital of California?',
  ['A. Los Angeles', 'B. San Francisco', 'C. Anaheim', 'D. Sacramento'],'D');

var quest4 = new Question('what is the capital of Florida?',
  ['A. Jacksonville','B. Miami', 'C. Tallahassee', 'D. Tampa Bay'],'C');

//place question objects in array
var questArr = [quest1,quest2,quest3,quest4];

//this question is a randomly selected question from array
var randomQuestion = (questArr[Math.floor(Math.random()*questArr.length)]);

//call prototype function
randomQuestion.displayQuestion();
var choice = prompt('please enter your choice...');

//call check prototype function
randomQuestion.checkChoice(choice);
})();
