var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('No hay recurso 😔');
});

module.exports = router;
