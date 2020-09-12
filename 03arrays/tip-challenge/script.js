//tip calculator
//20% if bill <50
//15% if bill 50<x<200
//10% if bill is over 200

//2 arrays   one with the tips, one w/final amount
function calculateTip(bill){
  if (bill < 50){
    return bill * .2;}
  if (bill < 200){
    return bill * .15;}
  else return bill * .1;
}
//bills are 124.48.268
var bills = [48,124,268];
//create tip array
var tips = [];
//calculate tips and push to array
tips.push(calculateTip(bills[0]));
tips.push(calculateTip(bills[1]));
tips.push(calculateTip(bills[2]));
//update bill array to add tip to bills
bills[0] += tips[0];
bills[1] += tips[1];
bills[2] += tips[2];
//display tip arrray and bill arrays
console.log('tip array          ' + tips);
console.log('total bill array   ' +bills);
