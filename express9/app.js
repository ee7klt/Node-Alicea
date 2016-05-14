// will look in node_modules for express since it's not built in to node
var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db'
})

connection.connect();

var app = express();
var port = process.env.PORT || 3000;

var apiController = require('./controllers/apiController.js');
var htmlController = require('./controllers/htmlController.js');

// use ejs.co as the template engine
app.set('view engine', 'ejs');

apiController(app);
htmlController(app);

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// })

// mount express.static middleware on to the /assets path
// when request comes in for any files in assets folder, serve it up using express.static
app.use('/assets', express.static(__dirname + '/public') );





app.listen(3000);


