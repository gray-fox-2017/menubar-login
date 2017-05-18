'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    let arr=[{
      username: 'james',
      email:'james@haha.com',
      password:'asdf',
      role:'admin',
      createdAt:new Date(),
      updatedAt: new Date()
    },{
      username: 'rachel',
      email:'rachel@haha.com',
      password:'asdf',
      role:'user',
      createdAt:new Date(),
      updatedAt: new Date()
    }]

    return queryInterface.bulkInsert('Users',arr,{});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
