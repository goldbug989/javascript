//tip calculator using arrays, loops, objects

//object john key value pairs , propertys and methods
var john = {
  name : 'john',
  bills : [124,48,268,180,42],
  tips : [],
  totals : [],
  //object method
  calcTip:function(){
    //calculate tip based on bill amount
    //iterate over bills array
    for (var i=0; i < this.bills.length; i++){
      //bill<50 calc tip at 20 percent add tip to tip array, total to total array
      if (this.bills[i] < 50){
        this.tips[i] = this.bills[i] * .2;
        this.totals[i] = this.bills[i] + this.tips[i];
        continue;
      }
      //bill>=50 bill <200 calc tip at 15 percent
      if (this.bills[i] < 200){
        this.tips[i] = this.bills[i] * .15;
        this.totals[i] = this.bills[i] + this.tips[i];
        continue;
      }
      //bill 200 and up calc tip at 10 percent
      else {
        this.tips[i] = this.bills[i] * .1;
        this.totals[i] = this.bills[i] + this.tips[i];
      }
    }
  }
}
function avg(tips){
  var total = 0;
  for (var i = 0; i < tips.length; i++){
    //get tip amount for each bill and add to total
    total += john.tips[i];
  }
  //return avg tip amount
  return total/tips.length;
}

john.calcTip();
console.log('john\'s bill amounts ' + john.bills);
console.log('john\'s tip amounts ' + john.tips);
console.log('john\'s total amount paid with tips ' +john.totals);
console.log('the avg tip amount is '+avg(john.tips));
