var db = require('../models')
var session = require('express-session');

function cekUsername(res, req, user, pass) {
  db.User.findOne({
    where: {
      username: `${user}`
    }
  }).then(data => {

  })
}

module.exports= cekUsername;