function carly(callback) {
    console.log('Hey this is crazy!');
    var data = {
        number: '415-999-9999'
    }
    callback(data);
}


// carly is given a function as an argument. this is the callback
// the callback is invoked inside function carly.
// can pass a parameter to carly from within carly.
carly(function(data) {
    console.log(`but here's my number: ${data.number}`);
});



