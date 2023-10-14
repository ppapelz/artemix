'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Variables', [
      {
        promptID: 1,
        label: 'Label1',
        type: 'Type1',
        name: 'Var1',
        description: 'Description1',
        defaultValue: 'DefaultValue1',
        contentLimit: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        promptID: 1,
        label: 'Label2',
        type: 'Type2',
        name: 'Var2',
        description: 'Description2',
        defaultValue: 'DefaultValue2',
        contentLimit: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variables', null, {});
  }
};
