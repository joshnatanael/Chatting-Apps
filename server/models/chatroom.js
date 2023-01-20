'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ChatRoom.hasMany(models.Member);
      ChatRoom.hasMany(models.Message);
    }
  }
  ChatRoom.init({
    name: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Type chat room cannot be empty'
        },
        notEmpty: {
          msg: 'Type chat room cannot be empty'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'ChatRoom',
  });
  return ChatRoom;
};