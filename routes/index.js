var express = require('express');
var router = express.Router();
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



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Home', active_home:'active' });
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', active_about: 'active' });
});

router.get('/todo', function(req, res) {
  Todo.find({}, function(err, data){
     if (err) throw err;
      /*var cek = JSON.parse(data);*/
      res.render('todo', {title: 'todo', active_todo: 'active', todos: data});
   });

});

router.get('/todo/new', function(req, res) {
      res.render('newtodo', {title: 'todo', active_todo: 'active'});
});

router.post ('/todo/new',urlencodeParser, function(req, res){
  var input = JSON.parse(JSON.stringify(req.body));
  var newData = {
         judul    : input.judul,
         kategori : input.kategori,
         isi      : input.isi
     };

  newData.save_one(function(err) {
     if (err) throw err;
      res.json(data);
   });

 });



module.exports = router;
