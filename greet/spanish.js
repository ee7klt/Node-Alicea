var greetings = require('./greetings')

var greet = function() {
    console.log(greetings.es);
}


// module is passed to this function
// and it has an exports parameter on it.
// this file really is run as a function.
module.exports = greet;