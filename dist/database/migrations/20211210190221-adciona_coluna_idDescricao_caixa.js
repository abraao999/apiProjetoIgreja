"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("caixas", "desc_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "desc_lancamentos", key: "id" },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    }),

  down: () => {},
};
