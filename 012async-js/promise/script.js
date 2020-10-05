//8888888888888888888888888888888888888888888888888888888888
//              promise is an object
//      that keeps track if an event has happened
//      determines what happents after event
//8888888888888888888888888888888888888888888888888888888888

//     promise states---------------
//            pending  => event happens =>
//            settled/resolved =>
//            fulfilled or rejected

//promise params functions resolve and reject
const getIds = new Promise((resolve, reject) => {//executor fn
    //async code
    setTimeout(() => {
      //call resolve marks promise as success
      resolve([523,883,432,974]);//returns
      //dont need a reject method because timeout will always work

    },1500);//passing in callback fn and 1500ms timeout
});

const getRecipe = recID => {
  return new Promise((resolve,reject) => {
    //async code
     setTimeout((id) => {

        const recipe = {title:'tomato pasta',
        publisher:'john Adams'};
        resolve(`${id}: ${recipe.title}`);
     },1500,recID);
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) =>{
    setTimeout(pub =>{
        const recipe = {title:'italian pizza', publisher:'john Adams'};
        resolve(`${pub}: ${recipe.title}`);

    },1500,publisher);
  });
};

//88888888888888888888888888888888888888888888888888888888888888888888
//88888888888888888888888888888888888888888888888888888888888888888888
//                        consume promises
//88888888888888888888888888888888888888888888888888888888888888888888
//pass in callback fn for when promise fulfilled
getIds
.then(IDs => {//always arg of what returned from fullfilled promise
  console.log(IDs);
  return getRecipe(IDs[2])
})
.then(recipe => {//no callback hell
  console.log(recipe);
  return getRelated('john a');
})
.then(recipe =>{
  console.log(recipe);
})
.catch(error => {//incase of reject you get this
  console.log('error!!!');
});
//8888888888888888888888888888888888888888888888888888888888888888888
