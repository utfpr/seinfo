module.exports = (sequelize, Sequelize) => {
    const Caixa = sequelize.define('caixa', {
    idCaixa: {
      type: Sequelize.INTEGER,
       primaryKey: true,
      },
    idEvento: {
        type: Sequelize.INTEGER,
         primaryKey: true,
    },

  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'caixa',
      timestamps: false,
      createdAt: false,
    });
    
    Caixa.associate = models => {

          models.caixa.model.belongsTo(models.evento.model, {
            foreignKey: 'idEvento',
            sourceKey: 'idEvento',
          });


    };


    return Caixa;
  }