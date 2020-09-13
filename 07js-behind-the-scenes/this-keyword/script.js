//*********************************************************
//                this keyword - default is window object
//          this is only given a value when funtion is called
//*********************************************************



//console.log(this);   //output is window

calculateAge(1985);

function calculateAge(birthYear){
  console.log(2020-birthYear);
  //this points to global object ...window
  //because function is in the global context
  console.log('global context ..function this keyword:')
  console.log(this);
}

var john = {
  name: 'john',
  birthYear: 1990,
  calculateAge: function(){
    //this points to john object
    console.log('object method this keyword:')
    console.log(this);

    // function innerFunction(){
    //   //this is not a method!!!...therefore it points to default global
    //              default global object is window...
    //   console.log('inner function this:')
    //   console.log(this);
    // }
    // innerFunction();
  }
};
john.calculateAge();

var mike = {
  name:'mike',
  birthYear: 1984
};
//can copy methods to different objects
mike.calculateAge = john.calculateAge;
mike.calculateAge();
