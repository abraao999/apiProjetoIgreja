"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('membros',

    'complemento', {
    type: Sequelize.STRING,
    allowNull: true,
  }),

  down: () => { },
};
