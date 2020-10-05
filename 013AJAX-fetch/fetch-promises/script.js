
//*******************************************
//use fetch api to get data!!!
//*******************************************
//
//pass in url for api
//cors doesnt allow us to use this domain


function getWeather(woeid){
//so we have to use crossorigin.me prefix because metaweather isnt cors enabled
//crossorigin isnt working so i used this prefix
fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
.then(result => {
    console.log(result);
    return result.json();
})
.then(data =>{
  console.log(data);
  const today = data.consolidated_weather[0];
  console.log(`    --${data.title}--
    ${today.applicable_date}
    ${today.weather_state_name}
    LO: ${parseInt(today.min_temp*9/5 +32)}F
    HI: ${parseInt(today.max_temp*9/5 +32)}F `)

})

.catch(error => {
    console.log(error);
})

};

getWeather(2424766);//houston woeid where on earth id
getWeather(44418);

//fetch api gets data and returns a promise --return data, or error
//              so we use then      and catch to consume promise
