var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/kontak', function(req, res, next) {
    res.render('kontak', { title: 'kontak', class: 'active' });
});

module.exports = router;
