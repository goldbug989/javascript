//file system module
const fs = require('fs');

//url module to route responses
const url = require('url');

//http module
const http = require('http');

//getting json data , use __dirname template string (home folder) then path
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

//parse json into array of objects
const laptopData = JSON.parse(json);

//console.log(laptopData);
console.log(laptopData[0].image);


//create server , callback fn has access to request, response
//                callback fn runs each time server is accessed
const server = http.createServer((req, res) => {    
    
    //parse the request into object
    const pathName = url.parse(req.url, true).pathname;
    //id=4 part of url is query
    const query = url.parse(req.url, true).query;
    //query is an object {id:'4'}
    const id = url.parse(req.url, true).query.id;

    //PRODUCTS OVERVIEW
    if (pathName === '/products' || pathName === '/'){
        res.writeHead(200, {'constent-type':'test/html'});

        fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8',(err, data) => {
            let overviewOutput = data;

            fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8',(err, data) => {

                const cardsOutput = laptopData.map(el => replaceTemplate(data,el)).join('');
                overviewOutput = overviewOutput.replace('{%CARDS%}', cardsOutput);

                res.end(overviewOutput);
            });

        });
     

    //LAPTOP DETAIL
    }else if (pathName === '/laptop' && id < laptopData.length) {
        res.writeHead(200, {'constent-type':'test/html'});

        //read html into data var in callback fn
        fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8',(err, data) => {
            const laptop = laptopData[id];
            const output = replaceTemplate(data,laptop);
            res.end(output);
        });
    }

    //URL NOT FOUND
    else {
        res.writeHead(404, {'constent-type':'test/html'});
        res.end('URL not found on server');
    }

});

//set up listening port and ip address-ex.uses local host 127.0.0.1
server.listen(1337,'127.0.0.1', () => {
    console.log('server is listening for requests now');
});

function replaceTemplate(originalHtml, laptop) {
    let output = originalHtml.replace(/{%PRODUCTNAME%}/g,laptop.productName);
    output = output.replace(/{%IMAGE%}/g,laptop.image);
    output = output.replace(/{%PRICE%}/g,laptop.price);
    output = output.replace(/{%SCREEN%}/g,laptop.screen);
    output = output.replace(/{%CPU%}/g,laptop.cpu);
    output = output.replace(/{%STORAGE%}/g,laptop.storage);
    output = output.replace(/{%RAM%}/g,laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/g,laptop.description);
    output = output.replace(/{%DESCRIPTION%}/g,laptop.id);
    return output;
}