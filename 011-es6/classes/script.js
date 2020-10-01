//**********************************************
//Classes
//**********************************************
//make it easier to use inherit than fn prototypes

//es5
var Person5 = function(first,last,byear){
  this.first=first;
  this.last=last;
  this.byear = byear;
}
Person5.prototype.calcAge =
function(){
  var age = new Date().getFullYear() - this.byear;
  console.log(age);
}
var john5 = new Person5('john','smith',1990);
john5.calcAge();

//ES6
//*************************************************
class Person6{
  constructor (first,last,byear){

    this.first=first;
    this.last=last;
    this.byear=byear;
  }

  calcAge(){

    var age = new Date().getFullYear() -
    this.byear;
    console.log(age);
  }

  static greeting(){// can only call from Person6 .not instance
    console.log('hey there i am not inherited by person6 instance');
  }


}

let sally = new Person6('sally','struthers',1970);
Person6.greeting();
sally.calcAge();
