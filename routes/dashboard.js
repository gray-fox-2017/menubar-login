var express = require('express');
var router = express.Router();
var db = require('../models')

router.get('/',function(req,res,next) {
  // res.send('Ini Dashboard' + JSON.stringify(req.session.role.role))
  res.render('dashboard',{username : req.session.user.username , role : req.session.role.role})
})

router.post('/add_user',function(req,res,next) {
  db.User.create({
    username : req.body.add_user_username,
    email : req.body.add_user_email,
    password : req.body.add_user_password,
    role : req.body.select_role
  })
  .then(function() {
    res.render('dashboard',{username : req.session.user.username , role : req.session.role.role})
  })
  console.log(req.body.select_role);
})

module.exports = router;
