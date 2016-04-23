'use strict';




var EventEmitter = require('events');


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


module.exports = new Greetr;