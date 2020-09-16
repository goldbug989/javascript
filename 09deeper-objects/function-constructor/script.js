//object literal
// var john = {
//   name: 'john',
//   birthYear: 1990,
//   job: 'teacher'
// };


//function constructor   Person capitalized similar to Class but it is a function
var Person = function(name, birthYear, job){
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}
//add inherited fn to prototype property
Person.prototype.calcAge =
  function(){
    console.log(2020-this.birthYear);
}
Person.prototype.last = 'smith';

//instantiation ...new keyword means new empty object created
//then person function calls function constructor on that new object
var john = new Person('john',1990,'teacher');
//these instances will have the calcAge function available to them
var jane = new Person('jane',1969,'designer');
var mark = new Person('mark',1948,'retired');
//test out inheritance on caclulate age method!!!
john.calcAge();
jane.calcAge();
mark.calcAge();
//log inherited lastname
console.log(john.last);
console.log(jane.last);
console.log(mark.last);
