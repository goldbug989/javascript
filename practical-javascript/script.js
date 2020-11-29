//create a todo list
var todos = ['item1','item2','item3'];

//add an item
function addItem(item){
  todos.push(item);
}

//edit an item
function edit(index,edited){
  todos[index] = edited;
}

//remove an item 
function remove(index){
  if (index < todos.length && index > -1){
    todos.splice(index,1);
  } else{
    console.log('error index not available');
  }
}


//main
addItem('watch the next video');
edit(0,'fernet');
remove(3);
console.log (todos);

