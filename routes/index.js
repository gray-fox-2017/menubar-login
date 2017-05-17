var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let currentUser = req.session.user
  res.render('index', { currentUser: currentUser});
});

router.get('/logout', function(req, res, next) {
  delete req.session.user
  res.redirect('/')
})

module.exports = router;
