module.exports = function(app) {
    app.get('/api/person/:id',  function(req, res) {
    // get data from dB
    res.json({username: 'user', password: 'pass'});
})


app.post('/api/person', function(req, res) {
    // save to dB
})

app.delete('/api/person/:id', function(req,res) {
    // delete from database
})

}