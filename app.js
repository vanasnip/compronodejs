//Let's build a the node event emitter part2
//Because property names are the same as the node core
//we just need to delete our emitter and we are going to use nodes'

var Emitter = require('events');//<< node events file.

var emtr = new Emitter();

//the on method too a string and a listener
emtr.on('greet', function(){ 
    // behaving like listener but just function sitting on array;
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function(){
    console.log('A greeting occured!');
});

console.log('hello');
//the emit method just took a string
emtr.emit('greet');


