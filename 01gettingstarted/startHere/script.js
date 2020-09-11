console.log('hello world external script');
//string
var firstName='john';
console.log(firstName);
var lastName='smith';
// float or int
var age = 28;
//boolean
var bool = true;
// undefined var
var job;
console.log(firstName,lastName,age,bool,job);
//variable coercion
console.log(firstName+' '+lastName+' '+age);
//variable coercion
var job, isMarried;
job='teacher';
isMarried=false;
console.log(firstName + ' is he married ' + isMarried);

//variable mutation alert
age='twenty eight';
job='driver';
alert(firstName + ' is a '+ age + ' year old '+ job);
//prompt
var lastName = prompt('what is his last name?');
alert(firstName + '\'s last name is now '+ lastName);
//operator
var yearBorn= 2020 - 28;
console.log(firstName + '\'s year born is '+ yearBorn);
//type of
console.log(typeof yearBorn + ' yearBorn type');
