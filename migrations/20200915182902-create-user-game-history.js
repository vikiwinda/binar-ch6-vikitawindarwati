'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_game_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userIdHistory: {
        type: Sequelize.INTEGER,
        references: { model: 'user_games', key: 'id' },
        onDelete: 'CASCADE',
      },
      lastLogin: {
        allowNull: true,
        type: Sequelize.DATE
      },
      hoursPlayed: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      gamesPlayed: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      badges: {
        allowNull: true,
        type: Sequelize.TEXT
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_game_histories');
  }
};