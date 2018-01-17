//Binary data, Character sets and encoding
//Node expands on Javascript and gives us tool to deal with
//binary data, which JS isnt very good at dealing with

//Buffers

var buffed = new Buffer('Hello', 'utf8');
console.log(buffed);
console.log(buffed.toString());
console.log(buffed.toJSON());
console.log(buffed[2]);

buffed.write('wo');
console.log(buffed.toString());
