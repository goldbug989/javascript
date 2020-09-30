//es6 spread operator
function addFourAges(a,b,c,d){
  return a+b+c+d;
}
var sum1 = addFourAges(10,20,21,20);
console.log(sum1);

//how to pass array into this function
//ES5
var ages = [10,10,15,25];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//es6
const sum3 = addFourAges(...ages);
console.log(sum3);

const fam1 =['john','jane','mark'];
const fam2 = ['bill','bob','anna'];
const bigFam = [...fam1, ...fam2,'emily'];
console.log(bigFam);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

//h is a node, boxes is a node list
//use spread operator to combine nodes
const all = [h, ...boxes];
//convert to array then forEach method on current 
Array.from(all).forEach(cur => cur.style.color = 'purple');
