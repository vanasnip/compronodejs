//Using nodemon means the server refreshes after any changes to the js
var http = require('http');
  var fs = require('fs');
  

http.createServer(function(req, res){
    console.log(res.url);
    if(req.url === '/'){
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    } 
    else if (req.url === '/json'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        fs.createReadStream(__dirname + '/nourl.htm').pipe(res);
    }
      
  }).listen(1337, '127.0.0.1');