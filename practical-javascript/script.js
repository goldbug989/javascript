//array of objects
var todos = [
  {todoText:'item 1', completed:false},
  {todoText:'item 2', completed:false},
  {todoText:'item 3', completed:false}
];


var btnTodo = document.querySelector('#display-todos-btn');
var btnToggleAll = document.querySelector('#toggleAll-btn');


//event listeners
btnTodo.addEventListener("click",() =>
{
  displayTodos();
});

btnToggleAll.addEventListener("click",() =>
{
  toggleAll(); 
});


function displayTodos(){
  todos.forEach(element => console.log(element.todoText + ' ' 
                                      + element.completed));
}

function add(initialTodoText){
  //initialTodoText is a string
  var todoObj = {todoText:initialTodoText,completed:false};
  todos.push(todoObj);
  displayTodos();
}

function edit(position,newTodoText){
  //newTodoText is a string
  todos[position].todoText = newTodoText;
  displayTodos();
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

