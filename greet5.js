//The revealing module pattern
// a way to get what we want out of the module and simulataneously
//protect its contents
var greeting = 'Hello World';
function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet
}