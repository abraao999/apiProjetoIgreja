/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("livraria_livros", "foto_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "livraria_fotos", key: "id" },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    }),

  down: (queryInterface) =>
    queryInterface.removeColumn("livraria_livros", "foto_id"),
};
