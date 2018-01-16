// Requiring Native Core Modules
var util = require('util'); // no dot slash, if its a native node method it just runs

var name = 'Ivano';
var greeting = util.format('Hello, %s', name);
util.log(greeting);
