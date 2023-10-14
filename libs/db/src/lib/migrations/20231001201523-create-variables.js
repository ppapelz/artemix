'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Variables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      promptID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Prompts',
          key: 'ID'
        },
        onDelete: 'CASCADE'
      },
      label: Sequelize.STRING,
      type: Sequelize.STRING,
      name: Sequelize.STRING,
      description: Sequelize.TEXT,
      defaultValue: Sequelize.TEXT,
      contentLimit: Sequelize.INTEGER,
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
