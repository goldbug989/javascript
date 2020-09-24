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

  var calculateTotal = function(type){
    var sum = 0;
    data.allItems[type].forEach(function(current){
      sum += current.value;
    });

    data.totals[type] = sum;

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
    },
    budget:0,
    percentage:-1
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

    calculateBudget: function(){

        //1 calculate total income and expenses
        calculateTotal('exp');
        calculateTotal('inc');
        //2 calculate budget: income - expenses
        data.budget = data.totals.inc - data.totals.exp;
        //3 calculate the percentage of income that we spent
        if (data.totals.inc > 0){
          data.percentage = Math.round((data.totals.exp / data.totals.inc)*100);
        } else {
          data.percentage = -1;
        }
    },

    getBudget: function(){
        return {
          budget: data.budget,
          totalIncome: data.totals.inc,
          totalExpenses: data.totals.exp,
          percentage: data.percentage
        };

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
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
  };
//anything that needs to be shared will be returned as a function
  return{
    getinput: function(){
      return {
        type : document.querySelector(DOMstrings.inputType).value,//will be 'inc' or 'exp'
        desc : document.querySelector(DOMstrings.inputDesc).value,
        value : parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };
    },

    addListItem: function(obj, type){
        var html, newHtml, element;

        //create html string with placeholder text
        if (type === 'inc'){
          element = DOMstrings.incomeContainer;
          html ='<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp'){
          element = DOMstrings.expensesContainer;
          html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

        //replace placeholder text with actual data
        newHtml = html.replace('%id%',obj.id);
        newHtml = newHtml.replace('%description%',obj.desc);
        newHtml = newHtml.replace('%value%',obj.value);

        //insert the html into the dom
        document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
    },

    clearFields: function(){
      var fields, fieldsArr;
      //importantly ..below returns a list
      fields = document.querySelectorAll(DOMstrings.inputDesc + ', ' +
      DOMstrings.inputValue);
      //uses array slice mehtod on fields list---call(this)
      fieldsArr = Array.prototype.slice.call(fields);
      //now we can loop over array//foreach allows access to 3 args below
      fieldsArr.forEach(function(current ,index, array){
          current.value = "";
      });
      fieldsArr[0].focus();

    },

    //also return getDOMstrings function
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

  var updateBudget = function(){

    //1 calculate budget
    budgetCtrl.calculateBudget();
    //2 return the budget
    var budget = budgetCtrl.getBudget();
    //3 display the budget on the UI
    console.log(budget);
  }

  var ctrlAddItem = function(){
    var input, newItem;

    //// TODO:
    //1 get the field input data
    var input = UIController.getinput();
    console.log(input);
    //check input valid...
    if (input.desc !== "" && !isNaN(input.value) && input.value > 0)
      {
      //2 add the item to the budget budgetController
      newItem = budgetCtrl.addItem(input.type,input.desc,input.value);
      //3 add the item to the user interface
      UIController.addListItem(newItem,input.type);
      //4 clear the fields
      UIController.clearFields();
      //5 calculate and update the budget
      updateBudget();
      }

  }

  return {//when app starts ...do all this
    init: function(){
      setupEventListeners();
    }
  };

})(budgetController,UIController);

//when app starts
controller.init();
