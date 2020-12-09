//array of objects
var todos = [
  {todoText:'item 1', completed:false},
  {todoText:'item 2', completed:false},
  {todoText:'item 3', completed:false}
];

//store dolcument elements
var btnToggleAll = document.querySelector('#toggleAll-btn');
var btnAdd = document.querySelector('#addTodo-btn');
var btnEdit = document.querySelector('#editTodo-btn');
var addInput = document.querySelector('#new-todo');
var btnToggle = document.querySelector('#toggleTodo-btn');
var editPositionInput = document.querySelector('#edit-position-input');
var editInput = document.querySelector('#edit-todo');
var deletePositionInput = document.querySelector('#delete-position-input');
var togglePositionInput = document.querySelector('#toggle-position-input');
var todoListUl = document.getElementById('todo-list-ul');


displayTodos();


//event listeners

btnToggleAll.addEventListener("click",toggleAll);

btnAdd.addEventListener("click",add);

btnEdit.addEventListener("click",edit);

todoListUl.addEventListener("click",(event) =>{
  console.log(event.target);
  // if(event.target===document.querySelector('#remove0')){
  //   deleteTodo(0);}

});



function displayTodos(){
  todos.forEach(element => console.log(element.todoText + ' ' 
                                      + element.completed));

  // CLEAR DISPLAY FIRST
  todoListUl.innerHTML = '';
  
  //CREATE HTML LIST ITEM FOR EACH TODO IN ARRAY
  todos.forEach((curr,index)=> {
   todoListUl.innerHTML += `<div id="todo-item"><input type="checkbox"  id = "todo${index}" name="todo"
    ${curr.completed ? 'checked':''} >
    <label for="todo">${curr.todoText}</label>  <button id="remove${index}">remove</button></div>`;
  });  
  
  //CREATE EVENT LISTENERS FOR INPUTS AND REMOVE BTN
   todos.forEach((curr,index)=>{
   document.getElementById(`todo${index}`).addEventListener("click",toggleTodo);
   document.querySelector(`#remove${index}`).addEventListener("click",deleteTodo);
  });

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



function deleteTodo(event){
  //event.target.id is a string ->remove0 index is the zero
  var index = event.target.id.slice(5);
  todos.splice(index,1);

  var item = event.target.parentNode;
  item.innerHTML = '';

  displayTodos();

}


function toggleTodo(event){
    //GET INDEX FROM TARGET ID STRING EXAMPLE ->TODO2
    var index = event.target.id.slice(4);
    console.log (index);
    //TOGGLE TODO ARRAY ON INDEX
    todos[index].completed ? todos[index].completed = false:
                               todos[index].completed = true;
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

//******************************************************* */

  displayTodos();

}

