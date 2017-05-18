var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */

router.get('/', function(req, res, next) {
  delete req.session.user
  res.render('logout',{title:'ADK Site'})
});



module.exports = router;
