'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
  await queryInterface.bulkInsert('Users', [
    {
      name: 'John',
      email: 'john@gmail.com',
      password: 'xxxxx',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Wayne',
      email: 'wayne@gmail.com',
      password: 'xxxxx',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

  ], {});
  },

  async down (queryInterface, Sequelize) {
    
  }
};
