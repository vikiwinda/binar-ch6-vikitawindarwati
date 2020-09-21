'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_game.hasOne(models.user_game_biodata, {
        foreignKey: 'userIdBio',
        as: 'user_game_biodata'
      })
      user_game.hasOne(models.user_game_history, {
        foreignKey: 'userIdHistory',
        as: 'user_game_history'
      })
    }
  };
  user_game.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    console: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game',
  }, {
    // freezeTableName: true,
  });
  return user_game;
};