"use strict";module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("membros", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_batismo: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      profissao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado_civil: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cargo_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "cargos", key: "id" },
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
      setor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "setors", key: "id" },
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable("membros"),
};
