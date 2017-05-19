var express = require('express');
var router = express.Router();
var db = require('../models')
var helper = require('../helper/util.js')

/* GET home page. */
router.use(function(req, res, next) {
  let pageNeedLogin = ['/home', '/list/admin']

  let currentUser = req.session.user

  let currentPath = req.path
  if (pageNeedLogin.includes(currentPath)) {
    if (currentUser) {
      next()
    } else {
      res.redirect('/index')
    }
  } else {
    next()
  }
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Selamat Datang di Tempat-Tebakan', warning: "" });
});

router.post('/', function(req, res, next) {
  let userLogin = req.body.username;
  let passLogin = req.body.password;
  db.User.findOne({
    where: {
      username: userLogin
    }
  }).then( data => {
    if (data === null || data === undefined) {
      res.render('index', { title: 'Selamat Datang di Tempat-Tebakan', warning: "Username atau Password Salah"})
    } else if ( data.username === userLogin && data.password === passLogin) {
      console.log('dah berhasil validasi username dan email')
      req.session.user = {username: userLogin, role: data.role};
      // req.session.role = "user"
      console.log('-----------------', req.session)
      console.log('dah declare')
      // res.send(req.session)
      // res.render('index', { title: 'Selamat Datang di Tempat-Tebakan', warning: null })
      res.redirect('/home')
    } else {
      res.send('haha!!!')
    }
  })
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Selamat Datang di Tempat-Tebakan', warning: "Mesti Log in dlu " })
})

router.get('/home', function(req, res, next) {

  let currentUser = req.session.user;

  if (currentUser.role == 'user') {
    res.render('home-sekedarnya')
  } else if (currentUser.role == 'admin') {
    res.render('home-admin')
  } else {
    res.send('nah lho nyasar, situ perannya apaan??')
  }

})

router.post('/register', function(req, res, next) {
  let newUser = req.body.newUsername;
  let newEmail = req.body.newEmail;
  let newPass = req.body.newPassword;
  db.User.findOrCreate({
    where: {
      username: newUser
    },
    defaults: {
      email: newEmail,
      password: newPass,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }).then( (user, created) => {
    if (created == true) {
      res.render('register', {msg: 'Akun mu sudah siap!!'})
    } else {
      res.render('register', {msg: 'Username dengan nama tersebut sudah terpakai :('});
    }
  })
})

router.get('/logout', function(req, res, next) {
  delete req.session.user
  console.log('terhapuskah --->')
  console.log(req.session.user)
  res.redirect('/')
})

router.get('/list/admin', function(req, res, next) {
  let currentUser = req.session.user
  if (currentUser.role != 'admin') {
    res.send('maaf! hanya admin yang bisa mengakses halaman ini')
  } else {
    db.User.findAll().then(data => {
      res.render('user-list.ejs', {data:data})
    })
  }
})

router.get('/delete/:id', function(req,res,next) {
  let user_id = req.params.id;
  db.User.destroy({
    where: {
      id: user_id
    }
  }).then( () => {
    res.redirect('/list/admin')
  })
})
module.exports = router;
