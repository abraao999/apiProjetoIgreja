/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('membros',
    'cep', {
    type: Sequelize.STRING,
    allowNull: true,
  }),

  down: () => { },
};
