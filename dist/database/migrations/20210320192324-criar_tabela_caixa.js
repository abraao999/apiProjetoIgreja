"use strict";module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("caixas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      departamento_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "departamentos", key: "id" },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      conta_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "conta", key: "id" },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable("caixas"),
};
