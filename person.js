var greet = require('./greet.js');
var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: greet
};

module.exports = person; //here this entire module is exposing the greet function!