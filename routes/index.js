var express = require('express');
var router = express.Router();
const db = require('../models/');

router.use(function(req,res,next){
  let loginP = ['doLogin'];
  let currRoute = req.path;
  console.log(currRoute);
  if(loginP.includes(currRoute)) {
    console.log(`==============CIEEEE============`);
    req.session.user ? next() : res.send('You need to login first');
  }
  else {
    next();
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  let currUser = req.session.user;
  res.render('index', {title: 'Menubar & Login', currUser: currUser});
});

router.get('/doLogout',function(req,res,next) {
  delete req.session.user;
  res.redirect('/');
});

router.post('/doLogin', function(req,res,next) {
  let username = req.body.username;
  let password = req.body.password;
  db.user.find({where: {username: username}})
    .then (user => {
      if (user.password === password) {
        console.log(user.username);
        req.session.user = {username:username};
        res.redirect('/');
      }
      else {
        res.redirect('/');
      }
    });
  //  db.user.findAll()
  //    .then (users => {
  //      users.forEach((user) => {
  //        if (user.username === username) {
  //          if (user.password === password) {
  //            req.session.user = {username: username};
  //            res.redirect('/');
  //          }
  //        } else {
  //          res.redirect('/');
  //        }
  //      });
  //    });
});

module.exports = router;
