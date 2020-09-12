//javascript object and properties
//object literal
var john = {
  firstName : 'john',
  lastName : 'smith',
  birthYear: 1990,
  family: ['jane','mark','bob','emily'],
  job:'teacher',
  isMarried: false
};
console.log(john);
//use dot notation to access properties
console.log(john.family);
//alternate way to access properties with brackets
var x = 'birthYear';
//could use console.log(john['birthYear']);
console.log(john[x]);
//mutate
john.job = 'designer';
john['isMarried'] = true;
console.log(john);
//new object syntax new keyword
var jane = new Object();
jane.firstName= 'jane';
jane.birhtYear = 1969;
jane['lastName'] = 'smith';
console.log(jane);
