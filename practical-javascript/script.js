//array of objects
var todos = [
  {todoText:'item 1', completed:false},
  {todoText:'item 2', completed:false},
  {todoText:'item 3', completed:false}
];

toggleAll();

displayTodos();

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
  todos.forEach((cur,index) => toggleTodo(index));
}

