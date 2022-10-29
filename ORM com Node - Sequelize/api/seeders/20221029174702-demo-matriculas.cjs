'use strict';

const { randBoolean, randNumber } = require('../utils/random.cjs');
let matriculas = [];
for (let i = 0; i < 10; i++) {
  matriculas.push({
    status: randBoolean() ? 'confirmado' : 'cancelado',
    estudante_id: randNumber(35,36),
    turma_id: randNumber(1, 10),
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Matriculas', matriculas, {});
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
