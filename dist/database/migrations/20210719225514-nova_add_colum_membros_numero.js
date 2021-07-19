"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('membros',

    'numero', {
    type: Sequelize.STRING,
    allowNull: true,
  }),

  down: () => { },
};
