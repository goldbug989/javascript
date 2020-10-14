import axios from 'axios';

async function getResults(query){
    const res = await axios(`http://forkify-api.herokuapp.com/api/search?q=${query}`);
    console.log(res);

}

getResults('pizza');