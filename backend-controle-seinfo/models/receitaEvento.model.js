module.exports = (sequelize, Sequelize) => {
    const ReceitaEvento = sequelize.define('receitaEvento', {
      idReceita: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'receita',
          key: 'idReceita'
        },
        field: 'idReceita'
      },
      idEvento: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'inscricao',
          key: 'idEvento'
        },
        field: 'idEvento'
      },
      idPessoa: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'inscricao',
          key: 'idPessoa'
        },
        field: 'idPessoa'
      }
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'receitaEvento',
      timestamps: false,
      createdAt: false,
    });
    
    ReceitaEvento.associate = models => {
        
        models.receitaEvento.model.belongsTo(models.inscricao.model, {
            foreignKey: 'idPessoa',
            sourceKey: 'idPessoa',
        });
        models.receitaEvento.model.belongsTo(models.inscricao.model, {
          foreignKey: 'idEvento',
          sourceKey: 'idEvento',
      });
        models.receitaEvento.model.belongsTo(models.receita.model, {
            foreignKey: 'idReceita',
            sourceKey: 'idReceita',
        });
    };
      

    return ReceitaEvento;
  }