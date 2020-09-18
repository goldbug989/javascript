//*****************************************************************************
//Bind, Call and apply
//
//*****************************************************************************
//person object here just for practice on fucntion constructor
var Person = function(name,age,job){
  this.name=name;
  this.age=age;
  this.job=job;
}
var john = new Person('john',44,'teacher');

//sally is not a person object
var sally = {
  name:'sally',
  age:26,
  job:'teacher',
  presentation: function (style, timeOfDay){
    if (style === 'formal'){
        console.log('good '+ timeOfDay +
      ', ladies and gentlemen.. my name is '+this.name+
      ' and i am '+this.age + ' years old!');
    }else if (style === 'friendly'){
      console.log('Whazzzup buttercup!'
    + ' have a nice ' + timeOfDay);
    }
  }
};

//emily does not have access to presentation functions
//but sally does
var emily = {
  name:'emily',
  age:22,
  job:'designer'};

sally.presentation('friendly','morning');
//*************************************************
//call method borrows function allows us to set this variable
//**************************************************
//call function first arg is the this variable
sally.presentation.call(emily,'formal','afternoon');


//*****************************************************
//           apply method is similar accepts args as array
//********************************************************
//this example won't work though... function not looking for array
//sally.presentation.apply(['friendly','afternoon']);

//***********************************************************
//        bind method like call..allows us to set this variable
//                does not immediately call the function
//*************************************************************
//   bind allows us to preset args...this is called currying
//*************************************************************
//currying- create a fn based on another fn...with preset args
//************************************************************
var emilyBind = sally.presentation.bind(emily,'friendly');
emilyBind('evening');
//another example --preset args
var sallyBind = sally.presentation.bind(sally,'formal');
sallyBind('twilight');
