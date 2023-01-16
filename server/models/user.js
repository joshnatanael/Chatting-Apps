'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(model.Message, {
        foreignKey: 'SenderId'
      });
      User.hasMany(model.Message, {
        foreignKey: 'ReceiverId'
      });
    }
  }
  User.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name cannot be empty'
        },
        notEmpty: {
          msg: 'Name cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Email cannot be empty'
        },
        notEmpty: {
          msg: 'Email cannot be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password cannot be empty'
        },
        notEmpty: {
          msg: 'Password cannot be empty'
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Phone number cannot be empty'
        },
        notEmpty: {
          msg: 'Phone number cannot be empty'
        }
      }
    },
    role: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};