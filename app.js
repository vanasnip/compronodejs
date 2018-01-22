//Querystring and post parameters


var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Environment vaiables: global vars specific to the enviro(server) our code is living
//a way for the server to set the enviro var
var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
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
    res.render('person',{ID:req.params.id, Qstr: req.query.qstr})
});

app.post('/person', urlencodedParser, function(req, res){
    res.send('thank you');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res){
    res.send('Thank you for the JSON data!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});
app.get('/api', function(req, res){
    res.json({
        firstname: 'John',
        lastname: 'Doe'
    });
})

app.listen(port);