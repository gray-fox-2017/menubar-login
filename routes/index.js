var express = require('express');
var router = express.Router();
var db = require('../models')

router.use(function(req, res,next){
  let pageNeedLogin = ['/dashboard']
  console.log(req);
  let currentRoute = req.path
  if(pageNeedLogin.includes(currentRoute)){
    console.log('-----------------1');
    req.session.user ? next() : res.send(currentRoute+' NEED LOGIN')
  }else{
    console.log('-----------------2');
    next()
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , login_rejected : ""});
  next()
});

router.post('/login', function(req,res,next) {
  db.User.findAll({
    where : {
      username : req.body.username,
      password : req.body.password
    }
  })
  .then(function(Users) {
    //found data or not
    if (Users.length == 0){
      res.render('index',{title: "", login_rejected : "Password and username match not found"})
    } else {
      if(Users[0].role == 'admin'){
        req.session.user = {username : Users[0].username.toString()}
        req.session.role = {role : Users[0].role.toString()}
        res.redirect('/dashboard')
      } else if (Users[0].role == 'supervisor'){
        req.session.user = {username : Users[0].username.toString()}
        req.session.role = {role : Users[0].role.toString()}
        res.redirect('/dashboard')
      } else if (Users[0].role == 'customer'){
        req.session.user = {username : Users[0].username.toString()}
        req.session.role = {role : Users[0].role.toString()}
        res.redirect('/dashboard')
      }
    }
  })
  .catch(function(err) {
    //return to login page with error message
    res.render('index',{title: "", login_rejected : "internal error" + err})
  })
})

router.post('/logout', function(req,res,next) {

})

module.exports = router;
