"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('alunos',
    'visitante', {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  }),

  down: () => { },
};
