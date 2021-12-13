/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("caixas", "n_nota", {
      type: Sequelize.STRING,
      allowNull: true,
    }),

  down: () => {},
};
