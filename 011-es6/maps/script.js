//*****************************
//es6 maps    iterable and use anything as key!!!!
//              easy to remove,add   
//*****************************

//key value pairs , objects are limited to strings for keys
//maps can use many things for the keys

const question = new Map();
//below defines the key value pairs..notice keys of different types
question.set('question', 'what is the capital of NY?');
question.set(1,'albany');
question.set(2,'NYC');
question.set(3,'Brooklyn');
question.set('correct',1);
question.set(true,'Correct Answer');
question.set(false,'Wrong, please try again..');

console.log(question);

//get value from keys
console.log(question.get('question'));
//get size of map
console.log(question.size);

//delete key val pair by key
question.delete(3);
console.log(question);

//check for key
if(question.has(2)){
  question.delete(2);
}
console.log(question);

//question.clear();     //clears out map

//can loop through maps
question.forEach((val,key) =>
  console.log(`this is key: ${key} set to value of:${val}`));


//can use destructuring
for (let [key,val] of question.entries()){
  console.log(`${key} <--key   val--> ${val}`);
}
console.log(question.entries());//MapIterator

question.set(2,'NYC');
question.set(3,'Buffalo');
question.set(4,'Syracuse');
//can use destructuring
for (let [key,val] of question.entries()){
  if (typeof(key) === 'number'){
    console.log(`${key}: answer: ${val}`);
  }
}
let ans = parseInt(prompt(question.get('question')));
//console log true key value if .. ans === correct key value
console.log(question.get(ans ===
question.get('correct')));

//^above code replaces below, because true was used as a key
// if (ans === question.get('correct')){
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

























//eof
