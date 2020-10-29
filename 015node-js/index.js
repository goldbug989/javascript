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
    const query = url.parse(req.url, true).query;

    console.log(url.parse(req.url,true));

    if (pathName === '/products' || pathName === '/'){
        res.writeHead(200, {'constent-type':'test/html'});
        res.end('this is products page');

    }else if (pathName === '/laptop'){
        res.writeHead(200, {'constent-type':'test/html'});
        res.end('this is laptop page');
    }

    else {
        res.writeHead(404, {'constent-type':'test/html'});
        res.end('URL not found on server');
    }

    //add header to let the browser know what kind of response is coming
    res.writeHead(200, {'constent-type':'test/html'});
    //after setting header then response,check network tab to see status code
    res.end('this is the response');

    console.log('someone did access the server!');
});

//set up listening port and ip address-ex.uses local host 127.0.0.1
server.listen(1337,'127.0.0.1', () => {
    console.log('server is listening for requests now');
});
