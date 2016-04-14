var Emitter = require('./emitter');

var emtr = new Emitter();

// i want to respond to an event 'affirm'
// i'm calling 'affirm' an event, but its actually just a property name.
// fake events!!

// add responses (functions) that'll respond to the 'affirm' event.
emtr.on('affirm', function () {
    console.log('I am a loveable human being');
});

emtr.on('affirm', function() {
    console.log('What a beautiful world!');
});

// the affirmation
console.log('Good morning!');

// Hey, an affirmation happened, go tell the listeners!
emtr.emit('affirm');