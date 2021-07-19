/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('membros',
    'cidade', {
    type: Sequelize.STRING,
    allowNull: true,
  }),

  down: () => { },
};
