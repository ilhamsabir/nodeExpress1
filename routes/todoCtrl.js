var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var router = express.Router();
/* GET todo page. */
mongoose.connect('mongodb://localhost/laramongo');

//schema mongoose
var todoSchema =  new mongoose.Schema({
  item:String
});

var Todo = mongoose.model('Todo', todoSchema);

var urlencodeParser = bodyParser.urlencoded({extended: false});


 router.get('/todo', function(req, res) {
   Todo.find({}, function(err, data){
      if (err) throw err;
       res.render('todo', {title: 'todo', active_todo: 'active', todos: data});
    });

 });

 router.get('/todo/new', function(req, res) {
       res.render('newtodo', {title: 'todo', active_todo: 'active'});
 });

 router.post ('/todo/new',urlencodeParser, function(req, res){
    var newTodo = Todo(req.body).save(function(err,data){
      if (err) throw err;
       res.json(data);
    });
  });



module.exports = router;
