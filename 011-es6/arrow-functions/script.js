//arrow functions

const years = [1972,1960,1990,1985,1937];

//map method pass in array and callback function
//es5 store results in array
var ages5 = years.map(function(el){
  return 2016-el;
});
//default is today's date object
let now = new Date();

//es6---remember--map has access to curr,el,array
//left of arrow is args
let ages6 = years.map(el=>now.getFullYear()-el);
console.log(ages6);

//combine with template literals from es6
ages6 = years.map((el,index) => `age element ${index+1}: ${now.getFullYear()-el}.`);
console.log(ages6);
