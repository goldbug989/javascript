//array of objects
var todos = [
  {todoText:'item 1', completed:false},
  {todoText:'item 2', completed:false},
  {todoText:'item 3', completed:false}
];

//store dolcument elements
var btnTodo = document.querySelector('#display-todos-btn');
var btnToggleAll = document.querySelector('#toggleAll-btn');
var btnAdd = document.querySelector('#addTodo-btn');
var btnEdit = document.querySelector('#editTodo-btn');
var btnRemove = document.querySelector('#removeTodo-btn');
var addInput = document.querySelector('#new-todo');
var btnToggle = document.querySelector('#toggleTodo-btn');
var editPositionInput = document.querySelector('#edit-position-input');
var editInput = document.querySelector('#edit-todo');
var deletePositionInput = document.querySelector('#delete-position-input');
var togglePositionInput = document.querySelector('#toggle-position-input');
var todoListUl = document.getElementById('todo-list-ul');


todos.forEach((curr, index)=> {
  var element = document.createElement("li");

  var textNode = document.createTextNode(todos[index].todoText);
  
  element.appendChild(textNode);
  console.log(element);
  todoListUl.appendChild(element);
});






//event listeners
btnTodo.addEventListener("click",displayTodos);

btnToggleAll.addEventListener("click",toggleAll);

btnAdd.addEventListener("click",add);

btnEdit.addEventListener("click",edit);

btnRemove.addEventListener("click",deleteTodo);

btnToggle.addEventListener("click",toggleTodo);

function displayTodos(){
  todos.forEach(element => console.log(element.todoText + ' ' 
                                      + element.completed));
}


//TODO --ADD THIS TO DISPLAY TODOS FN
function add(){
  //get todo text from input box in html document
  var initialTodoText = addInput.value;
  var todoObj = {todoText:initialTodoText,completed:false};
  todos.push(todoObj);
  displayTodos();

  //clear input field
  addInput.value = '';
}

function edit(){
  var position = editPositionInput.value;
  var newTodoText = editInput.value;

  //newTodoText is a string
  todos[position].todoText = newTodoText;

  displayTodos();

  //clear input fields
  editPositionInput.value = '';
  editInput.value = '';
}


function deleteTodo(){
  todos.splice(deletePositionInput.value,1);

  deletePositionInput.value = '';
}

function toggleTodo(){
 var position = togglePositionInput.value;
 todos[position].completed ? todos[position].completed = false:
                              todos[position].completed = true;
 togglePositionInput.value = '';
}

function toggleAll(){
  var allCompleted = true;

  //loop through todos to see if all completed
  todos.forEach((el) => {
    if (el.completed === false)
      allCompleted = false;
  });

  //if all completed toggle todos to false
  if (allCompleted){
    todos.forEach((el) => el.completed = false);

  //else if any not completed toggle todos to true
  }else{
    todos.forEach((el) => el.completed = true);
  }

}

