//passing functions
var years = [1990,1965,1937,2005,1998];

//function accepts function as argument
//performs that function on array ...which is also passed
//returns array called result
function arrayCalc(arr, fn){
  var result =[];
  //iterate through array and perform function on it
  for(var i=0;i<arr.length;i++){
    //push to result array
    result.push(fn(arr[i]));
  }
  return result;
}
//the function to be passed as param
//accepts element
function calcAge(el){
  return 2020-el;
}

function isFullAge(el){
  return el>=18;
}

function maxHeartRate(el){
  if (el >=18 && el <=81){
    return Math.round(206.9 - (.87*el));
  }else{
    return -1;
  }
}

//call arrayCalc passing calcAge as function
//notice you don't put parens on fn unless you want immediate call
var ages = arrayCalc(years,calcAge);
var fullAges = arrayCalc(ages,isFullAge);
var maxRates = arrayCalc(ages,maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(maxRates);
