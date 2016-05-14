
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds023052.mlab.com:23052/addressbook')

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

module.exports = function(app) {
    app.use('/', function(req,res,next) {
    console.log('Request url: ' + req.url);
    
    Person.find({}, function(err, users) {
        if (err) throw err;
        console.log(users);
    })
   // console.log('__dirname is '+ __dirname);
   

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

}