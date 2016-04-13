// 32. object properties and methods


var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';  // not the property, but the variable that points to the string that is the property name.
console.log(obj[prop]);

// functions and arrays

var arr = [];
// functions sitting in array (uninvoked)
arr.push( function() {
    console.log('hello world 1');
})
arr.push( function() {
    console.log('hello world 2');
})
arr.push( function() {
    console.log('hello world 3');
})

arr.forEach(function (item) {
    item();
})