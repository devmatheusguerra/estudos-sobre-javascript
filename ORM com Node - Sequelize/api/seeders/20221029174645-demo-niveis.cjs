'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Niveis', [{
      descr_nivel: 'Fundamental', createdAt: new Date(), updatedAt: new Date() }, { descr_nivel: 'Médio', createdAt: new Date(), updatedAt: new Date() }, { descr_nivel: 'Avançado', createdAt: new Date(), updatedAt: new Date() }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
