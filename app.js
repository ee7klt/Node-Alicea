
// i want this to be the template for other objects i create

var person = {
    firstName: '',
    lastName: '',
    fedForehand: function() {
        return this.firstName + ' ' + this.lastName + ': congratulations, you\'ve just been upgraded to the most elegant forehand available!'; 
    }
}

// instead of putting this in a constructor, 
// use object.create


// gives me an empty object whose prototype is person
var alex = Object.create(person);

// can overwrite them 

alex.firstName = 'Alex'
alex.lastName = 'Tah'

// but if it doesn't find it defined, it'll go down the chain
// like in this case it can't find fedForehand so it'll go down to find it in the prototype
console.log(alex);
console.log(alex.__proto__);
console.log(person.prototype);  // undefined
console.log(person);
console.log(alex.__proto__ === person);   // true
// it looks like person IS the prototype. 


// this below returns
// TypeError: Cannot set property 'djokerBackhand' of undefined
// because there is no person.prototype.
// person.prototype.djokerBackhand = function() {
//     return this.firstName + ' ' + this.lastName + ': congratulations, you\'ve just been upgraded to the most versatile backhand available!';
// }


// so it looks like the difference between new and Object.create is that
// new puts the constructor.prototype on to the newobject.__proto__
// whereas Object.create puts the actual templateobject on to newobject.__proto__ (as opposed to templateobject.prototype)

