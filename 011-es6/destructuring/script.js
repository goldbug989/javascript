//destructuring
//break down objects into separate variables

//ES5
var john = ['john',34,34];
var first = john[0];
var year = john[1];

//es6
// creates variables to store separate array values
const [name,age] = ['john',26];
console.log(name,age);
//this also works with objects
const obj = {firstname: 'john',
            lastname: 'yan',
            aged: 22};

//destruct object
//variables must match object properties or
const {firstname,lastname,aged} = obj;
console.log(firstname,lastname,aged);

//or ...
const {firstname:a, lastname:b,aged: c} = obj;
console.log(a,b,c);


function calcRetire(year){
  const age2 = new
  Date().getFullYear() - year;
  return [age2, 65-age2];
}

//use destructuring on return array
const [age2, retirement] = calcRetire(1990);
console.log(age2,retirement);
