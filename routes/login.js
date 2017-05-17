var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next) {
  let username = req.body.username
  let password = req.body.password
  db.User.find({
    where: { username: username }
  })
  .then(user => {
    if( user.password == password ) {
      req.session.user = {
        username: username,
        role: user.role
      }
      res.redirect('/dashboard')
    } else {
      res.send('Wrong Password')
    }
  })
  .catch(err => {
    res.send('No such user')
  })
});

module.exports = router;
