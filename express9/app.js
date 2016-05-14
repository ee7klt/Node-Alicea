// will look in node_modules for express since it's not built in to node
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
// use ejs.co as the template engine
app.set('view engine', 'ejs');
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds023052.mlab.com:23052/addressbook');

var Schema = mongoose.Schema;
var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
})

var Person = mongoose.model('Person', personSchema);

var pedro = Person({
    firstname: 'Pedro',
    lastname: 'Muchacho',
    address: 'Villa de Pontifica'
});

pedro.save(function(err) {
    if (err) throw err;
    console.log('person saved!');
})


// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// })

// mount express.static middleware on to the /assets path
// when request comes in for any files in assets folder, serve it up using express.static
app.use('/assets', express.static(__dirname + '/public') );
app.use('/', function(req,res,next) {
    console.log('Request url: ' + req.url);
   // console.log('__dirname is '+ __dirname);
   Person.find({}, function(err, users) {
        if (err) throw err;
        console.log(users);
    })

  next();
});



// when a HTTP GET method comes in
// to url /
// run this callback with the req and res passed to it
// request for css from assets
app.get('/', function(req, res) {
    res.render('index'); // automatically inserts .ejs from app.set
});

app.get('/kyoto/:site', function(req,res) {
    res.render('sites', {SITE: req.params.site, Qstr: req.query.color});
});

app.post('/person', urlencodedParser, function(req,res) {
   res.send(`hello ${req.body.username}!`);
   console.log(req.body); 
});


app.get('/api/person/:id', jsonParser, function(req, res) {
    // get data from dB
    res.json({username: 'user', password: 'pass'});
})


app.post('/api/person', jsonParser, function(req, res) {
    // save to dB
})

app.delete('/api/person/:id', function(req,res) {
    // delete from database
})




app.get('/api', function(req, res,next){
    res.json({
        'dessert': 'warabimochi',
        'origin': 'kyoto'
    })
    next();
},
    function(req,res,next){
        console.log(`this is api`);
    }
);




app.listen(3000);


