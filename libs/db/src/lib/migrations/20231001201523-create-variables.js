'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Variables', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PromptID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Prompts',
          key: 'ID'
        },
        onDelete: 'CASCADE'
      },
      Label: Sequelize.STRING,
      Type: Sequelize.STRING,
      Name: Sequelize.STRING,
      Description: Sequelize.TEXT,
      DefaultValue: Sequelize.TEXT,
      ContentLimit: Sequelize.INTEGER,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Variables');

  }
};
