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
  var DOMstrings = {
    inputType: '.add__type',
    inputDesc:  '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };
//anything that needs to be shared will be returned as a function
  return{
    getinput: function(){
      return {
        type : document.querySelector(DOMstrings.inputType).value,//will be 'inc' or 'exp'
        desc : document.querySelector(DOMstrings.inputDesc).value,
        value : document.querySelector(DOMstrings.inputValue).value
      };

    },//also return getDOMstrings function
    getDOMstrings: function(){
      return DOMstrings;
    }
  };

})();



//global app controller
//interacts with other modules..the other modules are passed in
var controller = (function(budgetCtrl,UICtrl){

  var dom = UIController.getDOMstrings();

  var ctrlAddItem = function(){
    //// TODO:
    //1 get the field input data
    var input = UIController.getinput();
    console.log(input);
    //2 add the item to the budget budgetController
    //3 add the item to the user interface
    //4 calculate the budget
    //5 display the budget on UI

  }
//user can click add__btn or press enter to add item to budget
  document.querySelector(dom.inputBtn).addEventListener('click',ctrlAddItem);

  document.addEventListener('keypress',function(event){

    //notice event.keyCode property 13 for enter
    if (event.keyCode===13 || event.which === 13){
      ctrlAddItem();
    }
  });




})(budgetController,UIController);
