module.exports = (sequelize, Sequelize) => {
    const ReceitaEvento = sequelize.define('receitaEvento', {
    idReceita: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    idEvento:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    idPessoa: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
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
        models.receitaEvento.model.belongsTo(models.receita.model, {
            foreignKey: 'idReceita',
            sourceKey: 'idReceita',
        });
    };
      

    return ReceitaEvento;
  }