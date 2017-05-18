var express = require('express');
var router = express.Router();

router.use(function(req, res,next){
  let pageNeedLogin = ['/items', '/dashboard', '/checkout']
  console.log(req);
  let curretRoute = req.path
  if(pageNeedLogin.includes(curretRoute)){
    console.log('-----------------1');
    req.session.user ? next() : res.send(curretRoute+' NEED LOGIN')
  }else{
    console.log('-----------------2');
    next()
  }
})

/* GET home page. */
router.get('/', function(req, res, next){
  next();
},

function(req, res, next) {
  let currentUser = req.session.user;
  res.render('index', { title: 'Express', currentUser: currentUser });
});

router.get('/items', function(req, res){
  let currentUser = req.session.user;
  res.render('index', { title: 'Express', currentUser: currentUser });
})

router.get('/checkout', function(req, res){
  let currentUser = req.session.user;
  res.render('index', { title: 'Express', currentUser: currentUser });
})

router.get('/dashboard', function(req, res){
  let currentUser = req.session.user;
  res.send(`Dashboard page: ${currentUser.username}`);
})


router.get('/login', function(req, res){
  res.render('login')
})

router.get('/logout', function(req,res){
  delete req.session.user
  res.redirect('/')
})

router.post('/doLogin', function(req, res){
  let paramsUser = req.body;
  if(paramsUser.username === "hello" && paramsUser.password == "123456"){
    req.session.user = {username: paramsUser.username}
    res.redirect('/')
  }else{
    res.send('Login Error')
  }
})

module.exports = router;
