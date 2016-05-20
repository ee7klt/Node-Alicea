var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    isDone: Boolean,
    hasAttachment: Boolean,
    todo: String
});

var Todos = mongoose.model('Todos', todoSchema);
module.exports=Todos;

