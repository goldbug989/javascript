//arrays
//usual assignment
var names = ['john','mark','jane'];
//different declarations
var years = new Array(1990,1969,1948);
console.log(names[0]);
console.log(names.length);
console.log(names);
//replace data
names[1] = 'ben';
//append to end of array
names[names.length] = 'mary';

console.log(names);
//arrays can hold different data types
var john = ['john','smith',1990, 'teacher',false];
//push method adds to end of array
john.push('blue');
console.log(john);
//pop removes element
console.log (john.pop());
console.log(john);
//shift removes first element
console.log(john.shift());
console.log(john);
//unshift adds to beginning
john.unshift('john');
console.log(john);
// indexof method...returns -1 if value not in array
console.log(john.indexOf('teacher'));
