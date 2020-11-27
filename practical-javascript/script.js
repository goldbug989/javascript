//create a todo list
var todos = ['item1','item2','item3'];

//add an item
todos.push('item4');
console.log(todos);

//edit an item
todos[1] = 'item two edited';

//remove an item 
todos.splice(0,1);

//log items
console.log (todos);
