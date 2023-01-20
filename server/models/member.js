'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Member.belongsTo(models.User);
      Member.belongsTo(models.ChatRoom);
    }
  }
  Member.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'User id cannot be empty'
        },
        notEmpty: {
          msg: 'User id cannot be empty'
        }
      }
    },
    ChatRoomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Chat room id cannot be empty'
        },
        notEmpty: {
          msg: 'Chat room id cannot be empty'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};