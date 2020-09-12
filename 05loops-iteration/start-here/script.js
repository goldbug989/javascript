//loops and iteration

//for loops
//for init value; condition before each loop; counter update {}
for (var i=0;i<10;i++){
  console.log(i);
}

//declare array
var john = ['john','smith',1990,'designer',false];

//for loop iterate over array by 0 to length-1
for (var i=0; i < john.length; i++){
  console.log(john[i]);
  console.log(typeof john[i]);
}

//iterate from last to first
for (var i = (john.length-1); i > -1; i--){
  console.log(john[i] + '    reverse!!!    ');
}

//while loop
var i = 0;
while (i < john.length){
  console.log(john[i]);
  i++;
}

//continue and break(break out of loop)
//if non string don't print to console
for (var i=0; i < john.length; i++){
  if (typeof john[i]!== 'string') continue;
  console.log(john[i]);
}

//break example break loop when encounter number
for (var i=0; i < john.length; i++){
  if (typeof john[i] === 'number') break;
  console.log(john[i]);
}

// //object literal
var john = {
  firstName : 'john',
  lastName : 'smith',
  birthYear: 1990,
  family: ['jane','mark','bob','emily'],
  job:'teacher',
  isMarried: false
};
