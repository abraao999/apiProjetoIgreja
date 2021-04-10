module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("caixas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tipo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_operacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      departamento_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "departamentos", key: "id" },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      setor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "setors", key: "id" },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable("caixas"),
};
