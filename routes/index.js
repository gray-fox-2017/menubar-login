var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'ADK Site'});
});

router.post('/', function(req, res, next) {
  db.User.create({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
    role:'user'
  })
  .then(user=>{
    req.session.user = user
    res.redirect('/profile')
  })
  .catch((err) => {
    let arr = []
    for (var i = 0; i < err.errors.length; i++) {
      arr.push(err.errors[i].message)
    }
    res.render('errorpage',{title:'ADK site',errors:arr.join(' & ')})
  })
});


module.exports = router;
