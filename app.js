//APIs and Endpoints
//APIs on the web tend to accept and receive data via urls.
//That url is what we refer to as an endpoint

//Outputting JSON

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){ 
    res.writeHead(200, {'Content-Type': 'application/json'});
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };

    res.end(JSON.stringify(obj));
//Serialize: translating an object into a format that can be store or transfered
    
}).listen(1337, '127.0.0.1');