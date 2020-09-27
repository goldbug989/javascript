let x = [5,10,20,30,40];
//map performs a function on an array
//in this case arrow function
//pass in element and index and return element *2 plus index
x = x.map((el,index)=>el*2+index);
console.log(x);
