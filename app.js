var greet = require('./greet3');
greet.greet();
greet.greeting = 'changed greeting';
greet.greet();
var greetb = require('./greet3');
greetb.greet();


var greet4 = require('./greet4');
var grt = new greet4();
grt.greet();


var greet5 = require('./greet5');
greet5.greet();
console.log(greet5.greeting);
