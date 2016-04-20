'use strict';

var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter {
    constructor() {
        super();   
          this.greeting = "Saludos!";
    }
    
    saludo (data1, data2) {
        console.log(`${this.greeting}`);
        this.emit('saludo', data1, data2);
    }
    
}


var greeter1 = new Greetr();
greeter1.on('saludo', function(data1, data2) {
    console.log(`someone greeted ${data1} y ${data2}`);
});

greeter1.saludo('Alex','Jo');
