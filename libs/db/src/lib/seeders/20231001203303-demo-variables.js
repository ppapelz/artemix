'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Variables', [
      {
        PromptID: 1,
        Label: 'Label1',
        Type: 'Type1',
        Name: 'Var1',
        Description: 'Description1',
        DefaultValue: 'DefaultValue1',
        ContentLimit: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PromptID: 1,
        Label: 'Label2',
        Type: 'Type2',
        Name: 'Var2',
        Description: 'Description2',
        DefaultValue: 'DefaultValue2',
        ContentLimit: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variables', null, {});
  }
};
