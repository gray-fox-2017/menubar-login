var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */

router.get('/', function(req, res, next) {
  let user = req.session.user
  if(user){
    if(user.role=='admin'){
      db.User.findAll()
      .then(users=>{
        res.render('userlist', { title: 'ADK Site',users:users});
      })
    }
  } else {
    res.redirect('/')
  }
});

module.exports = router;
