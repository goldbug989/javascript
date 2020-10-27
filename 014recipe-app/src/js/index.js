import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';


/**global state of the app
 * -search object
 * -current recipe object
 * -shopping list object
 * -liked recipes
 */
const state = {};
window.state = state;

/**
 *  SEARCH CONTROLLER
 */
const controlSearch = async() => {
    //get query from view
    const query = searchView.getInput(); 

    if (query){
        //2 new search object and add to state
        state.search = new Search(query);

        //3 prepare ui for results
        searchView.clearInput();
        searchView.clearResults();
        //pass in parent to display loader
        renderLoader(elements.searchRes);
        
        try{
            //4 search for recipes
            await state.search.getResults();

            //5 render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        }catch(err){
            alert('search gone wrong!');
            clearLoader();

        }

    }
}


elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();
});



elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto,10);
        searchView.clearResults();
        searchView.renderResults(state.search.result,goToPage);
        console.log(goToPage);
    }
});

/**
 * RECIPE CONTROLLER
 */

const controlRecipe = async () => {
    //get id from url and remove hash symbol
    const id = window.location.hash.replace('#','');

    if(id) {
        //prepare ui for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //highlight selected recipe
        if (state.search) searchView.highlightSelected(id);

        //create new recipe object
        state.recipe = new Recipe(id);

        //get recipe data
        try{
            //get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            //calc servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
 
            //render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe,
                state.likes.isLiked(id)
            );

        }catch(err){
            alert('Error processing recipe :(');
        }
        }

};



// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load',controlRecipe);
//                   replace above code with this!
['hashchange','load'].forEach(event => window.addEventListener(event, controlRecipe));



/**
 * LIST CONTROLLER
 */
const controlLIst = () => {
    //create a new list if there is none yet
    if(!state.list) state.list = new List();

    //add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}


//handle delete and update list item events
elements.shopping.addEventListener('click',e =>{
    const id = e.target.closest('.shopping__item').dataset.itemid;

    //handle delete 
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        //delete from the state
        state.list.deleteItem(id);

        //delete from UI
        listView.deleteItem(id);

        //handle count update
    }else if (e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id,val);
    }

});

/**
 * LIKES CONTROLLER
 */
//TESTING
state.likes = new Likes();


const controlLike = () => {
    if (!state.likes) state.likes = new Likes();
        const currentID = state.recipe.id;

    //user has not liked current recipe
    if (!state.likes.isLiked(currentID)){
        //add like to state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );
        //toggle the like button
        likesView.toggleLikeBtn(true);
        //add like to UI list
        console.log (state.likes);

    //user has not liked current recipe
    }else {
        //remove like from state
        state.likes.deleteLike(currentID);
        //toggle the like button
        likesView.toggleLikeBtn(false);
        //remove like from UI list
        console.log(state.likes);
 
    }
};




//handling recipe button clicks
//event delegation ..use recipe element because it exists on load, buttons do not
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease , .btn-decrease *')) {
        //decrease button is clicked
        if (state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if (e.target.matches('.btn-increase , .btn-increase *')) {
        //increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    }else if (e.target.matches('.recipe__btn-add, .recipe__btn-add *')){
        //add to shopping list button
        controlLIst();
    }else if (e.target.matches('.recipe__love, .recipe__love *')){
        //like controller
        controlLike();
    }

});


window.l = new List();
