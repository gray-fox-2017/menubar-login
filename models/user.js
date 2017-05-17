'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // User.hasMany(models.Idea,{foreignKey: 'user_id'})
      }
    }
  });
  return User;
};