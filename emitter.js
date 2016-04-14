// constructor for emitters
function Emitter() {
    this.events = {};
  
}

// on: method to add a listener
// type: type of event
// listener: code that responds to an event. 
//           can have many listeners for a given event, so use array to store the listeners.

Emitter.prototype.on = function(type, listener) {
   // if events[type] does not exist, return empty array;
   this.events[type] = this.events[type] || [];  
   // push listeners on to the array corresponding to the correct type
   this.events[type].push(listener);
}


// emit: hey, something happened
//       i'm emitting an event, whoever's watching for it can respond.
// type: type of event

Emitter.prototype.emit = function(type) {
   // emit will check to see if there's an event of this type in the library
   if (this.events[type]) {
       // if there is, loop through all the functions listening for this event type
       // and execute them one at a time.
       this.events[type].forEach(function(listener) {
           listener();
       })
   } 
}

// If I had an emitter called MyEmitter, it will look like:

// MyEmitters = {
//     events: {
//         gotSomethingFromInternet: [fn1, fn2, ...],
//         onButtonClick: [fn1, fn2, fn3, ...],
//         etc...
//     }
// }


// expose the function constructor
module.exports = Emitter;