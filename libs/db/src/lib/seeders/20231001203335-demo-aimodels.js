'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('AIModels', [
      {
        modelType: 'Type1',
        aiConnectionToken: 'Token1',
        temperature: 0.8,
        maxLength: 100,
        stop: 'Stop1',
        presencePenalty: 0.2,
        frequencyPenalty: 0.3,
        promptID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelType: 'Type2',
        aIConnectionToken: 'Token2',
        temperature: 0.7,
        maxLength: 150,
        stop: 'Stop2',
        presencePenalty: 0.1,
        frequencyPenalty: 0.4,
        promptID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('AIModels', null, {});
  }
};
