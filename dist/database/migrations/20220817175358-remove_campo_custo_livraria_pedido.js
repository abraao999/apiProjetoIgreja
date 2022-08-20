"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.removeColumn("livraria_pedidos", "custo"),

  down: () => {},
};
