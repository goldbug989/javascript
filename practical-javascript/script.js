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
var btnToggle = document.querySelector('#toggleTodo-btn');
var addInput = document.querySelector('.new-todo');
var editPositionInput = document.querySelector('#edit-position-input');
var editInput = document.querySelector('#edit-todo');


//event listeners
btnTodo.addEventListener("click",displayTodos);

btnToggleAll.addEventListener("click",toggleAll);

btnAdd.addEventListener("click",add);

btnEdit.addEventListener("click",edit);

function displayTodos(){
  todos.forEach(element => console.log(element.todoText + ' ' 
                                      + element.completed));
}

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


function deleteTodo(position){
  todos.splice(position,1);
  displayTodos();
}

function toggleTodo(position){
 todos[position].completed ? todos[position].completed = false:
                              todos[position].completed = true;
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

