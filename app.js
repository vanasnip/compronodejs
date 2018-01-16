// Export vs Module.exports
// highlighting a quirk in javascript rooted in the nature of passing objects by reference
// essentially the same object

//exports doesnt work for all the patterns we saw before.

var greet = require('./greet');//bad news
var greet2 = require('./greet2');// alternative / solution

// long story short just use modules.exports