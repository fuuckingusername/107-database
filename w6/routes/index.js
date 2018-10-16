var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '405417113', name: '曾昱文' });
});

module.exports = router;