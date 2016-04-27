var http = require('http');
var fs = require('fs');
http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'application/json' })
    var obj = {
        debit: '$10000',
        credit: '$300',
        comment: 'Lightspeed are leeches'
        
    }
    res.end(JSON.stringify(obj));
}).listen(1337,'127.0.0.1');
