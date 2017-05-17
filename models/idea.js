'use strict';
module.exports = function(sequelize, DataTypes) {
  var Idea = sequelize.define('Idea', {
    idea: DataTypes.STRING,
    notes: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // Idea.belongsTo(models.User,{foreignKey: "user_id"})
      }
    }
  });
  return Idea;
};