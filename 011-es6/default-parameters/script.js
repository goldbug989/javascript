//default parameters

function SmithPerson(first,year,last,nation){

//es5 way of setting default parameters
  last === undefined ? last = 'smith' : last;
  nation === undefined ? nation = 'US' : nation;

  this.first=first;
  this.last=last;
  this.year=year;
  this.nation=nation;
}

//this works..even without default ..last and nation will be undefined
var john = new SmithPerson('john',1990);
console.log(john);


//es6 default parameters
function JonesPerson(first,year,last = 'jones',nation = 'US'){
  this.first=first;
  this.last=last;
  this.year=year;
  this.nation=nation;
}

var bill = new JonesPerson ('bill',1950);
console.log(bill);
