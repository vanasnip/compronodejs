//Let's build a the node event emitter part1
var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){ 
    // behaving like listener but just function sitting on array;
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function(){
    console.log('A greeting occured!');
});

console.log('hello');
emtr.emit('greet');