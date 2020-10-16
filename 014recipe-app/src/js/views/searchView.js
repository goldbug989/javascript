import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 19) => {
    const newTitle = [];
    if (title.length > limit) {
        //split returns array with words, then use reducer method 
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);//zero is init val of acc

        //return the result
        return `${newTitle.join(' ')}`;
    }
    return title;
} 

const renderRecipe = recipe => {
    const markup = `
        <li>
        <a class="results__link" href="#${recipe.recipeid}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li> 
    `;
    elements.searchResList.insertAdjacentHTML('beforeend',markup);
};

const createButton = (page, type) => `

    <!--
    <button class="btn-inline results__btn--prev">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-left"></use>
        </svg>
        <span>Page 1</span>
    </button>
    <button class="btn-inline results__btn--next">
        <span>Page 3</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-right"></use>
        </svg>
    </button>
    -->
`;

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    if (page === 1 && pages > 1) {
        //next button only
    }else if (page < pages){
        //both prev and next button
    }else if (page === pages && pages > 1){
        //prev button only
    }
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    const start = (page - 1) * (resPerPage);
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);
};


/*image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
publisher: "101 Cookbooks"
publisher_url: "http://www.101cookbooks.com"
recipe_id: "47746"
social_rank: 100
source_url: "http://www.101cookbooks.
title: "Best Pizza Dough Ever" */