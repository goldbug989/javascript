//***************************************************
//          fetch api   using async await
//***************************************************

async function getWeatherAW(woeid){//async function returns promise
  try{
      const result = await fetch
      (`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`);
    //convert readable stream to json data
      const data = await result.json();

      //output to console --first view object and see data then choose what to use
      console.log(data);
      const today = data.consolidated_weather[0];//get today's weather zero index
      console.log(`  ${data.title} ${today.applicable_date}
-----------------------
       Now: ${parseInt(today.the_temp*9/5 +32)}F ${today.weather_state_name}
        LO: ${parseInt(today.min_temp*9/5 +32)}F
        HI: ${parseInt(today.max_temp*9/5 +32)}F
     Humid: ${today.humidity}%
    Sunset: ${data.sun_set.slice(11,16)}`);

      } catch(error){
          alert(error);
      }
}

//pass in houston woeid--see docs for weather api
getWeatherAW(2424766);//async function returns a promise


/* outside of async function use then method 
 then method returns a promise takes 2 args --
 callback function for success and failure case
 here only use success callback   */
getWeatherAW(44418)
  .then(data =>{
    dataLondon = data;
    console.log(dataLondon);
  });

























//     we are doing the function below using async await instead
/*
function getWeather(woeid){
//so we have to use crossorigin.me prefix because metaweather isnt cors enabled
//crossorigin isnt working so i used this prefix
fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
.then(result => {
    console.log(result);
    //result is a readable stream, convert to JSON
    return result.json();
})
.then(data =>{
  console.log(data);
  const today = data.consolidated_weather[0];
  console.log(`  ${data.title} ${today.applicable_date}
-----------------------
   Now: ${parseInt(today.the_temp*9/5 +32)}F ${today.weather_state_name}
    LO: ${parseInt(today.min_temp*9/5 +32)}F
    HI: ${parseInt(today.max_temp*9/5 +32)}F
 Humid: ${today.humidity}%`)


})

.catch(error => {
    console.log(error);
})

};

getWeather(2424766);//houston woeid where on earth id
getWeather(44418);
*/
