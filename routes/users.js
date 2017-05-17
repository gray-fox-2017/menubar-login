var express = require('express');
var router = express.Router();
const db = require('../models')
/* GET users listing. */

router.post('/signup', (req,res,send)=>{
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: "Admin"
  })
  .then(data=>{
    res.redirect(`/`)
  })
})

router.post('/login/in',(req,res,send)=>{
  db.User.findOne({
    where:{
      username: req.body.username,
      password: req.body.password
    }
  })
  .then(users=>{
    if (users) {
      req.session.user = {username: req.body.username}
      res.redirect(`/`)
    } else {
      res.redirect('/users/login')
    }
    
  })
})

router.get('/login',(req,res,send)=>{
  res.render('login')
})

router.get('/signup',(req,res,send)=>{
  res.render('signup')
})

router.get('/logout',(req,res,send)=>{
  delete req.session.user
  // console.log(req.session);
  res.redirect('/users/login')
})

router.get('/admin',(req,res,send)=>{
  db.User.findAll()
  .then(users=>{
    res.render('admin',{users:users})
  })
})

router.get('/edit/:id',(req,res,send)=>{
  db.User.findOne({
    where:{
      id:req.params.id
    }
  })
  .then(user=>{
    res.render('editprofile',{user:user})
  })  
})

router.post('/update/:id',(req,res,send)=>{
  db.User.update({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role || "User"
  },{
    where:{
      id: req.params.id
    }
  })
  .then(data=>{
    res.redirect('/')
  })
})

router.get('/delete/:id',(req,res,send)=>{
  db.User.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(data=>{
    res.redirect(`/users/admin`)
  })
})

module.exports = router;
