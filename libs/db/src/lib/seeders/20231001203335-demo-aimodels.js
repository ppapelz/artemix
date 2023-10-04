'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('AIModels', [
      {
        ModelType: 'Type1',
        AIConnectionToken: 'Token1',
        Temperature: 0.8,
        MaxLength: 100,
        Stop: 'Stop1',
        PresencePenalty: 0.2,
        FrequencyPenalty: 0.3,
        PromptID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ModelType: 'Type2',
        AIConnectionToken: 'Token2',
        Temperature: 0.7,
        MaxLength: 150,
        Stop: 'Stop2',
        PresencePenalty: 0.1,
        FrequencyPenalty: 0.4,
        PromptID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Models', null, {});
  }
};
