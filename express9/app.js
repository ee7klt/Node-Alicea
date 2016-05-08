// will look in node_modules for express since it's not built in to node
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


// when a HTTP GET method comes in
// to url /
// run this callback with the req and res passed to it

app.get('/', function(req, res) {
    res.send('<html><body>  <h2> This is the express train to JS! </h2> </body>  </html>'
    )
});

app.get('/kyoto/:id', function(req,res) {
     res.send(`<html><body><h2> Vamos ${req.params.id}-chan! </h2></body></html>`
    )
});

app.get('/api', function(req, res){
    res.json({
        'dessert': 'warabimochi',
        'origin': 'kyoto'
    })
})

app.listen(3000);


