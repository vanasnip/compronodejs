//Let's build a web server in Node

var http = require('http');

http.createServer(function(req, res){ 
    //turns out to be an event listener
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');