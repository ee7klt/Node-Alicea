var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = "Hello world!";
    
}

// any objects created by Greetr should have access to the prototype properties
// of EventEmitter
util.inherits(Greetr, EventEmitter);

// can add my own properties later
Greetr.prototype.greet = function() {
    console.log(this.greeting);
    // can call methods from EventEmitter on 'this' because the 
    // created object has been connected via the newly created prototype chain 
    // to EventEmitter
    this.emit('greet');
}



var greeter1 = new Greetr();
greeter1.on('greet', function() {
    console.log('someone greeted');
});

greeter1.greet();

console.log(Greetr.prototype);
