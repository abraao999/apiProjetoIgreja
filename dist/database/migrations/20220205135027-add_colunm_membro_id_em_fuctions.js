"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("functions", "membro_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "membros", key: "id" },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    }),

  down: () => {},
};
