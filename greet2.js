// it is possible on the other hand to mutate exports, adding properties and methods
exports.greet = function(){
    console.log('Hello');
}
// then we are sitting pretty..

console.log(exports);
console.log(module.exports);
console.log('---------------------------');