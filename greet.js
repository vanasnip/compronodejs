
//this pattern wont work due some quirk with using = create a new object and destroys the reference to the object we are interested in 'module.exports' because thats what its exposed when require gets involded
exports = function(){
    console.log('Hello');
}
// this is bad, this breaks the reference to the same object as module.exports which means the function is not attached to module.exports.

console.log('--------------------------- \'=\' Destroys reference');
console.log(exports);
console.log(module.exports);
console.log('--------------------------- solve by attaching to existing obj');