module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("livraria_reservas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data_reserva: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nome_cliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      celular: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      livro_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "livraria_livros", key: "id" },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
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
    queryInterface.dropTable("livraria_reservas"),
};
