var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //View model - al objeto (title: express)
  res.render('index', { 
    title: 'Express',
    author: 'Alfred Saucedo'
  });
});

module.exports = router;
