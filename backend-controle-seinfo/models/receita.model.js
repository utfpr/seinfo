module.exports = (sequelize, Sequelize) => {
    const Receita = sequelize.define('receita', {
      idReceita: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'idReceita'
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0',
        field: 'valor'
      },
      descricao: {
        type: Sequelize.STRING(500),
        allowNull: false,
        field: 'descricao'
      },
      idCaixa: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'caixa',
          key: 'idCaixa'
        },
        field: 'idCaixa'
      }
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'receita',
      timestamps: false,
      createdAt: false,
    });
    
    Receita.associate = models => {
        
        models.receita.model.belongsTo(models.caixa.model, {
            foreignKey: 'idCaixa',
            sourceKey: 'idCaixa',
        });
        models.receita.model.belongsTo(models.receitaEvento.model, {
            foreignKey: 'idReceita',
            sourceKey: 'idReceita',
        });
        models.receita.model.belongsTo(models.receitaInterna.model, {
            foreignKey: 'idReceita',
            sourceKey: 'idReceita',
        });
    };
      

    return Receita;
  }