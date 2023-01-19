'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contact.hasMany(models.Message, {
        foreignKey: 'ContactId'
      });
      Contact.belongsTo(models.User, {
        foreignKey: "UserId"
      });
    }
  }
  Contact.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Contact name cannot be empty'
        },
        notEmpty: {
          msg: 'Contact name cannot be empty'
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
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};