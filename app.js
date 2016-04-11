var util = require('util');

var name = 'Alex';
var greeting = util.format('Hello, %s', name);
util.log(greeting);