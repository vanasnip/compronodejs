//inheriting from the prototype chain

//getting modules from node
var EventEmiter = require('events');
var util = require('util');

//defining a function constuctor
function Greetr(){
    //::::::::::::::::::::::::::::::::::::::::::::::::::::
    EventEmiter.call(this); //Behaves like a superclass incase it wants to add props and methods to our obj
    this.greeting = 'Hello World';
}

//using util from node core to add the method we want
util.inherits(Greetr, EventEmiter);

// adding my own method onto the changed Greetr
Greetr.prototype.greet = function(data){
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

// instantiate a Greetr object
var greeter1 = new Greetr();

// using events from node core
greeter1.on('greet', function(data){
    console.log('Someone greeted', data);
})

greeter1.greet('Ivano');