//::Installing express and making it easier to build a web server
var express = require('express');
var app = express();
//Environment vaiables: global vars specific to the enviro(server) our code is living
//a way for the server to set the enviro var
var port = process.env.PORT || 3000;

//HTTP Method / VERBS : GET, POST, DELETE
app.get('/', function(req, res){
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>')
});
app.get('/api', function(req, res){
    res.json({
        firstname: 'John',
        lastname: 'Doe'
    });
})

app.listen(port);