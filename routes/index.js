var express = require('express');
var conn = require('../models');
var router = express.Router();


//middleware
function checkLogin(req,res,next){
  if(req.session.user)
    next()
  else res.render('./login', { title: 'Login', user: req.session.user, error: 'You Need To Login.' });
}

/* GET home page. */
router.get('/',function(req, res, next) {

  res.render('index', { title: 'Home',user:req.session.user});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login',user:req.session.user,error:""});
});

router.post('/login', function(req,res,next){
  let sess=req.session

  conn.User.findOne({where:{username:req.body.username,password:req.body.password}})
  .then(user =>{
    sess.user=user
    if(user)
    res.redirect('/');
    else {
    res.render('login', { title: 'Login', user: req.session.user, error: 'Invalid Username or Password.' });
    }
  })
  .catch(err =>{
    console.log(err);
  })
});

router.get('/home',checkLogin,function(req, res, next) {
  res.render('index', { title: 'Home', user:req.session.user});
});

module.exports = router;
