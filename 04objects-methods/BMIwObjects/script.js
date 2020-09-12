// create object
var john={
  firstName:'john',
  mass:110,
  height:2,
  bmiCalc:function(){
    return (this.mass/this.height^2);
  }
}
var mark={
  firstName:'mark',
  mass:110,
  height:2,
  bmiCalc:function(){
    return (this.mass/this.height^2);
  }
}
var bmiCompare = function(john,mark){
  //ternary operator example condition?true eval:false eval;
  var winner = (john.bmi > mark.bmi) ? john.firstName:mark.firstName;
  //if equal nobody wins
  if (john.bmi === mark.bmi) winner = 'neither';
  return winner;
}
//calc bmi
john.bmi = john.bmiCalc();
mark.bmi = mark.bmiCalc();
//output object info
console.log('john\'s bmi is ' + john.bmi);
console.log('mark\'s bmi is ' + mark.bmi);
//compare bmi
console.log(bmiCompare(mark,john) + ' has the higher BMI');
