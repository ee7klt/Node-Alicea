// function statement

function greet() {
  console.log("Hi");
}

//greet();

//function are first class

function logGreeting(fn) {
  fn();
}

logGreeting(greet);

// expressions
3
'imma string'

// function expression
var greetMe = function() {
  console.log('hi alex');
}
// still first class
logGreeting(greetMe);


// use a function expression on the fly

logGreeting(function () {
  console.log('heyya!');
})
