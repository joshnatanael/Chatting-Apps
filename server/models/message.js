'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.User, {
        foreignKey: "SenderId"
      });
      Message.belongsTo(models.User, {
        foreignKey: "ReceiverId"
      });
    }
  }
  Message.init({
    SenderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Sender Id cannot be empty'
        },
        notEmpty: {
          msg: 'Sender Id cannot be empty'
        }
      }
    },
    ReceiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Receiver Id cannot be empty'
        },
        notEmpty: {
          msg: 'Receiver Id cannot be empty'
        }
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Message cannot be empty'
        },
        notEmpty: {
          msg: 'Message cannot be empty'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};