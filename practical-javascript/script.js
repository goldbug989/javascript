var todos = ['item1','item2','item3'];

function displayTodos(){
  console.log('my todos: ' , todos);
}

function addTodo(todo){
  todos.push(todo);
  displayTodos();
}

function changeTodo(position,newValue){
  todos[position] = newValue;
  displayTodos();
}

function deleteTodo(position){
  todos.splice(position,1);
  displayTodos();
}
