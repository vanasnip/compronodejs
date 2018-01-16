//in this patter we are sending back the ability to create greeter
// we are sending back the constructor function.
function Greeter(){
    this.greeting = 'Hello World';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Greeter; 