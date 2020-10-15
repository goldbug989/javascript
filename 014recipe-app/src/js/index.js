import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/**global state of the app
 * -search object
 * -current recipe object
 * -shopping list object
 * -liked recipes
 */
const state = {};


const controlSearch = async() => {
    //get query from view
    const query = searchView.getInput(); //todo

    if (query){
        //2 new search object and add to state
        state.search = new Search(query);

        //3 prepare ui for results

        //4 search for recipes
        await state.search.getResults();

        //5 render results on UI
        console.log(state.search.result);
 

    }


}


elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();
});



