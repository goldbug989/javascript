//array of objects
var todos = [
  { todoText: 'item 1', completed: false },
  { todoText: 'item 2', completed: false },
  { todoText: 'item 3', completed: false }
];

//store dolcument elements
var btnToggleAll = document.querySelector('#toggleAll-btn');
var btnAdd = document.querySelector('#addTodo-btn');
var addInput = document.querySelector('#new-todo');
var todoListUl = document.getElementById('todo-list-ul');

displayTodos();

//event listeners , more are added in displayTodos function

btnToggleAll.addEventListener("click", toggleAll);

btnAdd.addEventListener("click", add);

//REMOVE LATER, VIEW EVENTS IN CONSOLE
todoListUl.addEventListener("click", (event) => {
  console.log(event.target);
});

/****************************************************************** */

function displayTodos() {
  todos.forEach(element => console.log(element.todoText + ' '
    + element.completed));

  // CLEAR DISPLAY FIRST
  todoListUl.innerHTML = '';

  //CREATE HTML LIST ITEM FOR EACH TODO IN ARRAY
  todos.forEach((curr, index) => {
    todoListUl.innerHTML +=
      `<div id="todo-item"><input type="checkbox"  id = "todo${index}" name="todo"
        ${curr.completed ? 'checked' : ''} >
          <label for="todo" id = "label${index}">${curr.todoText}</label>
          <div id = "button-div">
            <button id="edit${index}">edit</button>
            <button id="remove${index}">remove</button>
          </div>
        </div>`
      ;
  });

  //CREATE EVENT LISTENERS FOR CHECKBOX,REMOVE BTN, AND EDIT BTN
  todos.forEach((curr, index) => {
    document.getElementById(`todo${index}`).addEventListener("click", toggleTodo);
    document.querySelector(`#remove${index}`).addEventListener("click", deleteTodo);
    document.getElementById(`edit${index}`).addEventListener("click", edit);
  });

}

//********************************************************************* */

function add() {
  //get todo text from input box in html document
  var initialTodoText = addInput.value;
  var todoObj = { todoText: initialTodoText, completed: false };
  todos.push(todoObj);
  displayTodos();

  //clear input field
  addInput.value = '';
}

//********************************************************************** */

function edit(event) {
  var position = event.target.id.slice(4);
  var newTodoText = window.prompt();

  if (newTodoText !==null && newTodoText !== ''){
    //newTodoText is a string
    todos[position].todoText = newTodoText;
  }

  displayTodos();
}

//*********************************************************************** */

function deleteTodo(event) {
  //event.target.id is a string ->remove0 index is the zero
  var index = event.target.id.slice(6);
  console.log(index);
  todos.splice(index, 1);

  var item = event.target.parentNode;
  item.innerHTML = '';

  displayTodos();
}

//********************************************************************** */

function toggleTodo(event) {
  //GET INDEX FROM TARGET ID STRING EXAMPLE ->TODO2
  var index = event.target.id.slice(4);
  console.log(index);
  //TOGGLE TODO ARRAY ON INDEX
  todos[index].completed ? todos[index].completed = false :
    todos[index].completed = true;
  displayTodos();
}

//*********************************************************************** */

function toggleAll() {
  var allCompleted = true;

  //loop through todos to see if all completed
  todos.forEach((el) => {
    if (el.completed === false)
      allCompleted = false;
  });

  //if all completed toggle todos to false
  if (allCompleted) {
    todos.forEach((el) => el.completed = false);

    //else if any not completed toggle todos to true
  } else {
    todos.forEach((el) => el.completed = true);
  }

  displayTodos();

}

