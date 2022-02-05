"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.removeColumn("membros", "function_id"),

  down: () => {},
};
