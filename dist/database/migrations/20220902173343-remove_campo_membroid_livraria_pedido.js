"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.removeColumn("livraria_reservas", "membro_id"),

  down: (queryInterface) =>
    queryInterface.addColumn("livraria_reservas", "membro_id"),
};
