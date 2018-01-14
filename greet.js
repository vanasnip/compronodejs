
var greet = function(){
    console.log('Hello', this.firstname, this.lastname);
};

module.exports = greet; //here this entire module is exposing the greet function!

