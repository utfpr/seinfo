module.exports = (sequelize, Sequelize) => {
    const ParticipaAtividade = sequelize.define('participaAtividade', {
      idAtividade: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'atividade',
          key: 'idAtividade'
        },
        field: 'idAtividade'
      },
      confirmacaoPagamentoAtividade: {
        type: Sequelize.INTEGER(4),
        allowNull: false,
        defaultValue: '0',
        field: 'confirmacaoPagamentoAtividade'
      },
      presenca: {
        type: Sequelize.INTEGER(4),
        allowNull: false,
        defaultValue: '0',
        field: 'presenca'
      },
      idEvento: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'inscricao',
          key: 'idEvento'
        },
        field: 'idEvento'
      },
      idPessoa: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'inscricao',
          key: 'idPessoa'
        },
        field: 'idPessoa'
      }
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'participaAtividade',
      timestamps: false,
      createdAt: false,
    });
    
    ParticipaAtividade.associate = models => {
        
    models.participaAtividade.model.belongsTo(models.inscricao.model, {
        foreignKey: 'idEvento',
        sourceKey: 'idEvento',
    }),
    models.participaAtividade.model.belongsTo(models.inscricao.model, {
        foreignKey: 'idPessoa',
        sourceKey: 'idPessoa',
    });
    models.participaAtividade.model.hasMany(models.receitaInterna.model, {
        foreignKey: 'idPessoa',
        sourceKey: 'idPessoa',
    }),
    models.participaAtividade.model.hasMany(models.receitaInterna.model, {
        foreignKey: 'idEvento',
        sourceKey: 'idEvento',
    }),
    models.participaAtividade.model.hasMany(models.receitaInterna.model, {
        foreignKey: 'idAtividade',
        sourceKey: 'idAtividade',
    });
    models.participaAtividade.model.belongsTo(models.atividade.model, {
        foreignKey: 'idAtividade',
        sourceKey: 'idAtividade',
      });
    };
      

    return ParticipaAtividade;
  }