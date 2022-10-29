'use strict';
const { randName, randEmail, randRole, randBoolean } = require('../utils/random.cjs');
let persons = [];
for (let i = 0; i < 10; i++) {
  const name = randName();
  persons.push({
    nome: name,
    email: randEmail(name),
    role: randRole(),
    ativo: randBoolean(),
    createdAt: new Date(),
    updatedAt: new Date()
  });
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Pessoas', persons, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
