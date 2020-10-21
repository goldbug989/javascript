import axios from 'axios';


export default class Recipe{
    constructor(id){
        this.id = id;
    }

    async getRecipe() {
        try{
            const res = await axios(`http://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.ingredients = res.data.recipe.ingredients;


        }catch(error){
            console.log(error);
            alert('Something went wrong :(');
        }
    }

    calcTime(){
        //assume we need 15 min for each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng/3);
        this.time = periods * 15;
    }
    calcServings(){
        this.servings = 4;
    }

    parseIngredients(){
        const newIngredients = this.ingredients.map(el => {
            const unitsLong = ['tablespoons','tablespoon','ounces','ounce','teaspoons','teaspoon','cups','pounds'];
            const unitsShort = ['tbsp','tbsp','oz','oz','tsp','tsp','cup','pound'];

            //uniform units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) =>{
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });

            //remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            //parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(' ');
            //returns index of element if element in unitShort array
            const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

            let objIng;
            if (unitIndex > -1) {
                //there is a unit
            }else if (parseInt(arrIng[0], 10)){
                //this is NO unit, but 1st element is a number
                objIng = {
                    count: parseInt(arrIng[0]),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }
            } else if (unitIndex === -1){
                //there is NO unit and NO number
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }

            return objIng;
        });
        this.ingredients = newIngredients;
    }

}