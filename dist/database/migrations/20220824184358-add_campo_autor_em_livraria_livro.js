"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("livraria_livros", "autor", {
      type: Sequelize.STRING,
      allowNull: true,
    }),

  down: (queryInterface) =>
    queryInterface.removeColumn("livraria_livros", "autor"),
};
