// js code downloaded by browser (client)
// angular.js would already have been loaded in the head tag of index.ejs

// set up new module (my angular app)
// similar idea to module.exports (self-contained, no collisions)
// empty array is list of modules that this module depends on (kinda like require)
angular.module('TestApp', []);

// now to do other things on TestApp
// add controller of name 'MainController' to TestApp
// and execute ctrlFunc
angular.module('TestApp')
    .controller('MainController', ctrlFunc);
    
    
function ctrlFunc() {
    // 'this' will point to vm in index.ejs because i said 'as vm'
    // vm = view model = model that i want for this particular screen
    this.message = 'Hello';
    // now messaged is attached to vm and can be accessed from index.
}
