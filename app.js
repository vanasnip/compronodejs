var num = 0;
function greet(callback){
    console.log('_______________________________');
    console.log('the function was invoked');
    callback();
}
var callback1 = function(){
    console.log('then the callback was invoked');
    console.log('_______________________________');
}

greet(callback1);


//how we structure if the call back takes a parameter
function greet2(lastname, callback){
    //set a value here that is always passed to the callback
    var data = {
        firstname: 'John',
    }
    callback(data.firstname, lastname);
}

var callback2 = function(firstname, lastname){
    console.log('hello', firstname, lastname);
    console.log('call back with passed in param runs');
    console.log('_______________________________');
}

greet2('Doe', callback2);