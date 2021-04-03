module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("caixas", "setor_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "setors", key: "id" },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    }),

  down: () => {},
};
