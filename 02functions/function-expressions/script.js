//function statements and expressions

//function declaration do not have to have a return
//Function whatDoYouDo(job,firstname){}

//function expression return immediate result
var whatDoYouDo = function(job, firstName){
  switch(job){
    case 'teacher':
      return firstName + ' teaches kids to code';
    case 'driver':
      return firstName + '  drives uber in Lisbon';
    case 'designer' :
      return firstName + ' designs websites';
    default:
      return firstName + ' is a '+ job;
  }
}

//call Function
console.log(whatDoYouDo('teacher','john'));
console.log(whatDoYouDo('driver','mary'));
console.log(whatDoYouDo('designer','phil'));
console.log(whatDoYouDo('butcher','bert'));
