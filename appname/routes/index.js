var express = require('express');
var router = express.Router();
const db = require('../../models')
const helper = require('../../helper/util.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user:req.session.currUser} );
});

router.get('/login',(req,res,next)=> {
  res.render('frmLogin', {user:req.session.currUser});
})



router.post('/doLogin',(req,res,next)=> {
  let where =  {
    username : req.body.username,
    password: req.body.password
  }
  db.User.findOne({where:where})
  .then((user)=>{
    let menu = helper.getMenu(user.role);
    req.session.currUser = {user:user, menu:menu};
    res.redirect('/users/');
    // res.render('/users', req.session.currUser);
  })
  .catch((err)=>{
    let errmsg =
    `Invalid user
      ${err}
    `;
    res.send(errmsg);
  })
})
module.exports = router;
