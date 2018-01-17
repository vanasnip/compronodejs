// this .call / apply the object created doesnt just inherit what is on the prototype
// we use it to add all the props and methods attached  so called class
var util = require('util');

function Person(){
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function(){
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman(){
    Person.call(this);
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officeA = new Policeman();
officeA.greet();