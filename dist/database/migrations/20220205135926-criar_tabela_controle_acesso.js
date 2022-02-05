"use strict";module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("controle_acessos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      membro_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "membros", key: "id" },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      function_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "functions", key: "id" },
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

  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable("controle_acessos"),
};
