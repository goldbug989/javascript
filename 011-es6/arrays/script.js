//arrays
//in ES6


//this returns a node list in es5
const boxes =
document.querySelectorAll('.box');

//in es5 covert to array using slice and call
//then you can use array method forEach

 var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur){
//   cur.style.backgroundColor = 'dodgerblue';
// });


//ES6
//from gives you an array from nodelist

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//break and continue in es5
for (var i =0;i < boxes.length; i++){

    if(boxesArr5[i].className === 'box blue'){
      continue;
    }

    boxesArr5[i].textContent = 'I changed to blue';
}

//es6 new loop ,called forof, allows for break, continue
for (const cur of boxesArr6){
  if (cur.className.includes('blue')){
    continue;
  }
  cur.textContent = 'i changed to dodgerblue';
  console.log(cur);
}


//es6 array methods

//es5
var ages = [12,17,8,21,14,11];

var full = ages.map(function(cur){
  return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
//find method, find index of method
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find( cur => cur >= 18));






















//EOF
