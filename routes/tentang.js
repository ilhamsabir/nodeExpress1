var express = require('express');
var router = express.Router();

/* GET home page. */

 router.get('/tentang', function(req, res, next) {
   res.render('tentang/index', { title: 'tentang', class_tentang: 'active' });
 });

module.exports = router;
