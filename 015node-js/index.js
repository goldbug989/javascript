//file system module
const fs = require('fs');
//getting json data , use __dirname template string (home folder) then path
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

const laptopData = JSON.parse(json);
//console.log(laptopData);
console.log(laptopData[0].image);
