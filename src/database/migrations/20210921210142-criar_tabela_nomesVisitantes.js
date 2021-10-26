module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("nomes_visitantes", {
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
      familia_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "familia_visitantes", key: "id" },
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
    queryInterface.dropTable("nomes_visitantes"),
};
