//objects and methods
var john = {
  firstName : 'john',
  lastName : 'smith',
  birthYear: 1990,
  family: ['jane','mark','bob','emily'],
  job:'teacher',
  isMarried: false,
  //method can accept 0 or more params
  calcAge:function(){
    //uses this keyword to add property to john object
    this.age =  2020-this.birthYear;
  }
};
john.calcAge();
console.log(john);
