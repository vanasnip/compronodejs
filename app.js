//Static files and middleware
//Middlware mean code or software that sits between two layers of software
// express provides a way to induce middleware into the mix

var express = require('express');
var path = require('path');
var app = express();
var public = '/public';

//Environment vaiables: global vars specific to the enviro(server) our code is living
//a way for the server to set the enviro var
var port = process.env.PORT || 3000;
app.use('/assets', express.static('public'))

app.use('/',function(req, res, next){
    console.log('Request URL: ' + req.url);
    next();
})


//HTTP Method / VERBS : GET, POST, DELETE
app.get('/', function(req, res){
    res.send('<html><head><link href=../assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>');
});
app.get('/person/:id', function(req, res){
    res.send('<html><head><link href=../assets/style.css type=text/css rel=stylesheet /></head><body><h1>Person : ' + req.params.id + '</h1></body></html>');
});
app.get('/api', function(req, res){
    res.json({
        firstname: 'John',
        lastname: 'Doe'
    });
})

app.listen(port);