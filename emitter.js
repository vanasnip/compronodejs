function Emitter(){
    this.events = {};
}


Emitter.prototype.on = function(type, listener){
    //the first time we create a property and its an empty array
    this.events[type] = this.events[type] || [];
    //then we push the function into that array
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        //we loop through and run every function in the array
        this.events[type].forEach(function(listener){
            listener(); 
        });
    }
}

module.exports = Emitter;