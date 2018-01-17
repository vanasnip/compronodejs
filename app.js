//call and apply
// let me change what the this keyword points to 
var obj = {
    name: 'John Doe',
    greet: function(){
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
//call overwrites what the this keyword point to?
//.call({obj:'obj'},param1,param2,param3)
obj.greet.call({name: 'Jane Doe'});

//apply does the same as call except in implementation of params
//.apply({obj:'obj'},[param1,param2,param3])
obj.greet.apply({name: 'Jane Doe'});