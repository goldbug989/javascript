//closures   ..are about variable access and execution stack
//
//interestingly...the inner function executes and is removed from execution stack
// yet it still has access to the variables
function retirement(retirementAge){
  //notice this is delared outside anonymous fn
  var a = ' number of years until retirement';
  return function(byear){
    var age = 2020-byear;
    console.log(retirementAge-age + a);
  }
}
//retirement returns a function
var retire = retirement(65);
//pass in birthYear
retire(1990);
//alternate..now you can use this for different retirement ages
retirement(65)(1990);

// closure fuction is an inner function --anonymous above--
// it has always access to variables & parameters
// of its outer function
// --even after the outer function
//   has been removed from the execution stack
//
//   --the variables remain in the scope chain
//   --in this case.. retirementAge,a,byear, and age

//the execution context has closed in on the outer variable object
//the outer function is gone from context, but the variables remain
//
//  important! the scope chain remains intact!

//stores retirement functions for different countries
var retirementUS = retirement(66);
var retirementGER = retirement(65);
var retirementICE = retirement(67);
