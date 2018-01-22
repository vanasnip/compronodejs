//Outputting HTML

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){ 
    //turns out to be an event listener
    res.writeHead(200, {'Content-Type': 'text/html'});//mime type for html content.
    //mime type is for the same of the browser. node and the browser are two different programs that are coded to follow a protocol.ç
    var html = fs.readFileSync(__dirname + '/index.htm');
    res.end(html);// the javascript is turned into machine code but the html file we pass in isnt. 
}).listen(1337, '127.0.0.1');