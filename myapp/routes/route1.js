var express = require('express');
var router = express.Router();

/* GET route1 page. */
router.get('/', function(req, res, next) {
  res.render('route1', { title: 'Route1' });
});

module.exports = router;
