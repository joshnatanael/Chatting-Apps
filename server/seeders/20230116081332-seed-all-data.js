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
    await queryInterface.bulkInsert('ChatRooms', [
      {
        name: null,
        type: "personal",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    await queryInterface.bulkInsert('Members', [
      {
        UserId: 1,
        ChatRoomId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        ChatRoomId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    await queryInterface.bulkInsert('Messages', [
      {
        SenderId: 1,
        message: "test",
        ChatRoomId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('ChatRooms', null, {});
    await queryInterface.bulkDelete('Members', null, {});
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
