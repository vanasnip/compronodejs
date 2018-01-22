//Streams and performance
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){ 
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
   // streams are about reading data a chunck at a time
    // we can send to the any writable stream
    
}).listen(1337, '127.0.0.1');