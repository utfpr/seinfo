const pessoaModel = require('./pessoa.model');

module.exports = (sequelize, Sequelize) => {
  const Presenca = sequelize.define(
    'presenca',
    {
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
      idAgenda: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'agenda',
          key: 'idAgenda',
        },
        field: 'idAgenda',
      },
      idEvento: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'evento',
          key: 'idEvento',
        },
        field: 'idEvento',
      },
      CPF: {
        type: Sequelize.CHAR(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'pessoa',
          key: 'CPF',
        },
        field: 'CPF',
      },
      presenca: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0',
        field: 'presenca',
      },
    },
    {
      // Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'presenca',
      timestamps: false,
      createdAt: false,
    }
  );

  Presenca.associate = (models) => {
    models.presenca.belongsTo(models.atividade, {
      // as: 'atividade',
      foreignKey: 'idAtividade',
      onUpdate: 'cascade',
      onDelete: 'cascade',
    });
    models.presenca.belongsTo(models.pessoa, {
      foreignKey: 'CPF',
    });
  };
  return Presenca;
};
