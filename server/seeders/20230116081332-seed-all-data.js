'use strict';

const { hashPassword } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        fullName: "User1",
        email: "user1@mail.com",
        password: hashPassword("12345"),
        phoneNumber: "08123123123",
        role: "customer",
        status: "online",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: "User2",
        email: "user2@mail.com",
        password: hashPassword("12345"),
        phoneNumber: "08123123123",
        role: "customer",
        status: "online",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
    await queryInterface.bulkInsert('Contacts', [
      {
        fullName: "User2",
        phoneNumber: "08123123123",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    await queryInterface.bulkInsert('Messages', [
      {
        SenderId: 1,
        ReceiverId: 2,
        message: "test",
        ContactId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
