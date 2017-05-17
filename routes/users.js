var express = require('express');
var router = express.Router();
const db = require('../models');


router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res) {
  res.render('login', {error: null})
});

router.post('/login', function(req, res){
  let username = req.body.username;
  db.User.find({
    where: {'username': username}
  })
  .then((userInfo) => {
    if(userInfo == null){
      res.render('login', {error: 'username or password is wrong'})
    } else {
      req.session.user = userInfo
      res.redirect('/user/dashboard')
    }
  })
})

router.get('/dashboard', function(req, res) {
  if(req.session.user){
    res.render('dashboard', {currentUser: req.session.user})
  } else {
    res.redirect('/')
  }
});


router.get('/logout', function(req, res){
  delete req.session.user
  res.redirect('login')
})

router.get('/register', function(req, res) {
  res.render('register', {success: null});
});

router.post('/register', function(req, res){
  let name = req.body.name
  let username = req.body.username
  let email = req.body.email
  let password = req.body.password
  db.User.create({
    name: name,
    username: username,
    email: email,
    password: password
  })
  .then(() =>{
    res.render('register', {success: 'You are now registered, please login'})
    sleep(2000)
    res.redirect('user/login')
  })
})



module.exports = router;
