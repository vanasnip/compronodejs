//Templates and template engines


var express = require('express');
var app = express();
var public = '/public';

//Environment vaiables: global vars specific to the enviro(server) our code is living
//a way for the server to set the enviro var
var port = process.env.PORT || 3000;
app.use('/assets', express.static('public'))

app.set('view engine', 'ejs');

app.use('/',function(req, res, next){
    console.log('Request URL: ' + req.url);
    next();
})

app.get('/', function(req, res){
    res.render('index');
})

app.get('/person/:id', function(req, res){
    res.render('person',{ID:req.params.id})
});
app.get('/api', function(req, res){
    res.json({
        firstname: 'John',
        lastname: 'Doe'
    });
})

app.listen(port);