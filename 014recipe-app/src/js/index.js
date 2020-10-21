import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';


/**global state of the app
 * -search object
 * -current recipe object
 * -shopping list object
 * -liked recipes
 */
const state = {};

/**
 *  SEARCH CONTROLLER
 */
const controlSearch = async() => {
    //get query from view
    //const query = searchView.getInput(); 
    const query = 'pizza';
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

//TESTING   
window.addEventListener('load', e =>{
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
    console.log(id);

    if(id) {
        //prepare ui for changes

        //create new recipe object
        state.recipe = new Recipe(id);

        //TESTING
        window.r = state.recipe;
        

        //get recipe data
        try{
            await state.recipe.getRecipe();

            //calc servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
 

            //render recipe
            console.log(state.recipe);
        }catch(err){
            alert('Error processing recipe :(');
        }
        }

};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load',controlRecipe);
//                   replace above code with this!
['hashchange','load'].forEach(event => window.addEventListener(event, controlRecipe));