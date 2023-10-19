'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Prompts', [
      {
        content: 'Prompt 1 content',
        name: 'Prompt1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Prompt 2 content',
        name: 'Prompt2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Prompts', null, {});
  }
};
