var years = [1990,1965,1937,2005,1998];

//accepts array and function...performs fn
//      on every element of array
//          returns array
function arrayCalc(arr,fn){
  var arrRes=[];
  for (var i = 0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calcAge(el){
  return 2020-el;
}

function isFullAge(limit,el){
  return el >= limit;
}
//pass  in a function as arg
//store result in an array
var ages = arrayCalc(years,calcAge);
console.log(ages);

//notice arrayCalc accepts array and a function
//isFullAge function requires 2 variables
//so we can bind the age limit variable to the
//isFullAge function--creating a new fn
//remember bind first var is the This variable
//bind 18 to the limit  and store in a function
var legalAge = isFullAge.bind(this,18);
//call arrayCalc on ages array and newly binded fn
//store result in an array
var legals = arrayCalc(ages,legalAge);
console.log(legals);

//oneStep----var legals = arrayCalc(ages,isFullAge.bind(this,18));
