//NOTE: MAGIC STRING -- a string that has some special meaning in
//our code. relying on strings to dynamically access properties for instance
// is problematic because this is subject to typos and a probably
// won't be flagged as an error and if it does the IDE cannot tell us that
// is doesnt recognise a property;



var Emitter = require('events');

//solving the MAGIC STRINGS issue...
var eventConfig = require('./config').events;
//Everywhere where i had greet I replace with eventsConfig.GREET

var emtr = new Emitter();

//the on method too a string and a listener
emtr.on(eventConfig.GREET, function(){ 
    // behaving like listener but just function sitting on array;
    console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function(){
    console.log('A greeting occured!');
});

console.log('hello');
//the emit method just took a string
emtr.emit(eventConfig.GREET);



