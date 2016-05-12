
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();


module.exports = function(app) {
    app.use('/', function(req,res,next) {
    console.log('Request url: ' + req.url);
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