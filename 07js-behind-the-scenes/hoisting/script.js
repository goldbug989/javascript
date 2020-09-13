//javascript hoisting
//hoisting works on functions and variables
//********************************************************
//you can use this function before its declared         **
//this is called hoisting                               **
//********************************************************
calcAge(1990);

//function declaration
function calcAge(year){
  console.log(2020-year);
}

//function expression
var retirement = function(year){
  console.log(65-(2020-year));
}
//you cannot call this function before the expression
//it is not hoisted
retirement(1990);



//*********************************
//            variables
//*********************************
console.log(age);
//this will show up as undefined
//js will be aware of it, just undefined
//if variable is not declared ...then you will get an ReferenceError
//this var will be in global context
var age=23;

function foo(){
  //variable in foo function context of execution stack
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
