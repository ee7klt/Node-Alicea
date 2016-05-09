// will look in node_modules for express since it's not built in to node
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// use ejs.co as the template engine
app.set('view engine', 'ejs');



// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// })

// mount express.static middleware on to the /assets path
// when request comes in for any files in assets folder, serve it up using express.static
app.use('/assets', express.static(__dirname + '/public') );
app.use('/', function(req,res,next) {
    console.log('Request url: ' + req.url);
    console.log('__dirname is '+ __dirname);
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
    res.render('sites', {SITE: req.params.site});
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




app.listen(3000);


