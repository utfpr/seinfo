module.exports = (sequelize, Sequelize) => {
    const Receita = sequelize.define('receita', {
    idReceita: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    valor:{
      type: Sequelize.INTEGER
    },
    descricao:{
        type: Sequelize.STRING
    },
    idCaixa: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'caixa',
        key: 'idCaixa',
      },
    },
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