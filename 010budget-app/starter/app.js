//budgetController
// use immediate invoked expression
//
//this module pattern returns an object
// containing functions you want public to use

//budget controller
var budgetController = (function(){


})();

//UI controller
var UIController = (function(){
//stand alone
})();

//global app controller
//interacts with other modules..the other modules are passed in
var controller = (function(budgetCtrl,UICtrl){

  var ctrlAddItem = function(){
    //// TODO:
    //1 get the field input data
    //2 add the item to the budget budgetController
    //3 add the item to the user interface
    //4 calculate the budget
    //5 display the budget on UI
    console.log('callback function works')

  }

  document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);


  document.addEventListener('keypress',function(event){
    //log event object so we can see properties
    console.log(event);
    //notice event.keyCode property 13 for enter
    if (event.keyCode===13 || event.which === 13){
      ctrlAddItem();
    }
  });




})(budgetController,UIController);
