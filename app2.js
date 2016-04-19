var util = require('util');

function Persona() {
    this.nombre = 'Cuchillo',
    this.apellido = 'Gonzalez'
}

Persona.prototype.saludo = function() {
    console.log(`Qué pasa ${this.nombre} ${this.apellido} ?`);
}

function Policia() {
    Persona.call(this);
    this.numero = '123';
}

util.inherits(Policia, Persona);
var oficial = new Policia();
oficial.saludo();
