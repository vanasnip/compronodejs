//Structuring an app

var express = require('express');
var app = express();

var apiController = require('./controllers/apicontroller');
var htmlController = require('./controllers/htmlcontroller');


var port = process.env.PORT || 3000;

app.use('/assets', express.static('public'))

app.set('view engine', 'ejs');

app.use('/',function(req, res, next){
    console.log('Request URL: ' + req.url);
    next();
})


apiController(app);
htmlController(app);
app.listen(port);