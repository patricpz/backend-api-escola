'use strict';

const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Patric',
          email: 'patric1@teste.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Patric 123',
          email: 'patric2@teste.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Patric 234',
          email: 'patric3@teste.com',
          password_hash: await bcryptjs.hash('987654', 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
  }
};
