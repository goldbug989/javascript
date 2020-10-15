import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};

const renderRecipe = recipe => {
    const markup = `
        <li>
        <a class="results__link" href="#${recipe.recipeid}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li> 
    `;
    elements.searchResList.insertAdjacentHTML('beforeend',markup);
};

export const renderResults = (recipes) => {
    console.log(recipes);
    recipes.forEach(renderRecipe);
};


/*image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
publisher: "101 Cookbooks"
publisher_url: "http://www.101cookbooks.com"
recipe_id: "47746"
social_rank: 100
source_url: "http://www.101cookbooks.
title: "Best Pizza Dough Ever" */