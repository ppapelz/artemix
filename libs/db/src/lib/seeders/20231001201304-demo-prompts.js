'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Prompts', [
      {
        Content: 'Prompt 1 content',
        Name: 'Prompt1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Content: 'Prompt 2 content',
        Name: 'Prompt2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Prompts', null, {});
  }
};
