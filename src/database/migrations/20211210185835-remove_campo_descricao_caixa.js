/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.removeColumn("caixas", "descricao"),

  down: () => {},
};
