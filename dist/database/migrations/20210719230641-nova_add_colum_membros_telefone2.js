"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('membros',
    'telefone2', {
    type: Sequelize.STRING,
    allowNull: true,
  }),

  down: () => { },
};
