//ES6 typed arrays
// ways for javascript to deal with binary data
var buffer = new ArrayBuffer(8) //8 byte or 64 bits

var view = new Int32Array(buffer); //<<typed array 
//dealing with binary data in buffer

//when i read from the array I'm reading from the buffer
//if i change the array I'm changing the buffer
// Int32Array : converts into the appropriate format
// Int32Array > 32bits 32 zeros and ones

view[0] = 5;
view[1] = 15; // only takes 2 number because of the contruct of
//how big we made the buffer and the Int32Array...<<evaluate
view[2] = 30;
console.log(view);