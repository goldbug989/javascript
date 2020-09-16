//object create method Object.create
//define object that will act as the prototype

//previous--function constructor   new object inherits from prototype property

//difference using object.create builds object that
//inherits directly from the one that passed into first argument
//see bottom var jane for example of this

//function constructor--prev folder-- is more popular

var personProto = {
  caclAge(){
    console.log(2020-birthYear);
  }
}

var john = Object.create(personProto);
//create instance old way
john.name ='john';
john.birthYear =1990;
john.job = 'teacher';
//create instance using object.create
var jane = Object.create(personProto,{
  name:{value:'jane'},
  birthYear:{value:1969},
  job:{value:'designer'}
});
