'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AIModels', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ModelType: Sequelize.STRING,
      AIConnectionToken: Sequelize.STRING,
      Temperature: Sequelize.FLOAT,
      MaxLength: Sequelize.INTEGER,
      Stop: Sequelize.STRING,
      PresencePenalty: Sequelize.FLOAT,
      FrequencyPenalty: Sequelize.FLOAT,
      PromptID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Prompts',
          key: 'ID'
        },
        onDelete: 'CASCADE'
      },
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
    await queryInterface.dropTable('AIModels');

  }
};
