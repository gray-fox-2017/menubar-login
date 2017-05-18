var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/', function(req, res, next) {
  let user = req.session.user
  if(user){
    res.render('profile', {title:'ADK Site',user:user});
  } else {
    res.redirect('/')
  }
});

module.exports = router;
