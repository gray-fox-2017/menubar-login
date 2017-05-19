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
      username: 'dramaharian',
      email: 'dramaharian@google.com',
      password: 'versatil',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'kukubimo',
      email: 'kukukaki@google.com',
      password: 'kakukaku',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'jariruri',
      email: 'jadijuri@google.com',
      password: 'jarijuri',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'miranda',
      email: 'mirsaya@google.com',
      password: 'andadansaya',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'admintebakan',
      email: 'admin@tebakan.com',
      password: 'versatil',
      role: 'admin',
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
    return queryInterface.bulkDelete('Users', null, {})
  }
};
