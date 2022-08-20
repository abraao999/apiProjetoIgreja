/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("livraria_pedidos", "status", {
      type: Sequelize.STRING,
      allowNull: true,
    }),

  down: (queryInterface) =>
    queryInterface.removeColumn("livraria_pedidos", "status"),
};
