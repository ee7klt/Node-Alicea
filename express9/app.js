// will look in node_modules for express since it's not built in to node
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// })

app.use('/assets', express.static(__dirname + '/public') );


// when a HTTP GET method comes in
// to url /
// run this callback with the req and res passed to it

app.get('/', function(req, res) {
    res.send('<html><body><head><link href=assets/style.css type=text/css rel=stylesheet><link/></head>  <h2> This is the express train to JS! </h2><img src=assets/file.jpeg /> </body>  </html>'
    )
});

app.get('/kyoto/:id', function(req,res) {
     res.send(`<html><body><h2> Vamos ${req.params.id}-chan! </h2></body></html>`
    )
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


