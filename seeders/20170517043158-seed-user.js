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
    return queryInterface.bulkInsert('Users', [{
      username: "budi",
      email: "budi@gmail.com",
      password: "budi123",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: "anto",
      email: "anto@gmail.com",
      password: "anto123",
      role: "supervisor",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: "susi",
      email: "susi@gmail.com",
      password: "susi123",
      role: "customer",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
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
