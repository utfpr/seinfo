/* Referencia para os Tipos e Dados:
 https://sequelize.readthedocs.io/en/v3/docs/models-definition/ */

const { generateHash } = require('../utils/hash');

module.exports = (sequelize, Sequelize) => {
  const Pessoa = sequelize.define(
    'pessoa',
    {
      idPessoa: {
        type: Sequelize.STRING(64),
        allowNull: false,
        field: 'idPessoa',
      },
      nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: 'nome',
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        field: 'email',
      },
      CPF: {
        type: Sequelize.CHAR(11),
        allowNull: false,
        unique: true,
        primaryKey: true,
        field: 'CPF',
      },
      senha: {
        type: Sequelize.CHAR(32),
        allowNull: false,
        field: 'senha',
      },
      nivel: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: 'nivel',
      },
      classificacao: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: 'classificacao',
      },
    },
    {
      // Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'pessoa',
      timestamps: false,
      createdAt: false,

      setterMethods: {
        senha(value) {
          if (value) this.setDataValue('senha', generateHash(value));
        },
      },
    }
  );

  // ????
  Pessoa.associate = (models) => {
    models.pessoa.hasMany(models.inscricaoEvento, {
      as: 'inscrito',
      foreignKey: 'CPF',
    });
    models.pessoa.hasMany(models.presenca, {
      foreignKey: 'CPF',
    });
  };

  return Pessoa;
};
