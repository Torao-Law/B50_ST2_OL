'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todos', [{
      title: "Mandi Optional",
      isDone: false,
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
