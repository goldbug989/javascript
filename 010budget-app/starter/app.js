//budgetController
// use immediate invoked expression
//
//this module pattern returns an object
// containing functions you want public to use

//budget controller
var budgetController = (function(){
  //function constructors ..
  var Expense = function(id,desc,value){
    this.id = id;
    this.desc = desc;
    this.value = value;
  };

  var Income = function(id,desc,value){
    this.id = id;
    this.desc = desc;
    this.value = value;
  };

//it is best to keep all the data in one structure
  var data = {
    //object consisting of expenses array and incomes array
    allItems:{
      exp:[],
      inc:[]
    },
    //object containing totals
    totals: {
      exp:0,
      inc:0
    }
}
  //return an object containing public method
  //allowing other modules to add a new item to data structure
  return{
    //public method
    addItem: function(type, des, val){
      //create newItem object and ID for array index
      var newItem, ID;

      if (data.allItems[type].length > 0){
        //get id of last item in data structure and increment
        ID = data.allItems[type][data.allItems[type].length-1].id + 1;
      } else {
        ID = 0;
      }

      //create new item based on 'inc' or 'exp' type
      if (type==='exp'){
        newItem = new Expense (ID,des,val);

      }else if(type==='inc'){
        newItem = new Income(ID,des,val);
      }

      //push it into data structure
      data.allItems[type].push(newItem);

      //return new element
      return newItem;


    },

    testing: function(){
      console.log(data);
    }

  };
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



//GLOBAL APP CONTROLLER
//interacts with other modules..the other modules are passed in
var controller = (function(budgetCtrl,UICtrl){

  var dom = UIController.getDOMstrings();

  var setupEventListeners = function(){
    //user can click add__btn or press enter to add item to budget
      document.querySelector(dom.inputBtn).addEventListener('click',ctrlAddItem);

      document.addEventListener('keypress',function(event){
        //notice event.keyCode property 13 for enter key
        if (event.keyCode===13 || event.which === 13){
          ctrlAddItem();
        }
      });
  };


  var ctrlAddItem = function(){
    var input, newItem;

    //// TODO:
    //1 get the field input data
    var input = UIController.getinput();
    console.log(input);
    //2 add the item to the budget budgetController
    newItem = budgetCtrl.addItem(input.type,input.desc,input.value);
    //3 add the item to the user interface
    //4 calculate the budget
    //5 display the budget on UI

  }

  return {//when app starts ...do all this
    init: function(){
      setupEventListeners();
    }
  };

})(budgetController,UIController);

//when app starts
controller.init();
