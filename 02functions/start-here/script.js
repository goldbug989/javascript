//functions
function calculateAge(birthYear){
  return 2020 - birthYear;
}
function yearsToRetire(birthYear,name){
  var age = calculateAge(birthYear);
  var retirement = 65 - age;
  if (retirement > 0){
    console.log(name + ' can retire in ' + retirement +' years at the age of 65');
  }
  else {
    console.log(name + ' is already of age to retire');
  }
}
//console.log(calculateAge(1972));
yearsToRetire(1972,'david');
yearsToRetire(2010,'max');
yearsToRetire(1946,'john');
