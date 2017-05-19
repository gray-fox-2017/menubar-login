'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users',[
      {username: 'admin',email:'admin@gmail.com',role:'admin',password:'123',createdAt:new Date(),updatedAt: new Date()},
      {username: 'spv',email:'spv@gmail.com',role:'spv',password:'123',createdAt:new Date(),updatedAt: new Date()},
      {username: 'cust',email:'cust@gmail.com',role:'cust',password:'123',createdAt:new Date(),updatedAt: new Date()}
    ],
    {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
