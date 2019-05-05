module.exports = (sequelize, Sequelize) => {
    const Despesa = sequelize.define('despesa', {
    idDespesa: {
      type: Sequelize.INTEGER,
       primaryKey: true,
      autoIncrement: true, // tem que definir PK e Auto Increment
      },
    descricao: {
        type: Sequelize.STRING
      },
    valorUnitario: {
        type: Sequelize.FLOAT
      },
    quantidade: {
        type: Sequelize.INTEGER
      },
    idCaixa: {
        type: Sequelize.INTEGER
      },
    },
  
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'despesa',
      timestamps: false,
      createdAt: false,
    });
    
    Despesa.associate = models => {
        
    models.despesa.model.belongsTo(models.caixa.model, {
        foreignKey: 'idCaixa',
        sourceKey: 'idCaixa',
      });
      };


    return Despesa;
  }
