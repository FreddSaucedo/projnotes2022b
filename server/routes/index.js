const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // View model - al objeto (title: express)
  res.render('index', {
    title: 'Express',
    author: 'Alfred Saucedo',
  });
});

module.exports = router;
