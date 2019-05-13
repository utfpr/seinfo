module.exports = (sequelize, Sequelize) => {
    const ReceitaInterna = sequelize.define('receitaInterna', {
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
      idAtividade: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'participaAtividade',
          key: 'idAtividade'
        },
        field: 'idAtividade'
      },
      idEvento: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'participaAtividade',
          key: 'idEvento'
        },
        field: 'idEvento'
      },
      idPessoa: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'participaAtividade',
          key: 'idPessoa'
        },
        field: 'idPessoa'
      }
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'receitaInterna',
      timestamps: false,
      createdAt: false,
    });
    
    ReceitaInterna.associate = models => {
        
        models.receitaInterna.model.belongsTo(models.participaAtividade.model, {
            foreignKey: 'idAtividade',
            sourceKey: 'idAtividade',
        });
        models.receitaInterna.model.belongsTo(models.receita.model, {
            foreignKey: 'idReceita',
            sourceKey: 'idReceita',
        });
    };
      

    return ReceitaEvento;
  }