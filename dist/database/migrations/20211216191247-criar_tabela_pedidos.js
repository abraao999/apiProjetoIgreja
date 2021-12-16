"use strict";module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("pedidos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      solicitante: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      favorecido: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pedido: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_culto: {
        type: Sequelize.DATE,
        allowNull: false,
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable("pedidos"),
};
