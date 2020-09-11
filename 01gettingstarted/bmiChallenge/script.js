//get info for person 1
var name1 = prompt('name of person 1');
var height1 = prompt('height of person 1 in meters');
var mass1= prompt('mass of person 1 in kg');
var bmi1 = mass1 / (height1*height1);
//get info for person 2
var name2 = prompt('name of person 2');
var height2 = prompt('height of person 2 in meters');
var mass2= prompt('mass of person 2 in kg');
var bmi2 = mass2 / (height2*height2);
//compare and output
console.log(name1 + ' has a bmi of ' + bmi1);
console.log(name2 + ' has a bmi of ' + bmi2);
//boolean logic
var oneIsGreater = bmi1 > bmi2;
var isSame = (bmi1 === bmi2);

if(isSame){
  console.log('their bmi is the same!');
}else if(oneIsGreater){
  console.log(name1 + ' has the greater bmi');
}else {
  console.log(name2 + ' has the greater bmi');
}
