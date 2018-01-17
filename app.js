//inheriting from the prototype chain
var EventEmiter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = 'Hello World';
}

util.inherits(Greetr, EventEmiter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log('Someone greeted', data);
})

greeter1.greet('Ivano');