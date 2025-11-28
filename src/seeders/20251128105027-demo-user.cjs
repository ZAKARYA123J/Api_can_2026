// src/seeders/XXXXXX-demo-user.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username: 'Jcxocxfsdfhn',
        email: 'examcxple@example.com',
        password:"RFGGH4",
         role: 'admin'
      },
      {
        username: 'Jcxcxofsdsdfhn',
        email: 'examcsdxple@example.com',
        password:"RFGGH4",
         role: 'admin'
      },
      {
        username: 'JcxoTYTfsdfhn',
        email: 'examdscxple@example.com',
        password:"RFGGH4",
         role: 'admin'
      },
      {
        username: 'Jcxoxcfsdfhn',
        email: 'exxcamcxple@example.com',
        password:"RFGGH4",
         role: 'admin'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};