var greet = function() {
    console.log('hello from englishland');
}


// module is passed to this function
// and it has an exports parameter on it.
// this file really is run as a function.
module.exports = greet;