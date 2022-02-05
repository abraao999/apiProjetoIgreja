/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.removeColumn("functions", "membro_id"),

  down: () => {},
};
