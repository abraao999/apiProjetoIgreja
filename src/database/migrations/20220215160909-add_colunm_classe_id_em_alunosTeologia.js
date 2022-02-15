/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("teologia_alunos", "classe_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "teologia_classes", key: "id" },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    }),

  down: () => {},
};
