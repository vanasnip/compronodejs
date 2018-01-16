// loading many modules, index style
// node will not be able to find greet.js
// because it doesn't exist, 
// it will then look for a folder with the same name
// within that folder it will look for index.js where 
// we are exposing our english and spanish modules
// in an object via module.exports in the index.js

var greet = require('./greet');

greet.english();
greet.spanish();