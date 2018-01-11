//Let's build a module
require('./greet.js'); // in effect we are importing greet.js or by convension we'd refer to it as the greet module

//greet(); // cant call greet from here by design,
// code from one module cannot contaminate code in another module
//still to come....there is a way to explicitly give app.js access to greet()
// see greet.js line 6

//...
var greet = require('./greet.js');//exported methods and properties from greet module will be available for use

greet();