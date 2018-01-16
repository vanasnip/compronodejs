// Module patterns
var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();


var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Changed hello world!";
//note that require caches the resulting object / return val
//we can observe this by stepping through the code in debug mode

// in effect this means that the new keyword in our module is made
//redundant as the cached version give the effect of passed by reference
var greet3b = require('./greet3');
greet3b.greet(); //this should result as 'Hello World' instead
// we get the cached update back 'Changed hello world'

var Greet4 = require('./greet4'); //returns constructor function
var grtr = new Greet4(); //we recieve ability to create greet objects
grtr.greet(); //I'm no longer calling require so each of the Greet objects
//I create will be unique and not affect each other

var greet5 = require('./greet5').greet; // utilising the revealing module pattern
greet5();// hides the contents and only exposes what we 
