// changed exports from empty function to something else

exports = function() {
    console.log('hello'); // replace exports object with this.
}

console.log(exports);  
console.log(module.exports); 
// at this moment, module.exports and exports point to the same location in memory.