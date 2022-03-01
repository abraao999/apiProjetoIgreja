"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("membros", "nome_conjuge", {
      type: Sequelize.STRING,
      allowNull: true,
    }),

  down: () => {},
};
