
var person = function() {this.name = 'jane'};

var jane = new person();

//jane.createChild = function() {this.name = 'jordi'};

//var jordi = new  jane.createChild();

var jordi = Object.create(jane);
jordi.name = 'jordi';

person.prototype.getName = function() {console.log(this.name)};
jane.getName();
jordi.getName();

