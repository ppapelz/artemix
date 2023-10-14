'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AIModels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelType: Sequelize.STRING,
      aiConnectionToken: Sequelize.STRING,
      temperature: Sequelize.FLOAT,
      maxLength: Sequelize.INTEGER,
      stop: Sequelize.STRING,
      presencePenalty: Sequelize.FLOAT,
      frequencyPenalty: Sequelize.FLOAT,
      promptId: {
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
