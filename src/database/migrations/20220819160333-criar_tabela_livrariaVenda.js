module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("livraria_vendas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data_venda: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      tipo_pagamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_cliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      membro_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "membros", key: "id" },
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
    queryInterface.dropTable("livraria_vendas"),
};
