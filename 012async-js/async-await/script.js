//***********************************************
//           async await
//***********************************************
//       for consuming promises
//***********************************************



//***********************************************
//              promises
//***********************************************
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

//*************************************************************
//          consume promises w async await
//*************************************************************
//async function runs in background, returns a promise, can have multiple awaits
//*************************************************************
async function getRecipesAW(){//returns promises
    //consume promise
    const Ids = await getIds;//getids is a promise --await stops code until promise fullfilled
    console.log(Ids);//Ids is the resolved value of the promise
    //consume another promise--this one returns a callback so you pass in recipe id
    const recipe = await getRecipe(Ids[2]);
    console.log (recipe);
    //consume another promise--this one you also pass in variable publisher
    const related = await getRelated ('jonas schmedtmann');
    console.log(recipe);

    return related;//returns promise with resolved value
}
//async function always returns a promise
const rec = getRecipesAW()
//.then allows promise to fulfil. use callback function(arrow) with resolved result arg
.then(result => console.log(`${result} is the best ever!`));


// // previous way of consuming below
//
//
// //pass in callback fn for when promise fulfilled
// getIds
// .then(IDs => {//always arg of what returned from fullfilled promise
//   console.log(IDs);
//   return getRecipe(IDs[2])
// })
// .then(recipe => {//no callback hell
//   console.log(recipe);
//   return getRelated('john a');
// })
// .then(recipe =>{
//   console.log(recipe);
// })
// .catch(error => {//incase of reject you get this
//   console.log('error!!!');
// });
//
//
//
//
//
























//eof
