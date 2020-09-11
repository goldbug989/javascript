var firstName= 'john';
var age=16;

//example of      and &&      or ||       not !
if (age<13){
  console.log(firstName + ' is a boy');
}
else if((age>12) && (age<20)){
  console.log(firstName + ' is a teenager');
}
else{
  console.log(firstName + ' is a man');
}

//ternary operator
age >= 18? colsole.log(firstName + ' drinks beer')
:console.log(firstName + ' drinks juice');

//another example if age=18 plus then drink = beer
var drink = age >= 18? 'beer' : 'juice';

//switch statement
var job = 'teacher';
switch(job){
  case 'teacher':
  //can have mulitple cases execute same block of code
  case 'instructor':
    console.log(firstName + ' teaches kids to code');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon');
    break
  case 'designer':
    console.log(firstName + ' designs beautiful websites');
    break
  default:
    console.log(firstName + ' does something else');
}

//truthy values evaluate to true, falsy values evaluate to false
//falsy values : undefined, null, 0, '', Nan
//truthy values: not falsy values

//notice 23==='23' evaluates to false
//notice 23=='23' evaluates to true
