let x = [5,10,20,30,40];
//map performs a function on an array
//in this case arrow function
//pass in element and index and return element *2 plus index
x = x.map((el,index)=>el*2+index);
console.log(x);

//strings

let first = 'john';
let last = 'smith';
//date has to be created with new keyword
//default date is this second...
let now = new Date;

console.log(typeof(now));
//several instance methods available once date obj created
let curYear = now.getFullYear();
console.log(curYear);
const birthYear = 1990;

function calcAge(year){
  return curYear - birthYear;
}

//new in es6....use back ticks and ${} for string concat w/vars and blocks
//called template literals
console.log(`${first} ${last} is ${calcAge(birthYear)} years old!`);

//also new string methods
console.log(first.startsWith('j'));
console.log(first.endsWith('j'));
console.log(first.includes('oh'));
console.log(first.includes('john'));
console.log(first.repeat(5));
//use template literal to add space between
console.log(`${first} ${last}\n`.repeat(5));
