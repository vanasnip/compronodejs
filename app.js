//Files and fs
//buffers and callbacks
var fs = require('fs');//node core

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// __dirname is a param in the c++ wrapper that I have access to
//.readFileSync is node telling us that this is a synchronous operation
//can be useful for required config file for instance.
console.log(greet);


//in many cases we dont want this the be a synchronous operation
//to make it async we use .readFile, it takes the same params as ..Sync + a callback
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
function(err, data){ // error first callbacks node concept
    console.log('Async: ',data);
});

//proof that its Async 
console.log('Done!');

//always lean to the async option!

//We still have a problem in the we are using a buffer and
//it just sits in memory in something called the heap in V8, node sticks it there. 

//this is why we need streams..






