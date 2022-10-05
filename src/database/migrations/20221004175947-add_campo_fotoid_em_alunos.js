/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("alunos", "foto_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "ebd_fotos", key: "id" },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    }),

  down: (queryInterface) => queryInterface.removeColumn("alunos", "foto_id"),
};
