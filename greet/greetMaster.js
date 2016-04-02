
// import json object database of greetings.
var greetings =  require('./greetings');


var greet = function(lang) {
    switch lang = {
        case 'en': console.log(greetings.en); break;
        case 'es': console.log(greetings.es);
    }
}

