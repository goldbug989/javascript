//arrays
//in ES6


//this returns a node list in es5
const boxes =
document.querySelectorAll('.box');

//in es5 covert to array using slice and call
//then you can use array method forEach
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
  cur.style.backgroundColor = 'dodgerblue';
});


//ES6
//from gives you an array from nodelist
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'limegreen');

//break and continue in es5
for (var i =0;i < boxes.length; i++){

    if(boxesArr5[i].className === 'box blue'){
      continue;
    }

    boxesArr5[i].textContent = 'I changed to blue';

}
