var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('login', { title: 'ADK Site'});
});

router.post('/', function(req, res, next) {
  db.User.findOne({where:{
    username:req.body.username
  }})
  .then(user=>{
    if(user.password==req.body.password){
      req.session.user = user
      res.redirect('/profile')
    } else {
      console.log('password not match');
      res.redirect('/')
    }
  })
  .catch(err=>{
    console.log('username not found');
    res.redirect('/')
  })
})

module.exports = router;
