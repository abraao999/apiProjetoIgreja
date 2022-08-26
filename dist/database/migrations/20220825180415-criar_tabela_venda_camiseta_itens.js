"use strict";module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("livraria_venda_iten_camisetas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      venda_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "livraria_venda_camisetas", key: "id" },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      camiseta_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "livraria_camisetas", key: "id" },
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
    queryInterface.dropTable("livraria_venda_iten_camisetas"),
};
