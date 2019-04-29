module.exports = (sequelize, Sequelize) => {
    const Lote = sequelize.define('lote', {
    idLote: {
      type: Sequelize.INTEGER,
       primaryKey: true,
      autoIncrement: true, // tem que definir PK e Auto Increment
      },
    valor: {
        type: Sequelize.FLOAT
      },
    dataAberutra: {
        type: Sequelize.STRING
      },
    dataFechamento: {
        type: Sequelize.STRING
      },
    idEvento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'idEvento',
        key: 'idEvento',
      },
    },
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'lote',
      timestamps: false,
      createdAt: false,
    });
    
    Lote.associate = models => {
        
    models.lote.model.belongsTo(models.evento.model, {
        foreignKey: 'idEvento',
        sourceKey: 'idEvento',
      });
      };


    return Lote;
  }
