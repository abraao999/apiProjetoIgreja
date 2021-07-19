/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('membros',

    'bairro', {
    type: Sequelize.STRING,
    allowNull: true,
  }),

  down: () => { },
};
