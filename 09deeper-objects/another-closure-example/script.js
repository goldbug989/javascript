//functions returning functions
// ******************************************************************
//        closure...innter function has access to msg variable and person obj
//********************************************************************
// the interviewClosure function returns and is removed from stack
//but the anonymous function it returned still has access to its variables
//even though the interviewClosure function has been removed from execution stack
//***************************************************************************
//               that is the power of closures
//***************************************************************************
function interviewClosure(person){
  if (person.job==='designer'){
    msg = ' , can you please explain UX design?';
    }
  else if(person.job=='teacher'){
    msg = ' , what subject do you teach?';
  }
  else {
    msg = ' , what do you do?';
  }
  //this anonymous function has access to person object and msg variable
  return function(){
    console.log(person.name + msg);
  }

}
//****************************************************************************
// this is an old example of functions returning functions
//adjusted above to add closure
//****************************************************************************
function interview(job){
  if  (job==='designer'){
    //return anonymous function
    return function(name){
      console.log(name + ' , can you please explain what UX design is?');
    }
  }else if(job==='teacher'){
    return function(name){
      console.log('what subject do you teach, ' +
    name + '?');
    }
  }else return function(name){
    console.log('hello, '+ name + ', what do you do?');
  }
}
//*************************end of interview function*********************


//***********************************************************************
//                   person function constructor
//***********************************************************************

var Person = function(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
};

//***********************end of person function constructor***************

//instantiate person objects
var john = new Person('john',55,'teacher');
var sally = new Person('sally',34,'designer');
var bubba = new Person('bubba',23,'other');

//call interview. store result in a variable..note a function is returned
//the function returned depends on the job passed into the interview function
var func = interview(john.job);
//call function and pass in name..
func(john.name);
//
var func = interview(sally.job);
func(sally.name);
//
var func = interview(bubba.job);
func (bubba.name);

//can also use it like this....interview function returns fn...then pass in name
interview(john.job)(john.name);//evaluated from left to right...so it works

//example using closure   ...inner fucntion has access to msg variable
func2 = interviewClosure(sally);
func2();
//or....call it this way because evaluated left to right, and function
//returns a function
interviewClosure(john)();
