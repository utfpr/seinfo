module.exports = (sequelize, Sequelize) => {
    const ReceitaInterna = sequelize.define('receitaInterna', {
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
    idAtividade:{
        type: Sequelize.INTEGER,
        allowNull: false
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