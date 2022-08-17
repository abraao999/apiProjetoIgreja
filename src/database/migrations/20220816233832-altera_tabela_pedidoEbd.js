module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("livraria_pedidos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_pedido: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_pagamento: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      custo: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nome: {
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
      contato: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_pagamento: {
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
    queryInterface.dropTable("livraria_pedidos"),
};
