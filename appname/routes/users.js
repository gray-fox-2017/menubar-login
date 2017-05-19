var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('index', {user: req.session.currUser});
});

router.use(function (req, res, next) {
  let needLogin = ['/Products','/Employee','/Cart','/Logout'];
  let currRoute = req.path;
  if (needLogin.indexOf(currRoute)!== -1) {
    console.log('---------------------1');
    req.session.currUser ? next() : res.send('BUTUH LOGIN');
  } else {
    console.log('---------------------2');
    next();
  }
})

router.get('/Logout',(req,res,next)=> {
  delete req.session.currUser;
  res.redirect('/');
})

module.exports = router;
