module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("livraria_revistas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data_pedido: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      trimestre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      setor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "setors", key: "id" },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      classe_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "classes", key: "id" },
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
    queryInterface.dropTable("livraria_revistas"),
};
