var greeter1 = require('./saludo.es6');


greeter1.on('saludo', function(data1, data2) {
    console.log(`someone greeted ${data1} y ${data2}`);
});

greeter1.saludo('Alex','Jo');
