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


//es5....this.position and this.color will be undefined
//       this points to default object..window for functions

//for a work around use a variable assigned to this inside the function
//                          see self variable

//           if the self variable wasn't there and you used this keyword
//                    in its place you would get undefined
//
var box5 = {
  color:'green',
  position: 1,
  clickMe: function(){

    var self = this;
    document.querySelector('.green').addEventListener('click',
    function(){
      var str = 'this is box number ' +
      self.position + ' and it is ' +
      self.color;
      alert(str);
    });
  }
}
//box5.clickMe();

//es6.........arrow functions have use of lexical this keyword
//
const box6 = {
  color:'green',
  position: 1,
  clickMe: function(){

    document.querySelector('.green').addEventListener('click',
      () => {
          var str = 'this is box number ' +
          this.position + ' and it is ' +
          this.color;
          alert(str);
      });

  }
}
box6.clickMe();
