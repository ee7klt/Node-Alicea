var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

// i want to respond to an event 'affirm'
// i'm calling 'affirm' an event, but its actually just a property name.
// fake events!!

// add responses (functions) that'll respond to the 'affirm' event.
emtr.on(eventConfig.AFFIRM, function () {
    console.log('I am a loveable human being');
});

emtr.on(eventConfig.AFFIRM, function() {
    console.log('What a beautiful world!');
});

// the affirmation
console.log('Good morning!');

// Hey, an affirmation happened, go tell the listeners!
emtr.emit(eventConfig.AFFIRM);