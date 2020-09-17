//immediately invoked fucntion expressions
//    IIFE


//to keep score hidden from global create a function
function game(){
  var score = Math.random()*10;
  console.log(score>=5);
}
game();



//you can instead just use an IIFE
//just write an anonymous function inside of parens
//since it is in parens js will treat it as an expressions
// emmet shortcut    iife <tab>
//without the parens js would be looking for a fn name
//the goal is data privacy using non reusable code 
(function() {
  var score = Math.random()*10;
  console.log(score>=5);
}());
//score is not in global context
//console.log(score);

//iife can accept args..put them in parens at end of function
(function(lucky) {
  var score = Math.random()*10;
  console.log(score>=5-lucky);
}(5));
