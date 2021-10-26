"use strict";module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("familia_visitantes", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      crente: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      igreja: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      data_culto: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true,
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
    queryInterface.dropTable("familia_visitantes"),
};
