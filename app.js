var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = "Hello world!";
    
}

// any objects created by Greetr should have access to the prototype properties
// of EventEmitter
util.inherits(Greetr, EventEmitter);

// can add my own properties later
Greetr.prototype.greet = function(data1, data2) {
    console.log(this.greeting + ': ' + data1+', '+data2);
    // can call methods from EventEmitter on 'this' because the 
    // created object has been connected via the newly created prototype chain 
    // to EventEmitter
    this.emit('greet', data1, data2);
}



var greeter1 = new Greetr();
greeter1.on('greet', function(data1, data2) {
    console.log('someone greeted: '+ data1+', '+ data2);
});

greeter1.greet('Alex','Jo');

console.log(Greetr.prototype);
