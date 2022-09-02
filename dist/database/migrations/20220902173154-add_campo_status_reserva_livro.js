"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("livraria_reservas", "status", {
      type: Sequelize.STRING,
      allowNull: true,
    }),

  down: (queryInterface) =>
    queryInterface.removeColumn("livraria_reservas", "autor"),
};
