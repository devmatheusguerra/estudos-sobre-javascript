'use strict';
const { randName, randDate, randNumber } = require('../utils/random.cjs');
let turmas = [];
for (let i = 0; i < 10; i++) {
  const name = randName();
  turmas.push({
    data_inicio: randDate(),
    nivel_id: randNumber(1, 3),
    docente_id: randNumber(41, 42),
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Turmas', turmas, {});

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
