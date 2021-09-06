module.exports = (sequelize, Sequelize) => {
  const Protagonista = sequelize.define(
    'protagonista',
    {
      atuacao: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: 'atuacao',
      },
      CPF: {
        type: Sequelize.STRING(64),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'pessoa',
          key: 'CPF',
        },
        field: 'CPF',
      },
      idAtividade: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'atividade',
          key: 'idAtividade',
        },
        field: 'idAtividade',
      },
    },
    {
      // Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'protagonista',
      timestamps: false,
      createdAt: false,
    }
  );

  Protagonista.associate = (models) => {
    models.protagonista.belongsTo(models.atividade, {
      as: 'aAtv',
      foreignKey: 'idAtividade',
    });

    models.protagonista.belongsTo(models.pessoa, {
      as: 'aPes',
      foreignKey: 'CPF',
    });
  };

  return Protagonista;
};
