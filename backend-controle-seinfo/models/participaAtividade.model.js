module.exports = (sequelize, Sequelize) => {
    const ParticipaAtividade = sequelize.define('participaAtividade', {
    idPessoa: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'idPessoa',
        key: 'idPessoa',
      },
    },
    presenca:{
      type: Sequelize.BOOLEAN
    },
    confirmacaoPagamentoAtividade:{
      type: Sequelize.BOOLEAN
    },

    idEvento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'idEvento',
        key: 'idEvento',
      },
    },
    idAtividade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'idAtividade',
          key: 'idAtividade',
        },
      },
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
        foreignKey: 'idPessoa',
        sourceKey: 'idPessoa',
      });
    models.participaAtividade.model.hasMany(models.receitaInterna.model, {
        foreignKey: 'idPessoa',
        sourceKey: 'idPessoa',
        foreignKey: 'idEvento',
        sourceKey: 'idEvento',
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