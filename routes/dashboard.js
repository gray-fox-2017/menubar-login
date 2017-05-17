var express = require('express');
var router = express.Router();
const db = require('../models');
const util = require('../helpers/util.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  let currentUser = req.session.user
  let options = util.roleManager(currentUser.role)
  res.render('dashboard', { currentUser: currentUser, options: options });
});


module.exports = router;
