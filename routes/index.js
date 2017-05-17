var express = require('express');
var router = express.Router();
const db = require('../models')
var helper = require('../helper/new_date.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user){
    db.Idea.findAll()
    .then(data=>{
      db.User.findOne({
        where:{
          username: req.session.user.username
        }
      })
      .then(user=>{
        res.render('index', {username:req.session.user.username, user:user,ideas:data,new_date:helper });
      }) 
    })   
    }      
  else{
    res.render('login')
  }
});

// router.get('/sukses',(req,res,next)=>{
//   res.render("sukses")
// })

module.exports = router;
