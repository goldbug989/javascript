//*********************************************************************
//             scoping chain goes up
//*********************************************************************

//*********************************************************************
//          execution stack order in which function is called
//*********************************************************************
//         scope chain is order in which functions are written in code
//                   where they are lexically
//**********************************************************************

//children functions have access to their parents variables
//children look for variable local, then in next parent up the chain,
//then next parent up the chain and so on...
//parent functions do not have access to children variables
//the scope chain only goes up!!!

//global execution only has access to a
var a = 'hello!';
first();

//function first context scope has access to b and a
function first(){
  var b = 'hi!';
  second();

//function context second has access to c and b and a
//notice second function is inside the first function!!
//which is in turn inside the global context
  function second(){
    var c = 'hey!';
    console.log(a+b+c);
  }
}
