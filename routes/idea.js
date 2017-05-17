var express = require('express');
var router = express.Router();
const db = require('../models')

router.post('/addidea/:username',(req,res,send)=>{
  db.Idea.create({
    idea:req.body.idea,
    notes: req.body.notes,
    user_id: req.params.username
  })
  .then(data=>{
    res.redirect('/')
  })
})

router.get('/add/:username',(req,res,send)=>{
  res.render(`idealist/add`,{username: req.params.username})
})

router.get('/edit:id',(req,res,send)=>{
  db.Idea.findOne({
    where:{
      id:req.params.id
    }
  })
  .then(data=>{
    res.render('/idealist/edit', {idea:data})
  })
})

router.post('/update/:id',(req,res,send)=>{
  db.Idea.update({
    idea:req.body.idea,
    notes: req.body.notes
  },{
    where:{
      id:req.params.id
    }
  })
  .then(data=>{
    res.redirect("/")
  })
})

router.get('/delete/:id',(req,res,send)=>{
  db.Idea.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(data=>{
    res.redirect('/')
  })
})


module.exports = router